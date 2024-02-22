import React, { useState } from "react";
import Form from "./Form";
import SelectTab from "./SelectTab";
import { NavLink } from "react-router-dom";
import Response from "./Response";
import ErrorScreen from "./ErrorScreen";
import { checkParams } from "../utils/CommonUtils";
import { useSelector } from "react-redux";
import ErrorMessage from "./ErrorMessage";

const Home = () => {
  const initialState = useSelector((state) => state.api);
  const { formData, paramsData, headersData, bodyData } = initialState;

  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const onClickHanlderApiCall = () => {
    if (
      !checkParams({formData, paramsData, headersData, bodyData, setErrorMessage})
    ) {
      setError(true);
      return false;
    }
  };

  return (
    <div className="max-w-screen-xl mx-auto">
      <div className=" mt-2 mb-20">
        <h1 className="px-4 py-2 text-orange-500 text-2xl font-bold rounded">
          POSTMAN
        </h1>
      </div>
      {error && (
        <div className="z-50">
          <ErrorMessage setError={setError} errorMessage={errorMessage} />
        </div>
      )}
      <Form sendApiHandler={onClickHanlderApiCall} />
      <div className=" py-2 flex gap-5 ">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "border-b-4 border-orange-500 px-5 py-2" : "px-5 py-2"
          }
        >
          Params
        </NavLink>
        <NavLink
          to="/headers"
          className={({ isActive }) =>
            isActive ? "border-b-4 border-orange-500 px-5 py-2" : "px-5 py-2"
          }
        >
          Headers
        </NavLink>
        <NavLink
          to="/body"
          className={({ isActive }) =>
            isActive ? "border-b-4 border-orange-500 px-5 py-2" : " px-5 py-2"
          }
        >
          Body
        </NavLink>
      </div>
      <SelectTab />
      <Response />
      {/* <ErrorScreen/> */}
    </div>
  );
};

export default Home;
