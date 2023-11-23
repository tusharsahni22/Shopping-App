import axios from "axios";

const axiosInstance = axios.create({
  baseURL: `${import.meta.env.VITE_API_BASE_URL}/api`,
  validateStatus: function (status) {
      return status >= 200 && status < 500; // default
  },
});

export const viewProduct = () => {
  return axiosInstance.post("/viewProduct").then((result) => {
    return result;
  }).catch((err) => {
    console.log("Error in viewProduct", err);
  });
}

