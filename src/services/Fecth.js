const cardApi = "https://awesome-profile-cards.herokuapp.com/card";
const FetchData = () => {
  const requestOption = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  };
  return fetch(cardApi, requestOption)
    .then((response) => response.json())
    .then((data) => {
      return data;
    });
};

export default FetchData;
