require("dotenv").config();
const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const cors = require('cors');


const app = express()
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;

//create a database connection
mongoose.connect(MONGO_URI).then(()=>console.log('MongoDB Connected')).catch((error)=>console.log(error));



app.use(
    cors({
        origin : process.env.CLIENT_URL,
        methods : ['GET', 'POST', 'DELETE', 'PUT'],
        allowedHeaders : [
            'Content-Type',
            'Authorization',
        ],
        Credential : true
    })
);

app.use(express.json());

app.listen(PORT, ()=> console.log(`Server is now running on port ${PORT}`))