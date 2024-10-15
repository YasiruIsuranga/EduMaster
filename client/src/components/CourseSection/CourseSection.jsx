import React, { useState } from 'react';
import { ProgressBar, Modal, Button } from 'react-bootstrap';
import './CourseSection.css';

const CourseSection = ({ enrolledCourses = [], removeCourse }) => {
  const [showRemoveModal, setShowRemoveModal] = useState(false);
  const [courseToRemove, setCourseToRemove] = useState(null);

  const handleRemoveClick = (courseId) => {
    setCourseToRemove(courseId);
    setShowRemoveModal(true);
  };

  const handleConfirmRemove = () => {
    if (courseToRemove !== null) {
      removeCourse(courseToRemove);
      setShowRemoveModal(false);
    }
  };

  return (
    <div className="course-section container py-4">
      <h3 className="text-center text-light mb-4">My Courses</h3>
      <div className="row">
        {enrolledCourses.length === 0 ? (
          <p className="text-center text-light">You are not enrolled in any courses.</p>
        ) : (
          enrolledCourses.map((course) => (
            <div key={course.id} className="col-md-4 mb-4">
              <div className="course-item p-3 bg-light rounded shadow-sm text-center">
                <div className="course-image">
                  <img src={course.image} alt={course.title} className="rounded-circle" />
                </div>
                <div className="course-title mt-2">
                  <h5>{course.title}</h5>
                </div>
                <div className="course-progress mt-2">
                  <p>Progress: {course.progress || 0}%</p>
                  <ProgressBar now={course.progress || 0} label={`${course.progress || 0}%`} />
                </div>
                <div className="course-button mt-3">
                  <Button 
                    variant="danger" 
                    onClick={() => handleRemoveClick(course.id)}
                  >
                    Remove Course
                  </Button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
      {/* Remove Course Modal */}
      <Modal show={showRemoveModal} onHide={() => setShowRemoveModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Removal</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure you want to remove this course?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowRemoveModal(false)}>
            Cancel
          </Button>
          <Button variant="danger" onClick={handleConfirmRemove}>
            Yes, Remove
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default CourseSection;
