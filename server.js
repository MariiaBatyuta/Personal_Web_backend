import "dotenv/config";
import "./db/db.js";

import express, { json } from "express";
import cors from "cors";

import { getProjects } from "./controllers/projectsControllers.js";
import { sendMail } from "./controllers/sendMailControllers.js";

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get("/api/projects", getProjects);
app.post("/api/send-mail",  sendMail);

app.use((_, res) => {
    res.status(400).send({ message: "Route not found" })
});

app.use((error, req, res, next) => {
    const { status = 500, message = "Server error" } = error;
    res.status(status).send({ message })
});

app.listen(port, () => {
    console.log(`Server is running. Use our API on port ${port}`);
});