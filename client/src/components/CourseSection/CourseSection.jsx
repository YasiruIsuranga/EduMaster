import React from 'react';
import { ProgressBar } from 'react-bootstrap';
import './CourseSection.css';

const CourseSection = () => {
  const courses = [
    {
      id: 1,
      title: 'Maths',
      progress: 75, // Percentage as number
      image: 'https://via.placeholder.com/100x100', // Placeholder image for course
    },
    {
      id: 2,
      title: 'Physics',
      progress: 45,
      image: 'https://via.placeholder.com/100x100',
    },
    {
      id: 3,
      title: 'Chemis',
      progress: 90,
      image: 'https://via.placeholder.com/100x100',
    },
  ];

  // Function to handle button click and navigate to the Open Course page
  const handleGoToYouTube = () => {
    window.open('http://localhost:5173/opencourse'); // Navigate to the Open Course page
  };

  return (
    <div className="course-section container py-4">
      <h3 className="text-center text-light mb-4">My Courses</h3>
      <div className="row">
        {courses.map((course) => (
          <div key={course.id} className="col-md-4 mb-4">
            <div className="course-item p-3 bg-light rounded shadow-sm text-center">
              {/* Image Row */}
              <div className="course-image">
                <img src={course.image} alt={course.title} className="rounded-circle" />
              </div>
              {/* Title Row */}
              <div className="course-title mt-2">
                <h5>{course.title}</h5>
              </div>
              {/* Progress Row */}
              {/* <div className="course-progress mt-2">
                <p>Progress: {course.progress}%</p>
                <ProgressBar now={course.progress} label={`${course.progress}%`} className="progress-bar-custom" />
              </div>*/}
              {/* Button Row */}
              <div className="course-button mt-3">
                <button 
                  className="btn btn-creative" 
                  onClick={handleGoToYouTube}
                >
                  Open Course
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseSection;
