import React from 'react';
import './CourseSection.css';



const CourseSection = () => {
  const courses = [
    {
      id: 1,
      title: 'Mathematics 101',
      progress: '75%',
      image: 'https://via.placeholder.com/100x100', // Placeholder image for course
    },
    {
      id: 2,
      title: 'Physics Basics',
      progress: '45%',
      image: 'https://via.placeholder.com/100x100', // Placeholder image for course
    },
    {
      id: 3,
      title: 'Introduction to Chemistry',
      progress: '90%',
      image: 'https://via.placeholder.com/100x100', // Placeholder image for course
    },
  ];

  return (
    <>

            <div className="course-content-container">
              <h3>My Courses</h3>
              {courses.map((course) => (
                <div key={course.id} className="course-item mb-3">
                  <div className="course-details d-flex align-items-center">
                    <img src={course.image} alt={course.title} className="course-image me-3" />
                    <div className="course-title">
                      <h5>{course.title}</h5>
                    </div>
                  </div>
                  <div className="course-progress">
                    <p>Progress: {course.progress}</p>
                  </div>
                </div>
              ))}
            </div>
          
        
      
      
    </>
  );
};

export default CourseSection;
