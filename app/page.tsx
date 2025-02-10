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
      >
        <CertificateForm formData={formData} setFormData={setFormData} />
      </Modal>
    </main>
  );
}
