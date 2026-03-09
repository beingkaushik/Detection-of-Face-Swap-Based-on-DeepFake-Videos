const express = require('express');
const router = express.Router();

const courseController = require('../controllers/courseController');

router.get('/courses', courseController.getCourses);

router.post('/courses', courseController.addCourse);

router.put('/courses/:id', courseController.updateCourse);

router.delete('/courses/:id', courseController.deleteCourse);

module.exports = router;