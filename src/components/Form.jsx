import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setFormData } from "../features/Api.Slice";

const Form = ({ sendApiHandler }) => {
  const dispatch = useDispatch();

  const [data, setData] = useState({
    method: "get",
    url: "",
  });

  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    dispatch(setFormData(data));
  }, [dispatch, data]);

  return (
    <div className="flex gap-2">
      <select
        name="method"
        id="method"
        value={data.method}
        onChange={changeHandler}
        className="px-8 py-2 border-2 border-black/40 rounded text-xl"
      >
        <option value="post">POST</option>
        <option value="get">GET</option>
      </select>
      <input
        type="text"
        name="url"
        value={data.url}
        onChange={changeHandler}
        className="py-2 px-4 border border-black/40 rounded w-full focus:outline-none"
      />
      <button
        className="px-10 py-2 bg-blue-500 text-white rounded text-2xl"
        onClick={sendApiHandler}
      >
        Send
      </button>
    </div>
  );
};

export default Form;
