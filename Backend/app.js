require("dotenv").config();

const express = require("express");
const cookieParser = require("cookie-parser");
const helmet = require("helmet");
const mongoose = require("mongoose");

const authRoutes = require('./src/routes/auth.routes');
const { globalErrorHandler } = require("./src/middlewares/errorHandler.js");

const app = express();

// ── Security headers ──────────────────────────────────────────────────────────
app.use(helmet());

// ── Body parsing ──────────────────────────────────────────────────────────────
app.use(express.json({ limit: "10kb" })); // Prevent large payload attacks
app.use(cookieParser());

// ── Trust proxy (required if behind Nginx / Render / Railway) ────────────────
app.set("trust proxy", 1);

// ── DB injection ──────────────────────────────────────────────────────────────
// Pass db models via app.set so controllers stay testable
const db = require("./src/models/User.js"); // your Mongoose models
app.set("db", db);

// ── Routes ────────────────────────────────────────────────────────────────────
app.use("./api/auth", authRoutes);

// ── 404 handler ───────────────────────────────────────────────────────────────
app.use((req, res) => {
  res.status(404).json({ success: false, message: "Route not found" });
});

// ── Global error handler (must be last) ──────────────────────────────────────
app.use(globalErrorHandler);

// ── DB connection + server start ──────────────────────────────────────────────
async function start() {
    try {
        const uri = process.env.MONGODB_URI;
        
        // Debugging line: remove this once it works
        console.log("Connecting to:", uri); 

        if (!uri) {
            throw new Error("MONGODB_URI is not defined in .env file");
        }

        await mongoose.connect(uri);
        console.log('Connected to MongoDB');

        app.listen(process.env.PORT || 3000, () => {
            console.log('Server is running');
        });
    } catch (error) {
        console.error('Startup error:', error);
        process.exit(1);
    }
}

start();
module.exports = app; 