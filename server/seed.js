require("dotenv").config();
const mongoose = require('mongoose');
const Course = require('./models/Course'); // Adjust the path as necessary

const MONGO_URI = process.env.MONGO_URI;

// Initial courses data
const initialCourses = [
    {
        title: 'Maths',
        teacher: 'Mr. John Doe',
        description: 'Learn basic to advanced mathematics.',
        image: 'https://via.placeholder.com/100x100',
    },
    {
        title: 'Physics',
        teacher: 'Mrs. Jane Smith',
        description: 'Explore the fundamental principles of physics.',
        image: 'https://via.placeholder.com/100x100',
    },
    {
        title: 'Chemistry',
        teacher: 'Dr. Emily Johnson',
        description: 'Understand the building blocks of matter.',
        image: 'https://via.placeholder.com/100x100',
    },
    {
        title: 'Biology',
        teacher: 'Dr. Richard Roe',
        description: 'Study the living world and its organisms.',
        image: 'https://via.placeholder.com/100x100',
    },
];

const seedDatabase = async () => {
    try {
        // Connect to the database
        await mongoose.connect(MONGO_URI);
        console.log('MongoDB Connected');

        // Check if courses already exist before seeding
        const count = await Course.countDocuments({});
        if (count === 0) {
            await Course.insertMany(initialCourses);
            console.log('Initial courses seeded');
        } else {
            console.log('Courses already exist, skipping seeding.');
        }
    } catch (err) {
        console.error('Error during seeding:', err);
    } finally {
        // Close the database connection
        mongoose.connection.close();
    }
};

seedDatabase();
