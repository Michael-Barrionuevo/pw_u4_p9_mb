import axios from "axios"

const URL = "http://localhost:8082/auth/token";
const USER = {
    user: "admin",
    password: "1234"
}

const obtenerToken = async () => {
    const data = await axios.post(URL, USER).then(r => r.data);
    return data.token;
}

export const obtenerTokenFachada = async () => {
    return await obtenerToken();
}