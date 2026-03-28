import express from 'express'
import cors from 'cors'

const app = express()

//basic Configuration
app.use(express.json({limit:"16kb"}));
app.use(express.urlencoded({extended:true , limit: "16kb"}));
app.use(express.static("public"));

//CORS Configuration
app.use(cors({
    origin: process.env.CORS_ORIGIN?.split(",") || ["http://localhost:5173", "http://127.0.0.1:5173"],
    credentials: true,
    methods: ["GET","POST","PUT","PATCH","DELETE","OPTIONS"],
    allowedHeaders: ["Content-Type","Authorization"],
}));

import healthcheackRoutes from './routes/healthcheack.rout.js'
app.use("/api/v1/healthcheck", healthcheackRoutes)

import  authRoutes from './routes/auth.rout.js'
app.use("/api/v1/auth" , authRoutes);

export default app;