import axios from "axios";

const instance = axios.create({
    baseURL: 'http://servers.coderbiz.com/',
})
export default instance;