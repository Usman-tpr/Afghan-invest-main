import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Custom marker icon (to fix missing default marker issue in Leaflet)
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
});

export default function ContactHero() {
  const { t } = useTranslation();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: false,
    email: false,
  });

  const validateForm = () => {
    let valid = true;
    let newErrors = { name: false, email: false };

    // Validate name (only letters allowed)
    if (!/^[a-zA-Z\s]+$/.test(formData.name) || formData.name.trim() === "") {
      newErrors.name = true;
      valid = false;
    }

    // Validate email
    if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email) ||
      formData.email.trim() === ""
    ) {
      newErrors.email = true;
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      toast.success("Form submitted successfully!");
    } else {
      toast.error(t("message.error"));
    }
  };

  // Coordinates for Kabul, Afghanistan
  const mapCenter = [34.489444, 69.128889];

  return (
    <div className="min-h-screen w-full">
      {/* Hero Section */}
      <div
        className="w-full min-h-96 mt-[64px] bg-cover bg-center relative"
        style={{
          backgroundImage: `url(${"/assets/images/contact/contact-us-page-hero.png"})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white text-center px-6">
          <h1 className="text-5xl font-bold mb-4">{t("contactPage-main-title")}</h1>
          <p className="text-xl mb-6">{t("contactPage-main-desc")}</p>
        </div>
      </div>

      {/* Contact Form */}
      <div className="w-full px-4 md:px-0 md:w-[1100px] mx-auto my-24">
        <h2 className="text-center text-4xl font-bold my-8 text-mstheme">
          {t("contactPage-msg-main-title")}
        </h2>
        <div className="w-full h-1 bg-gradient-to-r from-transparent via-mstheme to-transparent mb-12"></div>

        <form className="space-y-8" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder={t("contactPage-input-name-placeholder")}
              className={`w-full p-4 border rounded-lg focus:outline-none ${
                errors.name ? "border-red-500" : "border-gray-300 focus:border-mstheme"
              }`}
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder={t("contactPage-input-email-placeholder")}
              className={`w-full p-4 border rounded-lg focus:outline-none ${
                errors.email ? "border-red-500" : "border-gray-300 focus:border-mstheme"
              }`}
            />
          </div>
          <textarea
            rows="5"
            name="message"
            maxLength={200}
            value={formData.message}
            onChange={handleInputChange}
            placeholder={t("contactPage-input-msg-placeholder")}
            className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:border-mstheme"
          ></textarea>
          <span className="flex justify-end">{formData.message.length}/200</span>
          <button
            type="submit"
            className="w-full p-4 bg-mstheme text-white rounded-lg font-semibold hover:bg-opacity-90 transition duration-300"
          >
            {t("contactPage-msg-btn")}
          </button>
        </form>
      </div>

      <ToastContainer />

      {/* Map Section */}
      <div className="w-full px-4 md:px-0 md:w-[1100px] mx-auto my-12">
        <h2 className="text-center text-4xl font-bold my-8 text-mstheme">
          {t("contactPage-map-title")}
        </h2>
        <div className="w-full h-[500px] rounded-lg overflow-hidden shadow-lg">
          <MapContainer
            center={mapCenter}
            zoom={13}
            style={{ height: "100%", width: "100%" }}
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution="&copy; <a href='http://osm.org/copyright'>OpenStreetMap</a> contributors"
            />
            <Marker position={mapCenter}>
              <Popup>
                Kabul, Afghanistan <br /> Darul-Aman Palace
              </Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
    </div>
  );
}
