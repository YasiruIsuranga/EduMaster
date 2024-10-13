import React, { useState } from "react";
import "./Hero.css";
import { useNavigate } from "react-router-dom"; // For navigation in react-router-dom v6

// Replace the local image with an online image URL
const eduImage = "https://cdni.iconscout.com/illustration/premium/thumb/education-and-school-lesson-illustration-download-in-svg-png-gif-file-formats--written-formulas-math-lecture-class-pack-illustrations-3932549.png?f=webp"; // Example URL for educational background image

const Hero = () => {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate(); // useNavigate hook for navigation

  const handleStudentClick = () => {
    navigate('/register'); // Navigate to the register page for students
  };

  const handleTeacherClick = () => {
    setShowModal(true); // Show modal for teacher confirmation
  };

  const handleModalConfirm = () => {
    setShowModal(false);
    navigate('/contact'); // Navigate to the contact page
  };

  return (
    <div className="hero-container container-fluid">
      <div className="row align-items-center hero-content">
        {/* Left Column */}
        <div className="col-lg-6 col-md-6 col-sm-12 text-center hero-text">
          <p className="welcome">Welcome to <br /> Edu Master</p>
          <p className="description">
          Edu Master is an online platform that provides students and teachers with interactive learning resources, customizable courses, and collaborative tools, promoting an engaging and effective educational experience.
          </p>
          {/* <div className="hero-buttons-container">
            <button className="student-btn btn" onClick={handleStudentClick}>
              Be a Student
            </button>
            <button className="teacher-btn btn" onClick={handleTeacherClick}>
              Be a Teacher
            </button>
          </div> */}
        </div>
        {/* Right Column */}
        <div className="col-lg-6 col-md-6 col-sm-12 text-center hero-image-container">
          <img src={eduImage} alt="Educational Platform" className="hero-image img-fluid" />
        </div>
      </div>

      {showModal && (
        <div className="teacher-modal">
          <div className="modal-content">
            <p>Do you want to become a teacher?</p>
            <button className="btn btn-success" onClick={handleModalConfirm}>
              Yes
            </button>
            <button className="btn btn-danger" onClick={() => setShowModal(false)}>
              No
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Hero;
