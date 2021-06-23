const get = (key) => {
  const data = localStorage.getItem(key);
  return JSON.parse(data);
};

const set = (key, dataValue) => {
  localStorage.setItem(key, JSON.stringify(dataValue));
};

const LocalStorage = { get: get, set: set };

export default LocalStorage;
