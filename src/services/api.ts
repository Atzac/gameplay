import axios from "axios"

const api = axios.create({
    baseURL: "https://discordapp.com/api",
});

export { api }