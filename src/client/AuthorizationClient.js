import axios from "axios";
 
const URL = "http://localhost:8082/matricula/api/v1.0/auth/token";
 

const getToken = async (username, password) => {
  try {
    const response = await axios.get(`${URL}`, {
      params: {
        user: username,
        password: password
      }
    });
   
    
    return response.data;
  } catch (error) {
    console.error("Error al obtener el token:", error);
    throw error;
  }
};
 

export { getToken };