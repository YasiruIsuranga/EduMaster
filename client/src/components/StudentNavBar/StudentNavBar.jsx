import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css'; // Import Bootstrap Icons

function StudentNavBar() {
  return (
    <div className="col-lg-3 col-md-4 col-sm-12 sidebar bg-primary text-white border">
      <nav className="nav flex-column p-3">
        <h4 className="text-white">Dashboard Menu</h4>
        <ul className="navbar-nav">
          <li className="nav-item mb-3">
            <a href="/studentdashboard" className="nav-link text-white">
              <i className="bi bi-house-door-fill me-2"></i> Dashboard
            </a>
          </li>
          <li className="nav-item mb-3">
            <a href="/courses" className="nav-link text-white">
              <i className="bi bi-journal-text me-2"></i> Courses
            </a>
          </li>
          <li className="nav-item mb-3">
            <a href="/programs" className="nav-link text-white">
              <i className="bi bi-diagram-3-fill me-2"></i> Programs
            </a>
          </li>
          <li className="nav-item mb-3">
            <a href="/studentuserprofile" className="nav-link text-white">
              <i className="bi bi-person-fill me-2"></i> User Profile
            </a>
          </li>
          <li className="nav-item mb-3">
            <a href="#" className="nav-link text-white">
              <i className="bi bi-envelope-fill me-2"></i> Messages
            </a>
          </li>
          <li className="nav-item mb-3">
            <a href="#" className="nav-link text-white">
              <i className="bi bi-gear-fill me-2"></i> Settings
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default StudentNavBar;
