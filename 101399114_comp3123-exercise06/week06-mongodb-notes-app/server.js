const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const noteRoutes = require('./routes/Noteroutes'); 
const DB_URL = "mongodb+srv://101399114:Peter@cluster0.myl9g.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
const app = express();

// Middleware for parsing request bodies
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.Promise = global.Promise;

mongoose.connect(DB_URL, { useNewUrlParser: true, useUnifiedTopology: true }) // Use DB_URL here
    .then(() => {
        console.log("Connected to the database!");
    })
    .catch(err => {
        console.error("Could not connect to the database. Exiting now...", err);
        process.exit();
    });

// Use note routes
app.use('/notes', noteRoutes); // Set the base path for your notes routes

app.get('/', (req, res) => {
    res.send("<h1>Welcome to Note taking application - Week06 Exercise</h1>");
});

app.listen(8081, () => {
    console.log("Server is listening on port 8081");
});
