"use client";

import SocialLinks from "@helpers/SocialLinks";
import Image from "next/image";
import { useRef, useState } from "react";
import { useInView } from "react-intersection-observer";
import emailjs from "@emailjs/browser";

const Form = () => {
  const form = useRef();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState(null);
  const [sucessMessage, setSucessMessage] = useState(null);

  const { ref, inView } = useInView();

  const removeSucessMessage = () => {
    setTimeout(() => {
      setSucessMessage(null);
    }, 5000);
  };

  const sendEmail = async (e) => {
    e.preventDefault();

    if (
      !name.trim() ||
      !email.trim() ||
      !email.includes("@") ||
      !message.trim()
    ) {
      setError("Please fill all Fields");
      return;
    }

    try {
      const res = await emailjs.sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        form.current,
        process.env.NEXT_PUBLIC_SECRET_KEY
      );

      if (!res.status === 200) {
        setError("Request was not completed");
        return;
      }
      setError(null);
      setSucessMessage("Your request was successful");
      e.target.reset();
      setMessage(null);
      setName(null);
      setEmail(null);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section className="overflow-hidden ">
      <div className="h-[90vh] w-full grid place-items-center relative transCombo">
        {error && (
          <div
            className={`px-7 py-1 bg-red-400 absolute top-3 rounded-sm ${
              inView && "shake"
            }`}
            ref={ref}
          >
            <p className="text-sm text-white font-medium font-Poppins">
              {error}
            </p>
          </div>
        )}

        {sucessMessage && (
          <div className="px-7 py-1 bg-green-300 absolute top-3 rounded-sm slide-form">
            <p className="text-sm text-white font-medium font-Poppins">
              {sucessMessage}
            </p>
          </div>
        )}

        {sucessMessage && removeSucessMessage()}

        <div className="w-[90%] sm:w-[70%] lg:w-[35%] grid place-items-center">
          <div>
            <Image
              src="/assets/images/image-removebg-preview (3).png"
              alt="hire-me"
              width={250}
              height={250}
              quality={100}
              priority
            />
          </div>

          <form className="relative deskform" onSubmit={sendEmail} ref={form}>
            <div>
              <input
                className="deskinput"
                type="text"
                placeholder="Name"
                name="user_name"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div>
              <input
                className="deskinput"
                type="email"
                placeholder="Email"
                name="user_email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <textarea
                placeholder="A short description"
                rows="7"
                cols="40"
                id="text-area"
                name="message"
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>
            <div className="w-10 h-10 rounded-[50%]  bg-box1 flex justify-center items-center absolute -right-[20%] bottom-[25%] animateButton">
              <button type="submit">
                <Image
                  className="w-5"
                  src="/assets/images/icons8-send-24.png"
                  alt="twitter"
                  width={30}
                  height={30}
                ></Image>
              </button>
            </div>
          </form>
        </div>
      </div>

      <SocialLinks />
    </section>
  );
};

export default Form;
