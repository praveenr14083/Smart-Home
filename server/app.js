import express from "express";
import routes from "./routes/index.js";
import { corsMiddleware } from "./middlewares/cors.middleware.js";
import { apiRateLimiter } from "./middlewares/rateLimiter.middleware.js";

const app = express();

app.use(express.json());
app.use(corsMiddleware);
app.use(apiRateLimiter);

app.use("/api", routes);

app.get("/", (req, res) => res.send("✅ Home Automation API is running"));

export default app;
