import React from 'react';
import './TeacherDashboard.css';
import Footer from '../../components/Footer/footer';

import TuserProfile from '../../components/TuserProfile/TuserProfile';
import TeacherNavBar from '../../components/TeacherNavBar/TeacherNavBar';
import NavBar from '../../components/navBar/Nav';


const TeacherDashboard = () => {

  return (
    <>
      <NavBar/>
      <div className="dashboard-container container-fluid ">
        <div className="row">
          {/* Left Sidebar: Navigation Menu */}
          <TeacherNavBar/>
          

          {/* Right Content: Student Info and Courses */}
          <div className="col-lg-9 col-md-8 col-sm-12">
           <TuserProfile/>
          
           
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default TeacherDashboard;
