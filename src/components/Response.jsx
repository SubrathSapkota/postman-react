import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
//https://jsonplaceholder.typicode.com/posts

const Response = () => {
  const { method, url } = useSelector((state) => state.api);
  const [responseData, setResponseData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        setResponseData(json);
      } catch (error) {
        console.error("Error: ", error);
      }
    };
    fetchData();
  }, [url]);

  return (
    <div>
      <h2>Response</h2>
      {/* <pre
        name=""
        id=""
        cols="30"
        rows="8"
        className="border border-slate-400  w-full focus:outline-none p-2 mt-5 overflow-scroll h-80"
        disabled
      >
        {JSON.stringify(responseData, null, 2)}
      </pre> */}
      <textarea
        name=""
        id=""
        cols="30"
        rows="12"
        className="border border-slate-400  w-full focus:outline-none p-2 mt-5"
        disabled
        value={JSON.stringify(responseData, null, 2)}
      ></textarea>
    </div>
  );
};

export default Response;
