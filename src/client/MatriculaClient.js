import axios from "axios";

const URL = "http://localhost:8081/matricula/api/v1.0/estudiantes";


const getHeaders = () => {
    const token = localStorage.getItem('auth_token');
    return {
        headers: {
            Authorization: `Bearer ${token}`
        }
    };
};


const consultarTodos = async () => {
    return (await axios.get(URL, getHeaders())).data;
}

const consultarPorId = async (id) => {
    return (await axios.get(`${URL}/${id}`, getHeaders())).data;
}

const guardar = async (body) => {
    return (await axios.post(URL, body, getHeaders())).data;
}

const actualizar = async (id, body) => {
    return (await axios.put(`${URL}/${id}`, body, getHeaders())).data;
}

const borrar = async (id) => {
    return (await axios.delete(`${URL}/${id}`, getHeaders())).data;
}


export const consultarTodosFachada = async () => await consultarTodos();
export const consultarPorIdFachada = async (id) => await consultarPorId(id);
export const guardarFachada = async (body) => await guardar(body);
export const actualizarFachada = async (id, body) => await actualizar(id, body);
export const borrarFachada = async (id) => await borrar(id);