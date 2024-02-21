import React from "react";
import error from "../assets/error.png";

const ErrorScreen = () => {
  return (
    <div>
      <h2>Response</h2>
      <div className="flex justify-center items-center border border-slate-400 mt-5">
        <img src={error} alt="Error" />
      </div>
    </div>
  );
};

export default ErrorScreen;
