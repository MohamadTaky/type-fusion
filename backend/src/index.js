import { config } from "dotenv";
import express from "express";
import mongoose from "mongoose";
import statsRouter from "features/test/test.router.js";
import userRouter from "features/users/user.router.js";
import errorHandler from "common/middleware/errorHandler.middleware.js";
import cors from "cors";
import cookieParser from "cookie-parser";

config();
const app = express();
app.set("trust proxy", 1);
app.use(express.json());
app.use(cookieParser());
app.use(cors({ credentials: true, origin: process.env.CLIENT_URL ?? "http://192.168.1.106:3000" }));
app.use("/api/data", statsRouter);
app.use("/api/user", userRouter);
app.use(errorHandler);
mongoose
	.connect(process.env.MONGO_URI)
	.then(() => app.listen(process.env.PORT, () => console.log(`sever running on port ${process.env.PORT}`)));
