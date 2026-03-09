let studentList = [
    { id: 1, name: "Ajay kumar", branch: "Computer Science - AIML" },
    { id: 2, name: "Prajwal ", branch: "Mechanical" },
    { id: 3, name: "Dhrva" , branch:"CSE(DATA SCIENCE)" },
    { id: 4, name: "Deekshith N", branch:"CSE(AIML)"}
];

// GET all students
const getStudents = (req, res) => {
    res.json(studentList);
};

// GET student by ID
const getStudentById = (req, res) => {
    const studentId = parseInt(req.params.id);

    const student = studentList.find(s => s.id === studentId);

    if (!student) {
        return res.status(404).json({
            message: "Student not found"
        });
    }

    res.json(student);
};

// POST add student
const addStudent = (req, res) => {
    const { name, branch } = req.body;

    const newStudent = {
        id: studentList.length + 1,
        name,
        branch
    };

    studentList.push(newStudent);

    res.status(201).json({
        message: "Student added successfully",
        student: newStudent
    });
};

// PUT update student
const updateStudent = (req, res) => {
    const studentId = parseInt(req.params.id);
    const { name, branch } = req.body;

    const student = studentList.find(s => s.id === studentId);

    if (!student) {
        return res.status(404).json({
            message: "Student not found"
        });
    }

    student.name = name;
    student.branch = branch;

    res.json({
        message: "Student updated successfully",
        student
    });
};

// DELETE student
const deleteStudent = (req, res) => {
    const studentId = parseInt(req.params.id);

    const student = studentList.find(s => s.id === studentId);

    if (!student) {
        return res.status(404).json({
            message: "Student not found"
        });
    }

    studentList = studentList.filter(s => s.id !== studentId);

    res.json({
        message: "Student deleted successfully"
    });
};

module.exports = {
    getStudents,
    getStudentById,
    addStudent,
    updateStudent,
    deleteStudent
};