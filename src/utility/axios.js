import axios from "axios";

const instance = axios.create({
    baseURL: 'https://servers.coderbiz.com/',
})
export default instance;