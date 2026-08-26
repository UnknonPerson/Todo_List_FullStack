import api from "./Api";

const authServices = {
    register: async (name, email, password) => {
        return await api.post("/v1/auth/register", {
            name,
            email,
            password,
        });
    },

    healthCheck: async () => {
        return await api.get("/v1/healthcheck");
    },

    login: async (email, password) => {
        return await api.post("/v1/auth/login", {
            email,
            password,
        });
    },

    logout: async () => {
        return await api.post("/v1/auth/logout");
    },

    getCurrentUser: async () => {
        return await api.get("/v1/auth/me");
    },

    updateProfile: async (data) => {
        return await api.put("/v1/auth/profile", data);
    },
};

export default authServices;