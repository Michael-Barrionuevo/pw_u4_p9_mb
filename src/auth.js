import axios from 'axios';

const URL_AUTH = 'http://localhost:8082/auth/token';


export const obtenerToken = async (user, password) => {
    try {
        const response = await axios.get(URL_AUTH, {
            params: {
                user: user,
                password: password
            }
        });
        console.log('Token generado:', response.data);
        
        
        localStorage.setItem('auth_token', response.data.accessToken);
        localStorage.setItem('auth_usuario', user);
        localStorage.setItem('auth_expiracion', response.data.expiresAt);
        
        return response.data;
    } catch (error) {
        console.error('Error al obtener token:', error);
        throw error;
    }
};


export const obtenerTokenGuardado = () => {
    return localStorage.getItem('auth_token');
};


export const obtenerUsuario = () => {
    return localStorage.getItem('auth_usuario');
};


export const estaAutenticado = () => {
    return localStorage.getItem('auth_token') !== null;
};


export const logout = () => {
    localStorage.removeItem('auth_token');
    localStorage.removeItem('auth_usuario');
    localStorage.removeItem('auth_expiracion');
};