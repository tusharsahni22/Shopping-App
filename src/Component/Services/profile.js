import axios from "axios";

const axiosInstance = axios.create({
    baseURL: `${import.meta.env.VITE_API_BASE_URL}/api`,
    headers:{Authorization: `Bearer ${localStorage.getItem('token')}`},
    validateStatus: function (status) {
        return status >= 200 && status < 500; // default
    },
});


export const getProfileInformation = ()=> {
    return axiosInstance.get("/getUser").then((result) => {
        return result;
    }).catch((err) => {
       console.log("Error in getProfileInformation",err);
    });
}

export const updateProfileInformation = (data)=> {
    
    return axiosInstance.post("/updateUser",data).then((result) => {
        return result;
    }).catch((err) => {
       console.log("Error in updateProfileInformation",err);
    });

}
