"use client";

import { Dispatch, SetStateAction, useState } from "react";

import { FormData } from "@/app/types/form";
import Input from "@/app/components/input";

type FormProps = {
  formData: FormData;
  setFormData: Dispatch<SetStateAction<FormData>>;
  errors: { [key in keyof FormData]?: string };
};

const CertificateForm: React.FC<FormProps> = ({
  formData,
  setFormData,
  errors,
}) => {
  return (
    <div>
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
    </div>
  );
};

export default CertificateForm;
