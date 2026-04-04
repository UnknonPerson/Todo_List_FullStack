import { Router } from "express";
import {
    creatTask,
    updateTask,
    deleteTask,
    toggleComplete,
    getTask
} from "../controllers/todo.controller.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";

const router = Router();

router.get("/get",verifyJWT, getTask);
router.post("/create",verifyJWT, creatTask);
router.patch("/update/:taskId",verifyJWT, updateTask);
router.delete("/delete/:taskId",verifyJWT, deleteTask);
router.patch("/toggle/:taskId",verifyJWT, toggleComplete);

export default router;