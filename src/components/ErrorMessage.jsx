import React from "react";
import { IoClose } from "react-icons/io5";

const ErrorMessage = ({ setError, errorMessage }) => {
  const handleErrorClose = () => {
    setError(false);
  };
  return (
    <div
      className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
      role="alert"
    >
      <strong className="font-bold pr-4">Error!</strong>
      <span className="block sm:inline">{errorMessage}</span>
      <span
        className="absolute top-0 bottom-0 right-0 px-4 py-3 cursor-pointer"
        onClick={handleErrorClose}
      >
        <IoClose size={30} />
      </span>
    </div>
  );
};

export default ErrorMessage;
