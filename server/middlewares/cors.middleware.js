import cors from "cors";

export const corsMiddleware = cors({
  origin: "*", // replace with your frontend URL
  credentials: true, // allow sending cookies or auth headers
});
