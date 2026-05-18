// server.js

require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

// routes
const taskRoutes = require("./routes/taskRoutes");

const app = express();

/* ======================
   Middleware
====================== */

// ✅ CORS (Render + Vercel safe)
app.use(
  cors({
    origin: "*",
  })
);

app.use(express.json());

/* ======================
   MongoDB Connection
====================== */

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB connected"))
  .catch((error) =>
    console.error("❌ MongoDB connection error:", error)
  );

/* ======================
   Routes
====================== */

// health check
app.get("/", (req, res) => {
  res.json({ message: "Express server running 🚀" });
});

// task routes
app.use("/api/tasks", taskRoutes);

/* ======================
   Server Start
====================== */

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});