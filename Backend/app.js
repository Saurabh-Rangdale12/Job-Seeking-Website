import express from "express";
import { dbConnection } from "./database/dbConnection.js";
import jobRouter from "./routes/jobRouter.js";
import userRouter from "./routes/userRouter.js";
import applicationRouter from "./routes/applicationRouter.js";
import dotenv from "dotenv";
import cors from "cors";
import { errorMiddleware } from "./middleware/error.js";
import cookieParser from "cookie-parser";
import fileUpload from "express-fileupload";



const app = express();
dotenv.config({ path: "./config/config.env" });

app.use(cors(
    {
        origin: ["https://deploy-mern-1whq.vercel.app"],
        methods: ["GET", "POST", "DELETE", "PUT"],
        credentials: true,
    }
))


// frontend endpoint
app.use(cors({
    origin: [process.env.FRONTEND_URL],
    // origin:"http://localhost:5173",
    methods: ["GET", "POST", "DELETE", "PUT"],
    credentials: true,
}));

app.get("/",(req,res)=> {
    res.json("Hello")
})


app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(fileUpload({
    useTempFiles: true,
    tempFileDir: "/tmp/",
}))


// routers
app.use('/api/v1/user', userRouter);
app.use('/api/v1/job', jobRouter);
app.use('/api/v1/application',applicationRouter);


// datbase connections
dbConnection();


app.use(errorMiddleware);






export default app;