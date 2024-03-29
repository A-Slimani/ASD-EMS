import axios from 'axios';
const baseUrl = 'api/employees';

const getAll = () => {
  const request = axios.get(baseUrl);
  return request.then(response => response.data);
};

const get = id => {
  const request = axios.get(`${baseUrl}/${id}`);
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

const employeeObject = { get, getAll, create, update, remove };

export default employeeObject;
