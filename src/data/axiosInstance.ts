import axios from "axios";

const endpoint = "https://jsonplaceholder.typicode.com";

export default axios.create({
    baseURL: endpoint,
    timeout: 50000,
});

