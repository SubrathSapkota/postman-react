const checkValidJson = (text) => {
  if (
    /^[\],:{}\s]*$/.test(
      text
        .replace(/\\["\\\/bfnrtu]/g, "@")
        .replace(
          /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
          "]"
        )
        .replace(/(?:^|:|,)(?:\s*\[)+/g, "")
    )
  ) {
    return true;
  } else {
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
