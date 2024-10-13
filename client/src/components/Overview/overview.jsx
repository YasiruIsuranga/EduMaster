import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Overview.css';
import { FaGraduationCap, FaChalkboardTeacher, FaUniversity, FaUserGraduate } from 'react-icons/fa';

function Overview() {
    return (
        <div className="overview-container container-fluid ">
            <div className="row text-center">
                <div className="col-lg-3 col-md-6 col-sm-12">
                    <FaGraduationCap size={40} className="icon mb-3" />
                    <h3 className="stat-number">250,000+</h3>
                    <p className="stat-text">Graduates</p>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12">
                    <FaChalkboardTeacher size={40} className="icon mb-3" />
                    <h3 className="stat-number">15,000+</h3>
                    <p className="stat-text">Expert Tutors</p>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12">
                    <FaUniversity size={40} className="icon mb-3" />
                    <h3 className="stat-number">500+</h3>
                    <p className="stat-text">Partner Institutions</p>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12">
                    <FaUserGraduate size={40} className="icon mb-3" />
                    <h3 className="stat-number">100+</h3>
                    <p className="stat-text">Certified Programs</p>
                </div>
            </div>
        </div>
    );
}

export default Overview;
