import { createBrowserRouter } from 'react-router-dom';
import Home from './pages/home/Home.jsx'
import About from './pages/about/About.jsx'
import Courses from './pages/courses/Courses.jsx'

export const router = createBrowserRouter([
    {path:"/", element:<Home /> },
    {path:"/about", element:<About /> },
    {path:"/courses", element:<Courses /> },
  ]);