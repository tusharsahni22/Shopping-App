import axios from "axios";

const axiosInstance = axios.create({
  baseURL: `${import.meta.env.VITE_API_BASE_URL}/api`,
  validateStatus: function (status) {
      return status >= 200 && status < 500; // default
  },
});
const axiosInstance2 = axios.create({
  baseURL: `${import.meta.env.VITE_API_BASE_URL}/api`,
  validateStatus: function (status) {
      return status >= 200 && status < 500; // default
  },
});

export const viewProduct = () => {
  return axiosInstance.get("/viewProduct").then((result) => {
    return result;
  }).catch((err) => {
    console.log("Error in viewProduct", err);
  });
}
export const viewProductById = (id) => {
  return axiosInstance.get(`/viewProduct/${id}`).then((result) => {
    return result;
  }).catch((err) => {
    console.log("Error in viewProduct", err);
  });
}

export const uploadProduct = (data) => {
  const formData = new FormData();
  const file = data.pic[0];
  formData.append('pic', file);
  const altPictures = data.altPictures.slice(0, 3);

  altPictures.forEach((file) => {
  formData.append('altpicture',file);
  });
  formData.append('product', JSON.stringify(data));
  
  return axiosInstance2.post("/uploadnewproduct",formData,{headers: {
    'Content-Type': 'multipart/form-data' 
  }
  }).then((result) => {
    return result;
  }).catch((err) => {
    console.log("Error in uploadProduct", err)
  });
}

