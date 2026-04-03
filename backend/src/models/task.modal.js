import mongoose, { Schema } from "mongoose";

const todo_Task = new Schema(
  {
    task: {
      type: String,
      required: true,
      trim: true,
    },

    completed: {
      type: Boolean,
      default: false,
    },

    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User", 
    },
  },
  {
    timestamps: true, 
  }
);

export const Todo = mongoose.model("Todo", todo_Task);