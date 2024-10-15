const express = require('express');
const router = express.Router();
const Course = require('../models/Course'); // Adjust the path as needed

// Route to get all courses
router.get('/', async (req, res) => { // Updated to match your main route "/api/courses"
  try {
    const courses = await Course.find();
    res.json(courses);
  } catch (err) {
    console.error('Error fetching courses:', err);
    res.status(500).json({ message: 'Server error' });
  }
});

// Route to add a course (you can use this to initially populate the DB)
router.post('/', async (req, res) => { // Updated to match your main route "/api/courses"
  const { title, teacher, description, image } = req.body;

  // Ensure all required fields are provided
  if (!title || !teacher || !description || !image) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  const newCourse = new Course({
    title,
    teacher,
    description,
    image
  });

  try {
    const savedCourse = await newCourse.save();
    res.status(201).json(savedCourse);
  } catch (err) {
    console.error('Error saving course:', err);
    res.status(400).json({ message: 'Error saving course' });
  }
});

module.exports = router;
