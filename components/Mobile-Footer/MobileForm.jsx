"use client";

import Loader from "@helpers/loader";
import { useEffect, useRef, useState } from "react";
import { BsHandThumbsUpFill } from "react-icons/bs";

export default function MobileForm({
  onAddFormData,
  successMessage,
  setSuccessMessage,
  spinner,
}) {
  const [isError, setSetIsError] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const form = useRef();

  const handleSubmit = function (e) {
    e.preventDefault();

    const validation = !email.trim() || !email.includes("@") || !message.trim();

    try {
      if (validation) throw new Error("Missing required fields");
      onAddFormData(setEmail, setName, setMessage, form, e);
    } catch (error) {
      setSetIsError(true);
    }
  };

  useEffect(() => {
    if (successMessage) setTimeout(setSuccessMessage, 2000);
  }, [successMessage]);

  return (
    <>
      <form
        className="flex flex-col mt-8 gap-5"
        onSubmit={handleSubmit}
        ref={form}
      >
        <div className="flex flex-col">
          <label
            className="font-Inter tracking-wider text-gray-600"
            htmlFor="user_name"
          >
            Name
          </label>
          <input
            onChange={(e) => setName(e.target.value)}
            type="text"
            name="user_name"
            className=" font-Inter border-0 border-gray-200 outline-none rounded-none h-10 w-full px-2 hover:border-[1px] text-gray-700"
          />
        </div>

        <div className="flex flex-col">
          <label
            className="font-Inter tracking-wider text-gray-600"
            htmlFor="user_email"
          >
            Email <span className="text-red-500">*</span>
          </label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            name="user_email"
            className=" font-Inter border-0 outline-none h-10  w-full rounded-none px-2 hover:border-[1px] text-gray-700"
            required
          />
        </div>

        <div className="flex flex-col">
          <label
            className="font-Inter tracking-wider text-gray-600"
            htmlFor="message"
          >
            Message <span className="text-red-500">*</span>
          </label>
          <textarea
            onChange={(e) => setMessage(e.target.value)}
            name="message"
            required
            rows="3"
            maxLength="250"
            className="font-Inter border-0 outline-none rounded-none  w-full p-2 text-gray-700 resize-none"
          />
          {isError && (
            <p className="text-red-500 text-xs mt-1 font-Poppins">
              Missing required fields
            </p>
          )}
        </div>

        <div className="mt-2 mobile:m-auto">
          {successMessage ? (
            <button
              disabled
              className="px-7 flex items-center justify-center gap-2  py-[6px] rounded-sm border-0 font-Inter bg-green-500 text-white tracking-wider"
            >
              Sent
              <BsHandThumbsUpFill />
            </button>
          ) : (
            <button className="flex justify-center items-center w-28 py-[6px] rounded-sm border-0 font-Inter bg-black/90 text-white tracking-wider active:opacity-75">
              {spinner ? <Loader /> : "Submit"}
            </button>
          )}
        </div>
      </form>
    </>
  );
}
