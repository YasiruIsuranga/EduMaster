import React, { useState } from 'react';
import { Card, Button, Modal } from 'react-bootstrap';
import './Programs.css'; // Custom CSS
import StudentNavBar from '../../components/StudentNavBar/StudentNavBar'; // Ensure correct import
import Footer from '../../components/Footer/footer';
import LogedNavBar from '../../components/LogedNavBar/LogedNavBar';

const Programs = ({ addCourse, enrolledCourses = [] }) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);

  const courses = [
    {
      id: 1,
      title: 'Maths',
      teacher: 'Mr. John Doe',
      description: 'Learn basic to advanced mathematics.',
      image: 'https://via.placeholder.com/100x100',
    },
    {
      id: 2,
      title: 'Physics',
      teacher: 'Mrs. Jane Smith',
      description: 'Explore the fundamental principles of physics.',
      image: 'https://via.placeholder.com/100x100',
    },
    {
      id: 3,
      title: 'Chemistry',
      teacher: 'Dr. Emily Johnson',
      description: 'Understand the building blocks of matter.',
      image: 'https://via.placeholder.com/100x100',
    },
    {
      id: 1,
      title: 'Maths',
      teacher: 'Mr. John Doe',
      description: 'Learn basic to advanced mathematics.',
      image: 'https://via.placeholder.com/100x100',
    },
    {
      id: 2,
      title: 'Physics',
      teacher: 'Mrs. Jane Smith',
      description: 'Explore the fundamental principles of physics.',
      image: 'https://via.placeholder.com/100x100',
    },
    {
      id: 3,
      title: 'Chemistry',
      teacher: 'Dr. Emily Johnson',
      description: 'Understand the building blocks of matter.',
      image: 'https://via.placeholder.com/100x100',
    },
  ];

  const isEnrolled = (courseId) => {
    return enrolledCourses.some((course) => course.id === courseId);
  };

  const handleEnrollClick = (course) => {
    setSelectedCourse(course);
    setShowModal(true);
  };

  const handleConfirmEnroll = () => {
    if (selectedCourse) {
      addCourse(selectedCourse);
    }
    setShowModal(false);
  };

  return (
    <>
    <LogedNavBar/>
      <div className="container-fluid main-container ">
        <div className="row">
          {/* Left-aligned Student NavBar */}
        
            <StudentNavBar />
          

          {/* Main Content Area */}
          <div className="col-md-9 col-lg-8">
            <div className="programs-section py-4">
              <h3 className="text-center text-dark mb-4">Available Programs</h3>
              <div className="row">
                {courses.map((course) => (
                  !isEnrolled(course.id) && ( // Only show courses not enrolled
                    <div key={course.id} className="col-md-6 col-lg-4 mb-4">
                      <Card className="h-100 shadow-sm">
                        <Card.Img variant="top" src={course.image} />
                        <Card.Body className="d-flex flex-column">
                          <Card.Title>{course.title}</Card.Title>
                          <Card.Text><strong>Teacher:</strong> {course.teacher}</Card.Text>
                          <Card.Text>{course.description}</Card.Text>
                          <Button 
                            className="mt-auto btn btn-primary" 
                            onClick={() => handleEnrollClick(course)}
                          >
                            Enroll
                          </Button>
                        </Card.Body>
                      </Card>
                    </div>
                  )
                ))}
              </div>

              {/* Modal for Enrollment */}
              <Modal show={showModal} onHide={() => setShowModal(false)}>
                <Modal.Header closeButton>
                  <Modal.Title>Confirm Enrollment</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  Are you sure you want to enroll in {selectedCourse?.title}?
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={() => setShowModal(false)}>
                    Cancel
                  </Button>
                  <Button variant="primary" onClick={handleConfirmEnroll}>
                    Yes, Enroll
                  </Button>
                </Modal.Footer>
              </Modal>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Programs;
