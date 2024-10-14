import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Home from './pages/home/Home.jsx'
import About from './pages/about/About.jsx'
import Courses from './pages/courses/Courses.jsx'
import SignIn from './pages/signin/StudentSignIn.jsx';
import AuthProvider from './contexts/auth-context/index.jsx'

function App() {
  return (
    <AuthProvider>
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/courses' element={<Courses />} />
        <Route path='/studentPortal' element={<SignIn />} />
    </Routes>
    </AuthProvider>
)
}

export default App