import React, { useState } from "react";

const Tooltip = ({ text }) => {
  const [visible, setVisible] = useState(false);

  return (
    <div
      className="relative inline-block"
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
    >
      <span className="cursor-pointer underline">Tooltip</span>
      {visible && (
        <div
          className="absolute left-1/2 transform -translate-x-1/2 bottom-full mb-2 px-3 py-1 bg-gray-800 text-white text-sm rounded shadow-lg z-10"
          style={{ whiteSpace: "nowrap" }}
        >
          {text}
        </div>
      )}
    </div>
  );
};
export default Tooltip