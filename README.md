# MERN-BookStoreTutorial

# Backend Setup

- Backend Initialize
  - `npm init -y`
- Add Packages
  - `npm i express nodemon`
  - `npm i mongoose`
  - `npm i cores`
- Add to package.json
  - `"type": "module"`
- Add scripts to package.json
  - `"start": "node index.js",`
  - `"dev": "nodemon index.js"`
- Run Server
  - `npm start`

### Index js setup

- Backend runs here
- Import Express and Mongoose dependencies
- Import Config file items
- Start the App:
  - `const app = express();`
  - `app.use(express.json());`
  - This enables express to parse json in the request body
- Connect to Database

# Backend Models

- Models are used for creating documents that are inserted into the db
- Models:
  - Import mongoose
  - Create a const variable with a Schema
  - Export the const
- Example:
```
import mongoose from "mongoose";
const bookSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true
    },
    author: {
      type: String,
      required: true
    },
    publishYear: {
      type: Number,
      required: true
    }
  },
  {
    timestamps: true,
  }
);
export const Book = mongoose.model('Book', bookSchema );
```

# Backend Routes

- Routes used for different models
- Used so that multiple models can be used
- Example:
```
import express from 'express';
import { Book } from '../models/bookModel.js';

const router = express.Router();
// Various Route functions, CRUD
export default router;
```

# CORS Policies

- import cors in index.js
- Add a `app.use` to use the CORS
- Option 1:
  - Allow all origins
  - `app.use(cors());`
- Option 2:
  - Allow only specific origins
```
app.use(
  cors({
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type']
  })
);
```

# Frontend Creation

- Create Frontend with vite
  - `npm create vite@latest`
  - Type in project name
  - Select React
  - Select JavaScript
- `cd` into frontend folder
  - `npm i`
- Add Tailwind
  - Go to their website
  - Getting Started > Framework Guides > Vite
  - [Follow the Instructions](https://tailwindcss.com/docs/guides/vite)
- Install Tailwind CSS
  - `npm install -D tailwindcss postcss autoprefixer`
  - `npx tailwindcss init -p`
    - Creates `tailwind.config.js` & `postcss.config.js`
  - Paste code into config
  - Paste code into `index.css`
  - Delete file `App.css`
  - Delete everything in `App.jsx`
- Test Project works
  - `npm run dev`

### React Router

- `npm i react-router-dom`