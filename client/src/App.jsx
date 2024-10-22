import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { AuthProvider } from './contexts/auth-context'; // Use named import

import Home from './pages/home/Home.jsx';
import About from './pages/about/About.jsx';
import Courses from './pages/courses/Courses.jsx';
import SignIn from './pages/signin/StudentSignIn.jsx';
import OpenCourse from './pages/OpenCourse/OpenCourse.jsx';
import Programs from './pages/Programs/Programs.jsx';
import StudentDashboard from './pages/StudentDashboard/StudentDashboard.jsx';
import StudentUserProfile from './pages/StudentUserProfile/StudentUserProfile.jsx';
import TeacherDashboard from './pages/TeacherDashboard/TeacherDashboard.jsx';
import TeacherUserProfile from './pages/TeacherUserProfile/TeacherUserprofile.jsx';
import TeacherOpenCourse from './pages/TeacherOpenCourse/TeacherOpenCourse.jsx';
import AdminCourse from './pages/AdminCourse/AdminCourse.jsx';
import TeacherSignIn from './pages/signin/TeacherSignIn.jsx';
import AdminDashboard from './pages/AdminDashBoard/AdminDashBoard.jsx'

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/courses' element={<Courses />} />
        <Route path='/studentPortal' element={<SignIn />} />
        <Route path='/teacherPortal' element={<TeacherSignIn />} />
        <Route path="/teachersignin" element={<TeacherSignIn />} />
        <Route path='/opencourse/:courseId' element={<OpenCourse />} />
        <Route path='/programs' element={<Programs />} />
        <Route path='/studentdashboard' element={<StudentDashboard />} />
        <Route path='/studentuserprofile' element={<StudentUserProfile />} />
        <Route path='/teacherdashboard' element={<TeacherDashboard />} />
        <Route path='/teacheruserprofile' element={<TeacherUserProfile />} />
        <Route path='/teacheropencourse/:courseId' element={<TeacherOpenCourse />} />
        <Route path='/admincourse' element={<AdminCourse />} />
        <Route path='/admindashboard' element={<AdminDashboard />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
