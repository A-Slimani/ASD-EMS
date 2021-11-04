import axios from "axios";
const baseUrl = "https://asd-ems-db.herokuapp.com/voiceconcern"


const getAll = () => {
  const request = axios.get(baseUrl);
  return request.then(response => response.data);
};

const create = newObj => {
  return axios.post(baseUrl, newObj);
};

const update = (id, newObj) => {
  return axios.put(`${baseUrl}/${id}`, newObj);
};

const remove = id => {
  return axios.delete(`${baseUrl}/${id}`);
};

const ConcernObjects = {getAll, create, update, remove}

export default ConcernObjects;