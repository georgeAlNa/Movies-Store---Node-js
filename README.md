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

## Server will start on:  
**http://localhost:3000**

---

## Postman Collection :
Included at root path of project with name : "Node js - Movies Store.postman_collection.json"

---

## Scripts
```json
"scripts": {
    "dev": "nodemon app.js"
}
```