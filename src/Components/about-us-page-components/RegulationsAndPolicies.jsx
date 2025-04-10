import React from "react";
import { useTranslation } from "react-i18next";
import { jsPDF } from "jspdf";
import { FiDownload } from "react-icons/fi";
export default function RegulationsAndPolicies() {
  const { t } = useTranslation();

  const policies = [
    {
      title: t("regAndPol-imp-pol-1st-card-title") || "Policy 1",
      description:
        t("regAndPol-imp-pol-1st-card-desc") ||
        "This is a description of policy 1.",
    },
    {
      title: t("regAndPol-imp-pol-2nd-card-title") || "Policy 2",
      description:
        t("regAndPol-imp-pol-2nd-card-desc") ||
        "This is a description of policy 2.",
    },
    {
      title: t("regAndPol-imp-pol-3rd-card-title") || "Policy 3",
      description:
        t("regAndPol-imp-pol-3rd-card-desc") ||
        "This is a description of policy 3.",
    },
    {
      title: t("regAndPol-imp-pol-4th-card-title") || "Policy 4",
      description:
        t("regAndPol-imp-pol-4th-card-desc") ||
        "This is a description of policy 4.",
    },
  ];

  const downloadPDF = (title, description) => {
    const doc = new jsPDF();
    doc.setFontSize(16);
    doc.text(title, 10, 10);
    doc.setFontSize(12);
    doc.text(description, 10, 20);
    doc.save(`${title}.pdf`);
  };

  return (
    <div className="min-h-screen w-full bg-gray-100 pb-8">
      {/* Hero Section */}
      <div
        className="w-full min-h-96 mt-[64px] bg-cover bg-center relative"
        style={{
          backgroundImage:
            'url("https://cdn.pixabay.com/photo/2012/10/26/03/11/children-63175_1280.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white text-center px-6">
          <h1 className="text-5xl font-bold mb-4">
            {t("regAndPol-main-title") || "Regulations and Policies"}
          </h1>
          <p className="text-xl mb-6">
            {t("regAndPol-main-desc") || "Important regulations and policies."}
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="w-full max-w-5xl mx-auto px-4 py-16">
        <h2 className="text-center text-3xl font-bold mb-10 text-mstheme">
          {t("regAndPol-imp-pol-main-title") || "Important Policies"}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {policies.map((policy, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg p-6 relative transition-transform transform hover:scale-105"
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {policy.title}
              </h3>
              <p className="text-gray-600">{policy.description}</p>
              {/* Download Icon */}
              <button
                onClick={() => downloadPDF(policy.title, policy.description)}
                className="absolute top-4 right-4 text-gray-500 hover:text-mstheme"
                title="Download PDF"
              >
             <FiDownload  className="text-mstheme font-bold text-2xl"/>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
