import api from "./Api";

const authServices = {
    register : (name,email,phone,password) => {
        api.post('v1/auth/register',{name,email,phone,password});
    },
    healthcheack : () => {
        api.get('/api/v1/healthcheck')
    },
    login : (email, password) => {
        api.post('v1/auth/login',{email, password});
    },
    logout : () => {

    },
    getCurrentUser : () => {

    },
    updateProfile : () => {

    },

};

export default authServices;