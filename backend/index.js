import express, { response } from "express";
import mongoose from "mongoose";

import { PORT, mongoDbUrl } from "./config.js";
import { Book } from "./models/bookModel.js";

const app = express();

// Middleware for parsing request body
app.use(express.json());

// First parameter is the route
// Second parameter is the callback functions
app.get('/', (request, response) => {
    console.log(request)
    return response.status(234).send('Welcome to MERN stack tutorial')
});

// Route for Creating a book
app.post('/books', async (request, response) => {
    try {
        // Checks if all fields entered
        if (!request.body.title || !request.body.author || !request.body.publishYear) {
            return response.status(400).send({
                message: 'Send all required fields: title, author, publish year'
            });
        }

        // Creates new book object
        const newBook = {
            title: request.body.title,
            author: request.body.author,
            publishYear: request.body.publishYear
        };
        console.log(newBook);

        // Creates book
        const book = await Book.create(newBook);

        return response.status(201).send(book);

    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

// Route for Reading All Books
app.get('/books', async (request, response) => {
    try {
        const books = await Book.find({});
        console.log(books);

        return response.status(200).json(books);
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

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