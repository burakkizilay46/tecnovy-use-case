"use client";

import { Dispatch, SetStateAction, useState } from "react";

import { FormData } from "@/app/types/form";
import Input from "@/app/components/input";
import Button from "@/app/components/button";

type FormProps = {
  formData: FormData;
  setFormData: Dispatch<SetStateAction<FormData>>;
};

const CertificateForm: React.FC<FormProps> = ({ formData, setFormData }) => {
  const [errors, setErrors] = useState<{ [key in keyof FormData]?: string }>(
    {}
  );

  const validateForm = () => {
    let newErrors: { [key in keyof FormData]?: string } = {};
    if (!formData.email) newErrors.email = "E-Mail-Adresse is required";
    if (!formData.salutation) newErrors.salutation = "Anrede is required";
    if (!formData.firstname) newErrors.firstname = "Vorname is required";
    if (!formData.lastname) newErrors.lastname = "Nachname is required";
    if (!formData.address) newErrors.address = "Adresse is required";
    if (!formData.postalCode) newErrors.postalCode = "Postleitzahl is required";
    if (!formData.city) newErrors.city = "Stadt is required";
    if (!formData.country) newErrors.country = "Land is required";
    if (!formData.phone) newErrors.phone = "Telefonnummer is required";
    if (!formData.mobile) newErrors.mobile = "Handynummer is required";
    if (!formData.certEmail)
      newErrors.certEmail = "E-Mail-Adresse for certificate is required";
    if (!formData.certSalutation)
      newErrors.certSalutation = "Anrede for certificate is required";
    if (!formData.certFirstname)
      newErrors.certFirstname = "Vorname for certificate is required";
    if (!formData.newsletter)
      newErrors.newsletter = "You must accept the terms and conditions";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form submitted successfully", formData);
    }
  };

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      <div className="grid grid-cols-2 gap-4">
        <Input
          title="E-Mail-Adresse"
          type="email"
          value={formData.email}
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, email: e.target.value }))
          }
          error={errors.email}
        />
        <Input
          title="Anrede"
          value={formData.salutation}
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, salutation: e.target.value }))
          }
          error={errors.salutation}
        />
        <Input
          title="Vorname"
          value={formData.firstname}
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, firstname: e.target.value }))
          }
          error={errors.firstname}
        />
        <Input
          title="Nachname"
          value={formData.lastname}
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, lastname: e.target.value }))
          }
          error={errors.lastname}
        />
        <Input
          title="Adresse"
          value={formData.address}
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, address: e.target.value }))
          }
          error={errors.address}
        />
        <Input
          title="Postleitzahl"
          value={formData.postalCode}
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, postalCode: e.target.value }))
          }
          error={errors.postalCode}
        />
        <Input
          title="Stadt"
          value={formData.city}
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, city: e.target.value }))
          }
          error={errors.city}
        />
        <Input
          title="Land"
          value={formData.country}
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, country: e.target.value }))
          }
          error={errors.country}
        />
        <Input
          title="Telefonnummer"
          type="tel"
          value={formData.phone}
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, phone: e.target.value }))
          }
          error={errors.phone}
        />
        <Input
          title="Handynummer"
          type="tel"
          value={formData.mobile}
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, mobile: e.target.value }))
          }
          error={errors.mobile}
        />
      </div>
      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          checked={formData.newsletter}
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, newsletter: e.target.checked }))
          }
          className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
        />
        <label className="text-sm text-gray-700">
          Also follow tectrain Newsletter.
        </label>
      </div>
      <Button clickFunc={() => handleSubmit}>Save</Button>
    </form>
  );
};

export default CertificateForm;
