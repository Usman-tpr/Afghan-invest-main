import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Address = () => {
  const { t } = useTranslation();
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setError(""); // Clear error when user starts typing
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      toast.error(t("message.error"))
    } else {
      // Handle valid form submission logic here
      toast.success(t("message.success"))
    }
  };

  return (
    <div className="w-full bg-mstheme px-4 md:px-0 md:w-[1100px] mx-auto py-16 rounded-lg text-white my-6">
      <h2 className="text-center text-4xl font-bold my-8">
        {t("eventsPage-update-main-title")}
      </h2>
      <p className="text-center text-lg mb-8">
        {t("eventsPage-update-desc")}
      </p>

      <form
        className="flex flex-col md:flex-row justify-center  gap-4"
        onSubmit={handleSubmit}
      >
        <div className="w-full md:w-2/3">
          <input
            type="email"
            value={email}
            onChange={handleEmailChange}
            placeholder={t("eventspage-input-placeholder")}
            className={`w-full p-4 rounded-lg text-gray-900 focus:outline-none ${
              error ? "border-2 border-red-500" : ""
            }`}
          />

        </div>
        <button
          type="submit"
          className="w-full md:w-auto p-4 bg-white text-mstheme rounded-lg font-semibold hover:bg-opacity-90 transition duration-300"
        >
          {t("eventspage-update-btn")}
        </button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Address;
