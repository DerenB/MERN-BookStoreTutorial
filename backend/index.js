import express, { response } from "express";
import mongoose from "mongoose";

import { PORT, mongoDbUrl } from "./config.js";
import { Book } from "./models/bookModel.js";
import booksRoute from "./routes/booksRoute.js";

const app = express();

// Middleware for parsing request body
app.use(express.json());

// First parameter is the route
// Second parameter is the callback functions
app.get('/', (request, response) => {
    console.log(request)
    return response.status(234).send('Welcome to MERN stack tutorial')
});

// Routing Books
app.use('/books', booksRoute);

// Connect to database
mongoose.connect(mongoDbUrl)
    .then(() => {
        console.log('App connected to database');
        app.listen(PORT, () => {
            console.log(`App is listening to port: ${PORT}`);
        });
    })
    .catch((error) => {
        console.log(error);
    });