import React from "react";

const Response = ({ response }) => {
  return (
    <div>
      <h2>Response</h2>
      <pre
        name=""
        id=""
        cols="30"
        rows="8"
        className="border border-slate-400  w-full focus:outline-none p-2 mt-5 overflow-scroll h-80"
        disabled
      >
        {JSON.stringify(response, null, 2)}
      </pre>
    </div>
  );
};

export default Response;
