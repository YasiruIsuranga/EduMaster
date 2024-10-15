require("dotenv").config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const authRoutes = require('./routes/auth-routes/index');
const courseRoutes = require('./routes/courseRoutes'); // Import course routes

const app = express();
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;

// Middleware
app.use(cors({
    origin: process.env.CLIENT_URL,
    methods: ["GET", "POST", "DELETE", "PUT"],
    allowedHeaders: ["Content-Type", "Authorization"]
}));

app.use(express.json());

// Routes configuration
app.use("/auth", authRoutes);
app.use("/api/courses", courseRoutes); // Correctly set up course routes

// Create a database connection
mongoose.connect(MONGO_URI, )
.then(() => {
    console.log('MongoDB Connected');
})
.catch((error) => {
    console.error('MongoDB connection error:', error);
});

// Global error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack); // Log error stack trace
    res.status(500).json({
        success: false,
        message: 'Something went wrong',
    });
});

// Start the server
app.listen(PORT, () => console.log(`Server is now running on port ${PORT}`));
