require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const User = require('./src/models/User');
const authRoutes = require('./src/routes/auth.routes');
const { globalErrorHandler } = require('./src/middlewares/errorHandler');
const app = express();

// --- Middleware ---
app.use(cors({
  origin: ["http://localhost:5173","http://localhost:8000"], // Exact URL of your React app
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,               // Required for withCredentials: true in Axios
  allowedHeaders: ["Content-Type", "Authorization"]
}));

app.use(express.json());
app.use(cookieParser());



app.set("db", { User });


app.use("/api/auth", authRoutes); 

// --- Error Handling ---
app.use(globalErrorHandler);

// --- Database & Server Start ---
const start = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI); // <--- If this hangs, server won't start
    app.listen(8000, () => console.log("Backend running on port 8000 🚀"));
  } catch (err) {
    console.error("Failed to start server:", err);
  }
};

start();
module.exports = app; 