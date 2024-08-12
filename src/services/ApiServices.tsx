/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import axios from "axios";

const base_url = "http://localhost:9000/api";
const token = sessionStorage.getItem('token');
axios.defaults.headers.common['x-auth-token'] = token;

export const getRequest = async(path: string) =>{
    try {
        const response = await axios.get(base_url+path);
        return response;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            if (error.response?.status === 401) {
                sessionStorage.removeItem('token');
                window.location.href = "/auth/login";
            } else {
                // Handle other errors if necessary
                console.error('An error occurred:', error.message);
            }
        } else {
            // Handle non-Axios errors
            console.error('Unexpected error:', error);
        }
    }
}
export const postRequest = async(path: string,data: any) =>{
    try {
        const response = await axios.post(base_url+path,data);
        return response;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            if (error.response?.status === 401) {
                sessionStorage.removeItem('token');
                window.location.href = "/auth/login";
            } else {
                // Handle other errors if necessary
                console.error('An error occurred:', error.message);
            }
        } else {
            // Handle non-Axios errors
            console.error('Unexpected error:', error);
        }
    }
}
export const deleteRequest = async(path:string)=>{
    try {
        const response = await axios.delete(base_url+path);
        return response;
    } catch (error) {  
        if (axios.isAxiosError(error)) {
            if (error.response?.status === 401) {
                sessionStorage.removeItem('token');
                window.location.href = "/auth/login";
            } else {
                // Handle other errors if necessary
                console.error('An error occurred:', error.message);
            }
        } else {
            // Handle non-Axios errors
            console.error('Unexpected error:', error);
        }
    }
}