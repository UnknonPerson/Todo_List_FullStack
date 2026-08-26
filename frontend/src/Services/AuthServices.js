import api from "./Api";

const authServices = {
    register: async (username, email, password) => {
        return await api.post("/v1/auth/register", {
            username,
            email,
            password,
        });
    },

    healthCheck: async () => {
        return await api.get("/v1/healthcheck");
    },

    login: async (username, password) => {
        return await api.post("/v1/auth/login", {
            username,
            password,
        });
    },

    logout: async () => {
        return await api.post("/v1/auth/logout");
    },

    verifyEmail: async (verificationToken) => {
        return await api.get(`/v1/auth/verify-email/${verificationToken}`);
    },
};

export default authServices;
