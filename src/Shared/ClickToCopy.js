import React, { useState } from "react";
import { FaCopy } from "react-icons/fa";

const ClickToCopy = ({ textToCopy }) => {
  const [isCopied, setIsCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard
      .writeText(textToCopy)
      .then(() => setIsCopied(true))
      .catch((error) => console.error("Failed to copy: ", error));
  };
  return (
    <FaCopy
      onClick={handleCopy}
      className={`cursor-pointer ${
        isCopied ? "text-gray-500" : "text-success"
      }`}
    />
  );
};

export default ClickToCopy;
