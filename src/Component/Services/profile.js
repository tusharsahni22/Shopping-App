import axios from "axios";

const axiosInstance = axios.create({
    baseURL: `${import.meta.env.VITE_API_BASE_URL}/api`,
    // headers:{Authorization: `Bearer ${localStorage.getItem('token')}`},
    validateStatus: function (status) {
        return status >= 200 && status < 500; // default
    },
});
axiosInstance.interceptors.request.use((config) => {
    const token = localStorage.getItem('token');
    config.headers.Authorization = token ? `Bearer ${token}` : '';
    return config;
  });


export const getProfileInformation = async()=> {
    return await axiosInstance.get("/getProfile").then((result) => {
        return result;
    }).catch((err) => {
       console.log("Error in getProfileInformation",err);
    });
}

export const updateProfileInformation = (data)=> {
    
    return axiosInstance.post("/updateProfile",data).then((result) => {
        return result;
    }).catch((err) => {
       console.log("Error in updateProfileInformation",err);
    });

}
export const getFavorite = async()=> {
    return await axiosInstance.get("/favorites").then((result) => {
        return result;
    }).catch((err) => {
       console.log("Error in getFavorite",err);
    });
}
export const addFavorite = async(data)=> {
    return await axiosInstance.post("/favorites",data).then((result) => {
        return result;
    }).catch((err) => {
       console.log("Error in addFavorite",err);
    });
}
export const removeFavorite = async(data)=> {
    console.log("first",data)
    return await axiosInstance.delete("/favorites",{data}).then((result) => {
        return result;
    }).catch((err) => {
       console.log("Error in removeFavorite",err);
    });
}

export const changePassword = async (data) => {
    return axiosInstance.post("/changepassword",data).then((result) => {
        return result;
    }).catch((err) => {
       console.log("Error in change-password",err);
    });
}
