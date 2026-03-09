const express = require('express');
const app = express();

app.use(express.json());

let students = [
    { id: 1, name: "John Doe", branch: "Computer Science" },
    { id: 2, name: "Priya", branch: "Mechanical" }
];

// GET students
app.get('/students', (req, res) => {
    res.json(students);
});

// GET student by id
app.get('/students/:id', (req, res) => {
    const id = parseInt(req.params.id);

    const student = students.find(s => s.id === id);

    if (!student) {
        return res.status(404).json({ message: "Student not found" });
    }

    res.json(student);
});

app.listen(3001, () => {
    console.log("Student Service running on port 3001");
});