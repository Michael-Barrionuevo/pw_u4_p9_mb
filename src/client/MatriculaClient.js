import axios from "axios"

const token="eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJtYXRyaWN1bGEtYXV0aCIsInN1YiI6ImFkbWluIiwiZ3JvdXBzIjpbImFkbWluIl0sImlhdCI6MTc3MDI0ODQ3OSwiZXhwIjoxNzcwMjUyMDc5LCJqdGkiOiI5MzdhMTQ3ZC03MmZlLTQ5NmItOWNmNi02NjFiMzc2MzhhM2EifQ.QHT6SORAFt3aHFvn9ESexs1OaoNmSaxvn6ZHA5WRbxAyJ29H_fPEsWMDmi6PQyWb3DYZJA59QXBdHcA5CFu3qIpLY5Mr1cT3wrK7reOQ8tOsX8XgPXWTVemipAQCqhD_aQb96tASUcKIa0ZPDfG4rp69r_dFBwFvvTMLM41mJmUKZjEZDhKCOCc1aCn_-PqPnYSzYyFrocGsbqCOhD6AShIZ_DZosj0b6X-8NwKVB9JCoBFSv4nerpocrjkutjU1mTsxzblyB-HMkriwEdokGjjY1bfIY6CsIj7UXZjEusXTjiipFza8grzu4Cn_CFac6RGecq-sNJUrKJVDmH0SQw";  
 
 
const consultarTodos = async() => {
    const data = await axios.get("http://localhost:8081/matricula/api/v1.0/estudiantes", {headers: {Authorization: `Bearer ${token}`}}).then(r => r.data)
    return data;
}
 
const consultarPorId = async(id) => {
    const data = await axios.get(`http://localhost:8081/matricula/api/v1.0/estudiantes/${id}`, {headers: {Authorization: `Bearer ${token}`}}).then(r => r.data)
    return data;
}
 
const guardar = async(body) => {
  
    const data = await axios.post("http://localhost:8081/matricula/api/v1.0/estudiantes", body, {headers: {Authorization: `Bearer ${token}`}}).then(r => r.data);
    console.log(data);
    return data;
}
 
const actualizar = async(id, body) => {
    const data = await axios.put(`http://localhost:8081/matricula/api/v1.0/estudiantes/${id}`, body, {headers: {Authorization: `Bearer ${token}`}}).then(r => r.data);
 
    console.log(data);
    return data;
}
 
const actualizarParcial = async(id, body) => {
    const data = await axios.patch(`http://localhost:8081/matricula/api/v1.0/estudiantes/${id}`, body, {headers: {Authorization: `Bearer ${token}`}}).then(r => r.data);
    console.log(data);
    return data;
}
 
const borrar = async(id) => {
   const data = await axios.delete(`http://localhost:8081/matricula/api/v1.0/estudiantes/${id}`, {headers: {Authorization: `Bearer ${token}`}}).then(r => r.data);
   return data;
}
 
 
 
 
export const consultarTodosFachada  = async () => {
   return await consultarTodos();
}
 
export const consultarPorIdFachada  = async (id) => {
    return await consultarPorId(id);
}
 
export const guardarFachada  = async (body) => {
 
    return await guardar(body);
}
 
export const actualizarFachada  = async (id, body) => {
    return await actualizar(id, body);
}
 
export const actualizarParcialFachada  = async(id, body) => {
    return await actualizarParcial(id, body);
}
 
export const borrarFachada = async (id) => {
   return await borrar(id);
}