const express = require('express');
const app = express();

app.use(express.json());

let courses = [
    { id: 1, name: "Computer Science", duration: "4 Years" },
    { id: 2, name: "Electronics", duration: "4 Years" }
];

app.get('/courses', (req, res) => {
    res.json(courses);
});

app.listen(3002, () => {
    console.log("Course Service running on port 3002");
});