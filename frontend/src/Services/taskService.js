import api from './Api'

const taskServises = {
    getTask: async () => {
        return await api.get("/v1/task/get");
    },

    addTask: async (taskData) => {
        return await api.post("/v1/task/create", taskData);
    },

    deleteTask: async (taskId) => {
        return await api.delete(`/v1/task/delete/${taskId}`);
    },

    editTask: async (taskId, taskData) => {
        return await api.patch(`/v1/task/update/${taskId}`, taskData);
    },

    toggalCompete: async (taskId) => {
        return await api.patch(`/v1/task/toggle/${taskId}`);
    }
}
export default taskServises;
