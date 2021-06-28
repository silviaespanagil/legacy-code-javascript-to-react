const cardApi = "http://localhost:3001/card";

const isDevelopment = process.env.NODE_ENV === "development";
const apiURL = isDevelopment
  ? cardApi
  : "https://vegandebuggers.herokuapp.com/card";
const FetchData = (data) => {
  return fetch(`${apiURL}`, {
    method: "POST",
    body: JSON.stringify(data),
    headers: { "Content-Type": "application/json" },
  })
    .then((response) => response.json())
    .then((data) => {
      return data;
    });
};

/*
const FetchData = (data) => {
  const requestOption = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  };
  return fetch(cardApi, requestOption)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      return data;
    });
};
*/

export default FetchData;
