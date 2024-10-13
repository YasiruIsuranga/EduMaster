import React from 'react';
import './StudentDashboard.css';
import Footer from '../../components/Footer/footer';
import StudentNavBar from '../../components/StudentNavBar/StudentNavBar';
import SuserProfile from '../../components/SuserProfile/SuserProfile';
import CourseSection from '../../components/CourseSection/CourseSection';
import NavBar from '../../components/navBar/Nav';

const StudentDashboard = () => {
  return (
    <>
      <NavBar />
      <div className="dashboard-container container-fluid">
        <div className="row">
          {/* Left Sidebar: Navigation Menu */}
          <StudentNavBar />

          {/* Right Content: Student Info and Courses */}
          <div className="col-lg-9 col-md-8 col-sm-12 right-content">
            <SuserProfile />
            <CourseSection />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default StudentDashboard;
