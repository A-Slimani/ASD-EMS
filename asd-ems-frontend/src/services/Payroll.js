import axios from "axios";
const baseUrl = "/api/payroll"

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

// eslint-disable-next-line import/no-anonymous-default-export
export default { getAll, create, update, remove };