import { Todo } from '../models/task.modal.js';
import { ApiError } from '../utils/api-error.js';
import { asyncHandler } from '../utils/async-handler.js';
import { ApiResponse } from '../utils/api-responce.js';

const creatTask = asyncHandler(async (req, res) => {

    const { task } = req.body;

    if (!task) {
        throw new ApiError(400, "Please enter a valid task");
    }

    const createdTask = await Todo.create({
        task,
        user: req.user._id,
        completed: false,
    });

    if (!createdTask) {
        throw new ApiError(500, "Something went wrong, task not created");
    }

    return res.status(201).json(
        new ApiResponse(
            201,
            { task: createdTask },
            "Task created successfully"
        )
    );
});


const updateTask = asyncHandler(async (req, res) => {
    const { taskId } = req.params;
    const { task } = req.body;

    if (!task || task.trim() === "") {
        throw new ApiError(400, "Please provide a valid task");
    }

    const updatedTask = await Todo.findOneAndUpdate(
        { _id: taskId, user: req.user._id }, // ensure ownership
        { $set: { task } },
        { new: true }
    );

    if (!updatedTask) {
        throw new ApiError(404, "Task not found");
    }

    return res.status(200).json(
        new ApiResponse(200, { task: updatedTask }, "Task updated successfully")
    );
});


const deleteTask = asyncHandler(async (req, res) => {
    const { taskId } = req.params;

    const deletedTask = await Todo.findOneAndDelete({
        _id: taskId,
        user: req.user._id,
    });

    if (!deletedTask) {
        throw new ApiError(404, "Task not found or already deleted");
    }

    return res.status(200).json(
        new ApiResponse(200, {}, "Task deleted successfully")
    );
});

const toggleComplete = asyncHandler(async (req, res) => {
    const { taskId } = req.params;

    const task = await Todo.findOne({
        _id: taskId,
        user: req.user._id,
    });

    if (!task) {
        throw new ApiError(404, "Task not found");
    }

    task.completed = !task.completed;
    await task.save();

    return res.status(200).json(
        new ApiResponse(
            200,
            { task },
            `Task marked as ${task.completed ? "completed" : "incomplete"}`
        )
    );
});

const getTask = asyncHandler(async (req, res) => {
    const user = req.user;

    // const tasks = await Todo.find({
    //     user: user._id
    // });

    const tasks = await Todo.find({ user: user._id })
    .sort({ createdAt: -1 });

    if (tasks.length === 0) {
        throw new ApiError(404, "No tasks found");
    }

    return res.status(200).json(
        new ApiResponse(200, tasks, tasks.length ? "Tasks found" : "No tasks yet")
    );
});

export {
    creatTask,
    updateTask,
    deleteTask,
    toggleComplete,
    getTask,
};