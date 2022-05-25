import axios from "axios";

const BASE_URL = "http://localhost:5000/api";
// if(localStorage.getItem('persist:root')===null){
//     window.location.href('/login')
// }
const TOKEN=JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.token;
//console.log(JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.token)

export const publicRequest = axios.create({
    baseURL:BASE_URL
});

export const userRequest = axios.create({
    baseURL:BASE_URL,
    headers:{token: `Bearer ${TOKEN}`}
})