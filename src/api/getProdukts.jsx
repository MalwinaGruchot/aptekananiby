import { API_URL } from "./constants";

export const getProdukts = (param, setProductsList) => {
  fetch(API_URL + "/products")
    .then((res) => {
      if (!res.ok) {
        throw new Error(res.status);
      }
      return res.json();
    })
    .then((data) => {
      const newData = data.filter((product) =>
        product.category.includes(param)
      );
      if (typeof setProductsList === "function") {
        setProductsList(newData);
      }
    })
    .catch((err) => console.log(err));
};
