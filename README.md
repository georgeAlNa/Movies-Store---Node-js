# Movie Store API

A RESTful API built using **Node.js**, **Express**, and **MongoDB (Mongoose)**.  
It manages **Movies** and **Genres**, demonstrating CRUD operations, data validation, middleware, and error handling.

---

## Features
- MongoDB integration using Mongoose ODM
- Two related schemas: **Genre** and **Movie**
- CRUD operations for both models
- Data validation and relations using `ObjectId`
- Custom middleware for logging, validation, and error handling
- Global error handling middleware
- Morgan logger for HTTP requests
- Postman API tests

---

## Project Structure
```
movie-store-api/
├── src/
│   ├── models/
│   │   ├── Movie.js
│   │   └── Genre.js
│   ├── controllers/
│   │   ├── movie.controller.js
│   │   └── genre.controller.js
│   ├── routes/
│   │   ├── movie.routes.js
│   │   └── genre.routes.js
│   └── middlewares/
│       ├── errorHandler.js
│       └── validationMiddleware.js
├── app.js  
├── package.json
├── .env
└── .gitignore
```

---

## ⚙️ Installation & Setup

### Install dependencies
```bash
npm install
```

### Environment Variables
Create a `.env` file in the project root:
```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/Moves_Store
```

---

## Server will start on:  
**http://localhost:5000**

---

## API Endpoints

### Genre Endpoints
| Method:|     Endpoint:     | Description: 
| GET    | `/api/genres`     | Get all genres 
| GET    | `/api/genres/:id` | Get a single genre by ID 
| POST   | `/api/genres`     | Create a new genre 
| PUT    | `/api/genres/:id` | Update an existing genre 
| DELETE | `/api/genres/:id` | Delete a genre 

### Movie Endpoints
| Method:| Endpoint:                    | Description: 
| GET    | `/api/movies`                | Get all movies (with genre populated) 
| GET    | `/api/movies/:id`            | Get single movie by ID (with genre populated) 
| POST   | `/api/movies`                | Create a new movie 
| PUT    | `/api/movies/:id`            | Update a movie 
| DELETE | `/api/movies/:id`            | Delete a movie 
| GET    | `/api/movies/genre/:genreId` | Get movies by genre 

---

## Postman Collection :
Included at root path of project with name : "Node js - Movies Store.postman_collection.json"

---

## Scripts
```json
"scripts": {
    "start": "node app.js",
    "dev": "nodemon app.js"
}
```