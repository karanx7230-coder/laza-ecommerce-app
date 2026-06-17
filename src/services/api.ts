import axios from 'axios';
export const Api = axios.create({
    baseURL: "https://dummyjson.com",
    timeout: 20000,
    headers: {
        'Content-Type': 'application/json'
    }
}
)

