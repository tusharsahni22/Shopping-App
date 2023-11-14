import axios from 'axios';

// create a new axios instance with the config and status code validation

const axiosInstance = axios.create({
    baseURL: `${import.meta.env.VITE_API_BASE_URL}/api`,
    validateStatus: function (status) {
        return status >= 200 && status < 500; // default
    },
});


export const login = async (data) => {
    return axiosInstance.post("/login",data).then((result) => {
        return result;
    }).catch((err) => {
       console.log("Error in login",err);
    });
};
export const Signup = async (data) => {
    return axiosInstance.post("/signup",data).then((result) => {
        return result;
    }).catch((err) => {
       console.log("Error in signup",err);
    });
};

// doLogout 
export const doLogout =()=>{
    // remove token from local storage
    localStorage.removeItem('token');
    // reload the page
    window.location.reload();
} 
// check user is logged in or not
export const isUserLoggedIn =()=>{
    return !!localStorage.getItem('token');
}
