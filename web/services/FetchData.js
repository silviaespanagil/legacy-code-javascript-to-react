const cardApi = "https://awesome-profile-cards.herokuapp.com/card";
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

export default FetchData;
