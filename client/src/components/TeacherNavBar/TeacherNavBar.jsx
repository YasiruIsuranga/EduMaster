import React from 'react'

function TeacherNavBar() {
  return (
    <div className="col-lg-3 col-md-4 col-sm-12 sidebar bg-light">
    <nav className="nav flex-column p-3 " >
      <h4 className="text-dark">Dashboard Menu</h4>
      <ul className="navbar-nav">
      <li className="nav-item mb-3">
          <a href="studentdashboard" className="nav-link text-dark">
            <i className="bi bi-book me-2"></i> Dashboard
          </a>
        </li>
        <li className="nav-item mb-3">
          <a href="courses" className="nav-link text-dark">
            <i className="bi bi-book me-2"></i> Courses
          </a>
        </li>
        <li className="nav-item mb-3">
          <a href="studentuserprofile" className="nav-link text-dark">
            <i className="bi bi-person me-2"></i> User Profile
          </a>
        </li>
        <li className="nav-item mb-3">
          <a href="#" className="nav-link text-dark">
            <i className="bi bi-envelope me-2"></i> Messages
          </a>
        </li>
        <li className="nav-item mb-3">
          <a href="#" className="nav-link text-dark">
            <i className="bi bi-gear me-2"></i> Settings
          </a>
        </li>
      </ul>
    </nav>
  </div>
  )
}

export default TeacherNavBar