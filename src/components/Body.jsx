import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setBodyData } from "../features/Api.Slice";

const Body = () => {
  const dispatch = useDispatch();
  const [bodyText, setBodyText] = useState("");

  const handleBodyTextChange = (e) => {
    setBodyText(e.target.value);
  };

  useEffect(() => {
    dispatch(setBodyData(bodyText));
  }, [dispatch, bodyText]);

  return (
    <div>
      <h2>JOSN</h2>
      <textarea
        name=""
        id=""
        cols="30"
        rows="8"
        className="border border-slate-400  w-full focus:outline-none p-2 mt-5"
        onChange={handleBodyTextChange}
      ></textarea>
    </div>
  );
};

export default Body;
