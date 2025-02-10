"use client";
import { useState } from "react";
import Button from "./components/button";
import Modal from "./components/modal";
import CertificateForm from "./views/forms/modal_content";
import { FormData } from "./types/form";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    salutation: "",
    firstname: "",
    lastname: "",
    address: "",
    postalCode: "",
    city: "",
    country: "",
    phone: "",
    mobile: "",
    certEmail: "",
    certSalutation: "",
    certFirstname: "",
    newsletter: false,
  });

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
    <main className="w-full h-screen flex justify-center items-center">
      <div className="flex w-[661px] h-[86px] rounded-2xl bg-white shadow justify-between items-center pl-[40px] pr-6">
        <p className="font-medium text-2xl leading-8">Add Participant</p>
        <Button clickFunc={() => setIsModalOpen(true)}>Add</Button>
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Add Participant Info"
        submitFunc={() => handleSubmit}
      >
        <CertificateForm
          formData={formData}
          setFormData={setFormData}
          errors={errors}
        />
      </Modal>
    </main>
  );
}
