import express from "express";
import routes from "./routes/index.js";

const app = express();
app.use(express.json());

app.use("/api", routes);

app.get("/", (req, res) => res.send("✅ Home Automation API is running"));

export default app;
