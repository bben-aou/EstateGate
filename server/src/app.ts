import express from "express";
import bodyParser from "body-parser";
import routes from "@routes/index";
import authRoute from "@routes/auth.route";
import uploadRoute from "@routes/upload.route";
import propertyRoute from "@routes/property.route";
import userRoute from "@routes/user.route";
import cookieParser from "cookie-parser";
import cors, { CorsOptions } from "cors";
import dotenv from "dotenv";
import session from "express-session";
import passport from "passport";
import path from "path";
import { setupGoogleStrategy } from "@config/googleStrategy";
import { setupGitHubStrategy } from "@config/githubStrategy";

const app = express();

dotenv.config();
app.use(
  session({
    secret: process.env.SESSION_SECRET || "secret",
    resave: false,
    saveUninitialized: true,
  })
);

app.use(passport.initialize());
setupGoogleStrategy();
setupGitHubStrategy();

app.use(bodyParser.json());
app.use(cookieParser());

const CLIENT_URL = process.env.CLIENT_URL;

const corsOptions: CorsOptions = {
  origin: (origin, callback) => {
    const allowedOrigins = [
      process.env.CLIENT_URL,
      "https://accounts.google.com",
    ].filter(Boolean);
    if (!origin || allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true,
};

app.use(cors(corsOptions));

// Serve uploaded files statically
app.use("/uploads", express.static(path.join(__dirname, "../uploads")));

app.use("/api", routes);
app.use("/api/auth", authRoute);
app.use("/api/upload", uploadRoute);
app.use("/api/property", propertyRoute);
app.use("/api/user", userRoute);

export default app;
