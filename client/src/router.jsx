import { createBrowserRouter } from 'react-router-dom';
import Home from './pages/home/Home.jsx'
import About from './pages/about/About.jsx'
import Courses from './pages/Courses/Courses.jsx'
import SignIn from './pages/signin/StudentSignIn.jsx';
import StudentDashboard from './pages/StudentDashboard/StudentDashboard.jsx';
import StudentUserProfile from './pages/StudentUserProfile/StudentUserProfile.jsx';
import TeacherDashboard from './pages/TeacherDashboard/TeacherDashboard.jsx';
import TeacherUserProfile from './pages/TeacherUserProfile/TeacherUserprofile.jsx';
import OpenCourse from './pages/OpenCourse/OpenCourse.jsx';
import Programs from './pages/Programs/Programs.jsx';

export const router = createBrowserRouter([
    {path:"/", element:<Home /> },
    {path:"/about", element:<About /> },
    {path:"/courses", element:<Courses /> },
    {path:"/studentPortal", element:<SignIn />},
    {path:"/studentdashboard", element:<StudentDashboard />},
    {path:"/studentuserprofile", element:<StudentUserProfile />},
    {path:"/teacherdashboard", element:<TeacherDashboard />},
    {path:"/teacheruserprofile", element:<TeacherUserProfile />},
    {path:"/opencourse", element:<OpenCourse />},
    {path:"/programs", element:<Programs />},
  ]);