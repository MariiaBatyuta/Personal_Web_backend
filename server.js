import "dotenv/config";
import "./db/db.js";

import express, { json } from "express";
import cors from "cors";

import fs from "fs";
import path from "path";
import swaggerUi from "swagger-ui-express";
import { getProjects } from "./controllers/projectsControllers.js";
import { sendMail } from "./controllers/sendMailControllers.js";
import { warmUpServerControllers } from "./controllers/warmUpServerControllers.js";

const app = express();

const swaggerDocument = JSON.parse(fs.readFileSync(path.resolve("./swagger.json"), 'utf-8'));

app.use(cors());
app.use(express.json());

app.get("/api/projects", getProjects);
app.post("/api/send-mail", sendMail);
app.get("/api/warm-up", warmUpServerControllers);

app.use("/api-doc", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use((_, res) => {
    res.status(400).send({ message: "Route not found" })
});

app.use((error, req, res, next) => {
    const { status = 500, message = "Server error" } = error;
    res.status(status).send({ message })
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running. Use our API on port ${port}`);
});