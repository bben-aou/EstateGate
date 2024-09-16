import express from "express";
import bodyParser from "body-parser";
import routes from "@routes/index";
import authRoute from "@routes/auth.route";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";

const app = express();

dotenv.config();

app.use(bodyParser.json());
app.use(cookieParser());
const CLIENT_URL = process.env.CLIENT_URL;
app.use(cors({ origin: CLIENT_URL, credentials: true }));

app.use("/api", routes);
app.use("/api/auth", authRoute);

export default app;