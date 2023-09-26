import express from "express";
import { PORT } from "./config.js"

const app = express();

// First parameter is the route
// Second parameter is the callback functions
app.get('/', (request, response) => {
    console.log(request)
    return response.status(234).send('Welcome to MERN stack tutorial')
});

app.listen(PORT, () => {
    console.log(`App is listening to port: ${PORT}`);
});