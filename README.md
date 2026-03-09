# Node.js Backend Training

This repository contains backend tasks implemented using Node.js and Express.

## Project 1: Student Management API
Features:
- Student CRUD API
- Course CRUD API
- Folder structure with controllers and routes
- Error handling
- Naming conventions

Endpoints:

GET /students  
GET /students/:id  
POST /students  
PUT /students/:id  
DELETE /students/:id  

GET /courses  
POST /courses  
PUT /courses/:id  
DELETE /courses/:id  


## Project 2: Microservices Architecture

Three independent services:

Student Service → Port 3001  
Course Service → Port 3002  
College Service → Port 3003

Each service runs independently using Express.js.