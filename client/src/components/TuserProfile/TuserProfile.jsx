import React from 'react';
import './TuserProfile.css';

function TuserProfile() {
  return (
    <div className="student-profile-container text-center">
    {/*<img
      src="https://via.placeholder.com/150"
      alt="Student Profile"
      className="profile-image rounded-circle"
    />*/}
    <h2 className="student-name mt-3">John Doe</h2>
    <p className="student-email">johndoe@example.com</p>
    <div className="student-stats mt-4">
      <p className="stat-item">Courses Name: <strong>Subject name</strong></p>
      
      <button className="btn btn-primary btn-block mt-4">Edit Profile</button>
    </div>
  </div>
  );
}

export default TuserProfile;
