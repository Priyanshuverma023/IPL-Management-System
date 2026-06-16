import express from "express";
import cookieParser from "cookie-parser";
import ownerRouter from "./modules/ipl-ms/routes/owner.routes.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

//test route
app.get("/", (req, res) => {
  res.json({ message: "IPL Management API is running" });
});

app.use("/api/owners", ownerRouter);
export default app;
