import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
//https://jsonplaceholder.typicode.com/posts

const Response = () => {
  const { method, url } = useSelector((state) => state.api);
  const [responseData, setResponseData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        if (!url) {
          setError(`Invalid URL or URL didnot found`);
        }
        const response = await axios[method](
          `${url ? url : "https://jsonplaceholder.typicode.com/posts/1"}`
        );
        setResponseData(response.data);
        console.log(response);
      } catch (error) {
        console.log(error);
        setError(error.message);
      }
    })();
  }, [method, url]);

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
        {error
          ? `Error: ${error.message}`
          : responseData === null
          ? " "
          : JSON.stringify(responseData, null, 2)}
      </pre>
    </div>
  );
};

export default Response;
