let courseList = [
    { id: 1, courseName: "CSE(AIML) ", duration: "4 Years" },
    { id: 2, courseName: "CSE ", duration: "4 Years" },
    { id: 3, courseName: "CSE(DATA SCIENCE)", duration: "4 Years" },
    { id: 4, courseName: "MECHANICAL ENGINEERING", duration: "4 Years" }
];

// GET all courses
const getCourses = (req, res) => {
    res.json(courseList);
};

// POST add course
const addCourse = (req, res) => {
    const { courseName, duration } = req.body;

    const newCourse = {
        id: courseList.length + 1,
        courseName,
        duration
    };

    courseList.push(newCourse);

    res.json({
        message: "Course added successfully",
        course: newCourse
    });
};

// PUT update course
const updateCourse = (req, res) => {
    const courseId = parseInt(req.params.id);
    const { courseName, duration } = req.body;

    const course = courseList.find(c => c.id === courseId);

    if (!course) {
        return res.status(404).json({ message: "Course not found" });
    }

    course.courseName = courseName;
    course.duration = duration;

    res.json({
        message: "Course updated successfully",
        course
    });
};

// DELETE course
const deleteCourse = (req, res) => {
    const courseId = parseInt(req.params.id);

    courseList = courseList.filter(c => c.id !== courseId);

    res.json({
        message: "Course deleted successfully"
    });
};

module.exports = {
    getCourses,
    addCourse,
    updateCourse,
    deleteCourse
};