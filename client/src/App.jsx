import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Home from './pages/home/Home.jsx'
import About from './pages/about/About.jsx'
import Courses from './pages/courses/Courses.jsx'
import SignIn from './pages/signin/StudentSignIn.jsx';
import AuthProvider from './contexts/auth-context/index.jsx'
import OpenCourse from './pages/OpenCourse/OpenCourse.jsx'
import Programs from './pages/Programs/Programs.jsx'
import StudentDashboard from './pages/StudentDashboard/StudentDashboard.jsx'
import StudentUserProfile from './pages/StudentUserProfile/StudentUserProfile.jsx'
import TeacherDashboard from './pages/TeacherDashboard/TeacherDashboard.jsx'
import TeacherUserProfile from './pages/TeacherUserProfile/TeacherUserprofile.jsx'
import TeacherOpenCourse from './pages/TeacherOpenCourse/TeacherOpenCourse.jsx'
import AdminCourse from './pages/AdminCourse/AdminCourse.jsx'

function App() {
  return (
    <AuthProvider>
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/courses' element={<Courses />} />
        <Route path='/studentPortal' element={<SignIn />} />
        <Route path='/opencourse/:courseId' element={<OpenCourse />} />
        <Route path='/programs' element={<Programs />} />
        <Route path='/studentdashboard' element={<StudentDashboard />} />
        <Route path='/studentuserprofile' element={<StudentUserProfile />} />
        <Route path='/teacherdashboard' element={<TeacherDashboard />} />
        <Route path='/teacheruserprofile' element={<TeacherUserProfile />} />
        <Route path='/teacheropencourse/:courseId' element={<TeacherOpenCourse />} />
        <Route path='/admincourse' element={<AdminCourse />} />
    </Routes>
    </AuthProvider>
)
}

export default App