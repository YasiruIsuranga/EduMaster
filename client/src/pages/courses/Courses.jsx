import React from 'react';
import CourseSection from '../../components/CourseSection/CourseSection';
import './Courses.css';
import Footer from '../../components/Footer/footer';
import StudentNavBar from '../../components/StudentNavBar/StudentNavBar';
import NavBar from '../../components/navBar/Nav';

function Courses() {
  return (
    <>
      <NavBar />
      <div className=" container-fluid">
        <div className="row">
          {/* Left Sidebar: Navigation Menu */}
          <StudentNavBar />

          {/* Right Content: Student Info and Courses */}
          <div className="col-lg-9 col-md-8 col-sm-12 right-content">
            <div className="course-header text-center mb-4">
              <h2 className="course-title">Your Courses</h2>
              <p className="course-subtitle">Track your progress and manage your enrolled courses</p>
            </div>
            <CourseSection />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Courses;
