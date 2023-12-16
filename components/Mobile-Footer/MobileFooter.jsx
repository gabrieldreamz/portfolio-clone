"use client";

import HeaderText from "@helpers/HeaderText";
import ParagraphText from "@helpers/ParagraphText";
import MobileForm from "./MobileForm";
import MobileSocials from "./MobileSocials";
import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function MobileFooter() {
  const [spinner, setSpinner] = useState(false);
  const [successMessage, setSuccessMessage] = useState(false);

  const onAddFormData = async (setEmail, setName, setMessage, form, e) => {
    setSpinner(true);
    const res = await emailjs.sendForm(
      process.env.NEXT_PUBLIC_SERVICE_ID,
      process.env.NEXT_PUBLIC_TEMPLATE_ID,
      form.current,
      process.env.NEXT_PUBLIC_SECRET_KEY
    );
    if (!res.status === 200) {
      return;
    }
    setSpinner(false);
    setSuccessMessage(true);
    e.target.reset();
    setEmail("");
    setName("");
    setMessage("");
  };

  return (
    <section
      id="contact-me"
      className="p-5 bg-gray-100 mt-32 mobile:flex mobile:flex-col items-center relative"
    >
      <HeaderText text="Let's talk?" />
      <ParagraphText text="Got a Creative Idea, a job or project that you need help with? Hola me and let's connect" />
      <MobileForm
        onAddFormData={onAddFormData}
        successMessage={successMessage}
        setSuccessMessage={setSuccessMessage}
        spinner={spinner}
      />
      <MobileSocials />
    </section>
  );
}
