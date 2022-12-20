import axios from "axios";

const api = axios.create({
    baseUrl: "https://poetrydb.org",
})

export default api;