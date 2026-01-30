import axios from 'axios';

const URL = 'http://localhost:8081/matricula/api/v1.0/estudiantes';

// Funciones de implementación (Lógica interna)
const consultarTodos = async () => {
    const r = await axios.get(URL);
    return r.data; // Corregido para devolver solo la data
};

const consultarPorId = async (id) => {
    const r = await axios.get(`${URL}/${id}`);
    return r.data;
};

const guardar = async (body) => {
    const r = await axios.post(URL, body);
    return r.data;
};

const actualizar = async (id, body) => {
    const r = await axios.put(`${URL}/${id}`, body);
    return r.data;
};

const actualizarParcial = async (id, body) => {
    const r = await axios.patch(`${URL}/${id}`, body);
    return r.data;
};

const borrar = async (id) => {
    const r = await axios.delete(`${URL}/${id}`);
    return r.data;
};

// Fachadas (Lo que el componente consume)
export const consultarTodosFachada = async () => {
    return await consultarTodos();
};

export const consultarPorIdFachada = async (id) => {
    return await consultarPorId(id);
};

export const guardarFachada = async (body) => {
    return await guardar(body);
};

export const actualizarFachada = async (id, body) => {
    return await actualizar(id, body);
};

export const actualizarParcialFachada = async (id, body) => {
    return await actualizarParcial(id, body);
};

export const borrarFachada = async (id) => {
    return await borrar(id);
};