const express = require('express');
const router = express.Router();
const Course = require('../models/Course');

// Get all courses
router.get('/', async (req, res) => {
  try {
    const courses = await Course.find();
    res.json(courses);
  } catch (err) {
    console.error('Error fetching courses:', err);
    res.status(500).json({ message: 'Server error' });
  }
});

// Get a course by ID (for "Open Course" page)
router.get('/:id', async (req, res) => {
  try {
    const course = await Course.findById(req.params.id);
    if (!course) {
      return res.status(404).json({ message: 'Course not found' });
    }
    res.json(course);
  } catch (err) {
    console.error('Error fetching course:', err);
    res.status(500).json({ message: 'Server error' });
  }
});

// Add a new course (can be used to populate DB)
router.post('/', async (req, res) => {
  const { title, teacher, description, image, weeks } = req.body;

  if (!title || !teacher || !description || !image || !weeks) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  const newCourse = new Course({
    title,
    teacher,
    description,
    image,
    weeks
  });

  try {
    const savedCourse = await newCourse.save();
    res.status(201).json(savedCourse);
  } catch (err) {
    console.error('Error saving course:', err);
    res.status(400).json({ message: 'Error saving course' });
  }
});

// Update a course by ID (for "Teacher Open Course" page)
router.put('/:id', async (req, res) => {
  try {
    const course = await Course.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!course) {
      return res.status(404).json({ message: 'Course not found' });
    }
    res.json(course);
  } catch (err) {
    console.error('Error updating course:', err);
    res.status(500).json({ message: 'Server error' });
  }
});

// Remove a course by ID
router.delete('/:id', async (req, res) => {
  try {
    const deletedCourse = await Course.findByIdAndDelete(req.params.id);
    if (!deletedCourse) {
      return res.status(404).json({ message: 'Course not found' });
    }
    res.json({ message: 'Course deleted successfully' });
  } catch (err) {
    console.error('Error deleting course:', err);
    res.status(500).json({ message: 'Server error' });
  }
});

// Add a new week to a course
router.post('/:id/weeks', async (req, res) => {
  const { video, pdf, quiz, resources } = req.body;
  const newWeek = { video, pdf, quiz, resources };

  try {
    const course = await Course.findById(req.params.id);
    if (!course) {
      return res.status(404).json({ message: 'Course not found' });
    }

    course.weeks.push(newWeek);
    await course.save();

    res.status(201).json(course);
  } catch (err) {
    console.error('Error adding week:', err);
    res.status(400).json({ message: 'Error adding week' });
  }
});

// Update a week in a course
router.put('/:id/weeks/:weekId', async (req, res) => {
  try {
    const course = await Course.findById(req.params.id);
    if (!course) {
      return res.status(404).json({ message: 'Course not found' });
    }

    const weekIndex = course.weeks.findIndex(week => week._id.toString() === req.params.weekId);
    if (weekIndex === -1) {
      return res.status(404).json({ message: 'Week not found' });
    }

    course.weeks[weekIndex] = { ...course.weeks[weekIndex], ...req.body };
    await course.save();

    res.json(course);
  } catch (err) {
    console.error('Error updating week:', err);
    res.status(400).json({ message: 'Error updating week' });
  }
});

// Remove a week from a course
router.delete('/:id/weeks/:weekId', async (req, res) => {
  try {
    const course = await Course.findById(req.params.id);
    if (!course) {
      return res.status(404).json({ message: 'Course not found' });
    }

    const updatedWeeks = course.weeks.filter(week => week._id.toString() !== req.params.weekId);
    course.weeks = updatedWeeks;

    await course.save();

    res.json(course);
  } catch (err) {
    console.error('Error removing week:', err);
    res.status(400).json({ message: 'Error removing week' });
  }
});

module.exports = router;
