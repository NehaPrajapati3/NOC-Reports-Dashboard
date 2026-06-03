import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import connectDB from "./config/database.js";
import verifyRoute from "./routes/verifyRoute.js";
import userRoute from "./routes/userRoute.js";
import path from "path";
import { fileURLToPath } from "url";

import cors from "cors";

dotenv.config({});

const app = express();

const PORT = process.env.PORT || 5000;

// middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

const corsOption = {
  origin: process.env.CLIENT_ORIGIN,
  credentials: true,
};
app.use(cors(corsOption));

// Serve static files from 'uploads' folder
app.use("/uploads", express.static("uploads"));

// Routes

app.use("/api/v1/auth", verifyRoute);
app.use("/api/v1/users", userRoute);

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);
// const clientBuildPath = path.join(__dirname, "../clozetweb/build");
// app.use(express.static(clientBuildPath));

// const corsOption = {
//   origin: "*",
//   credentials: true,
// };
// app.use(cors(corsOption));

// app.get("*", (req, res) => {
//   res.sendFile(path.join(clientBuildPath, "index.html"));
// });


const startServer = async () => {
  try {
    await connectDB();
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("❌ Failed to connect to the database:", error);
    process.exit(1); // exit if DB connection fails
  }
};

startServer();

