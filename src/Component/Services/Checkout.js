import axios from "axios";

const axiosInstance = axios.create({
    baseURL: `${import.meta.env.VITE_API_BASE_URL}/api`,
    validateStatus: function (status) {
        return status >= 200 && status < 500; // default
    },
    });
    axiosInstance.interceptors.request.use((config) => {
        const token = localStorage.getItem('token');
        config.headers.Authorization = token? `Bearer ${token}` : '';
        return config;
    });

    export const otpgenration = (data) =>{
        return axiosInstance.post("/otp",data).then((result) => {
            return result;
        }).catch((err) => {
            console.log("Error in otpgenration", err);
        });
    }

    export const otpverification = (data) =>{
        return axiosInstance.post("/otpverification",data).then((result) => {
            return result;
        }).catch((err) => {
            console.log("Error in otpverification", err);
        });
    }

    export const placeNewOrder = (data) =>{
        return axiosInstance.post("/orders",data).then((result) => {
            return result;
        }).catch((err) => {
            console.log("Error in placeNewOrder", err);
        });
    }

    export const payOnline = (data) =>{
        return axiosInstance.post("/payments",data).then((result) => {
            return result;
        }).catch((err) => {
            console.log("Error in payOnline", err);
        });
    }

    export const getPendingOrders = (id) =>{
        return axiosInstance.get(`/pendingorders/${id}`).then((result) => {
            return result;
        }).catch((err) => {
            console.log("Error in getPendingOrders", err);
        });
    }
