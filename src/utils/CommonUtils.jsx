const checkValidJson = (text) => {
  if (typeof text !== "string") {
    return false;
  }
  try {
    JSON.parse(text);
    return true;
  } catch (error) {
    return false;
  }
};

export const checkParams = ({
  formData,
  parmasData,
  headersData,
  bodyData,
  setErrorMessage,
}) => {
  if (!formData.url) {
    setErrorMessage("Request URL is Missing");
    return false;
  }
  if (!checkValidJson(bodyData)) {
    setErrorMessage("Text not valid JSON");
    return false;
  }

  return true;
};

export const getHeaderAndParams = (headersData) => {
  let obj = {};
  headersData.forEach((data) => {
    if (Object.prototype.hasOwnProperty.call(data, "check") && data.check) {
      obj = { ...obj, [data.key]: data.value };
    }
  });
  return obj;
};
