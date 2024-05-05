//all middleware related express
import express from "express";
import path from "path";
import xss from "xss-clean";
import hpp from "hpp";
import mongoSanitize from "express-mongo-sanitize";
import compression from "compression";

import { globalErrorHandler } from "./controllers/errorcontroller.js";
import articleRouter from "./routes/articleRoutes.js";
import AppError from "./utils/appError.js";
const app = express();
const __dirname = path.resolve();

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

//Serving static file
app.use(express.static("./public"));

app.use(express.json());
app.use(xss());
app.use(hpp());
app.use(mongoSanitize());
app.use(compression());

console.log(process.env.NODE_ENV);

app.use("/", articleRouter);

app.all("*", (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

app.use(globalErrorHandler);

export { app };
