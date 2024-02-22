import axios from "axios";
import { getHeaderAndParams } from "../utils/CommonUtils";

export const getData = async ({
  formData,
  parmasData,
  headersData,
  bodyData,
}) => {
  const apiType = formData.method;
  const apiUrl = formData.url;
  const apiParams = getHeaderAndParams(parmasData);
  const apiHeaders = getHeaderAndParams(headersData);

  console.log(bodyData);
  try {
    return await axios({
      method: apiType,
      url: apiUrl,
      body: bodyData,
      headers: apiHeaders,
      params: apiParams,
    });
  } catch (error) {
    console.log("Error white calling API:", error);
    return "error";
  }
};
