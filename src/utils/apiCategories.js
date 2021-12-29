import axios from "axios";

const baseURL = process.env.REACT_APP_API_LINK;

const api = axios.create({ baseURL });

export const uploadCategoriesServer = () => {
  return api
    .get(`/categories`)
    .then(({ data }) => data)
    .catch((error) => alert(error));
};

export const uploadColorsServer = () => {
  return api
    .get(`/colors`)
    .then(({ data }) => data)
    .catch((error) => alert(error));
};

export const uploadIconsServer = () => {
  return api
    .get(`/icons`)
    .then(({ data }) => data)
    .catch((error) => alert(error));
};

export const uploadDefaultCategoryServer = () => {
  return api
    .get(`/defaultCategory`)
    .then(({ data }) => data)
    .catch((error) => alert(error));
};

export const changeDefaultCategoryServer = ({ id }) => {
  return api
    .put(`/defaultCategory`, { id })
    .then((response) => response)
    .catch((error) => alert(error));
};

export const addCategoryServer = (title, colorId, iconId) => {
  return api
    .post(`/categories`, {
      title,
      colorId,
      iconId,
    })
    .then((response) => response)
    .catch((error) => alert(error));
};

export const deleteCategoryServer = (id) => {
  return api
    .delete(`/categories/${id}`)
    .then((response) => response)
    .catch((error) => alert(error));
};

export const changeCategoryTitleServer = (id, title) => {
  return api
    .patch(`/categories/${id}`, { title })
    .then((response) => response)
    .catch((error) => alert(error));
};
