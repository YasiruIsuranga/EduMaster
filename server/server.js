require("dotenv").config();
const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;

// Create a database connection
mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('MongoDB Connected'))
.catch((error) => console.log(error));

app.use(
    cors({
        origin: process.env.CLIENT_URL,  // The frontend URL from environment variables
        methods: ['GET', 'POST', 'DELETE', 'PUT'],
        allowedHeaders: ['Content-Type', 'Authorization'],
        credentials: true  // Fix the typo here
    })
);

app.use(express.json());
app.use(cookieParser());  // You imported cookie-parser, so let's add it to the middleware

// Start the server
app.listen(PORT, () => console.log(`Server is now running on port ${PORT}`));
