import api from './axios';

const header = {
  headers: {
    "Content-type": "application/json",
  },
};

const handleGetMethod = async (url, params) => {
  const response = await api.get(url, params);
  return response?.data;
};

const handlePostMethod = async (url, data) => {
  const response = await api.post(url, data, header);
  return response?.data;
};

const handlePutMethod = async (url, data) => {
  const response = await api.put(url, data, header);
  return response?.data;
};

const handleDeleteMethod = async (url, data) => {
  const response = await api.delete(url, data, header);
  return response?.data;
};

export { handleGetMethod, handlePostMethod, handlePutMethod, handleDeleteMethod };
