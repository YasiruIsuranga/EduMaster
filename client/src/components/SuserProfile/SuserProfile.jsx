import React from 'react';
import './SuserProfile.css';

function SuserProfile() {
  return (
    <div className="student-profile-container text-center">
      <img
        src="https://via.placeholder.com/150"
        alt="Student Profile"
        className="profile-image rounded-circle"
      />
      <h2 className="student-name mt-3">John Doe</h2>
      <p className="student-email">johndoe@example.com</p>
      <div className="student-stats mt-4">
        <p className="stat-item">Courses Enrolled: <strong>5</strong></p>
        <p className="stat-item">Completed: <strong>3</strong></p>
        <p className="stat-item">Pending: <strong>2</strong></p>
        <button className="btn btn-primary btn-block mt-4">Edit Profile</button>
      </div>
    </div>
  );
}

export default SuserProfile;
