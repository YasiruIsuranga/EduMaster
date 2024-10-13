import React from 'react'

function TeacherNavBar() {
  return (
    <div className="col-lg-3 col-md-4 col-sm-12 sidebar bg-dark">
            <nav className="nav flex-column p-3 " >
              <h4 className="text-white">Dashboard Menu</h4>
              <ul className="navbar-nav">
              <li className="nav-item mb-3">
                  <a href="teacherdashboard" className="nav-link text-white">
                    <i className="bi bi-book me-2"></i> Dashboard
                  </a>
                </li>
                <li className="nav-item mb-3">
                  <a href="#" className="nav-link text-white">
                    <i className="bi bi-book me-2"></i> My Course
                  </a>
                </li>
                <li className="nav-item mb-3">
                  <a href="teacheruserprofile" className="nav-link text-white">
                    <i className="bi bi-person me-2"></i> User Profile
                  </a>
                </li>
                <li className="nav-item mb-3">
                  <a href="#" className="nav-link text-white">
                    <i className="bi bi-envelope me-2"></i> Messages
                  </a>
                </li>
                <li className="nav-item mb-3">
                  <a href="#" className="nav-link text-white">
                    <i className="bi bi-gear me-2"></i> Settings
                  </a>
                </li>
              </ul>
            </nav>
          </div>
  )
}

export default TeacherNavBar