import React from "react";
import { NavLink } from "react-router-dom";
export default function Sidebar() {
  return (
    <div className="col-lg-3 mb-2-2 mb-lg-0">
      <div className="dashboard-left-sidebar">
        <h3 className="bg-primary text-white collapse-sm m-0 h5 px-3 py-3 font-weight-600 d-block d-lg-none">
          Dashboard
        </h3>
        <ul className="dashboard-list dashboard-menu">
          <li className="active">
            <a href="employer-dashboard.html">
              <i className="ti-home" />
              Dashboard
            </a>
          </li>
          <li>
            <NavLink to="/admincategory">
              <i className="ti-user" />
              Category
            </NavLink>
          </li>
          <li>
            <NavLink to="/adminshool">
              <i className="ti-ruler-pencil" />
              School
            </NavLink>
          </li>
          <li>
            <NavLink to="/adminsourse">
              <i className="ti-briefcase" /> Course
            </NavLink>
          </li>
          <li>
          <NavLink to="/admintutor">
              <i className="ti-file" /> Tutor
          </NavLink>
          </li>
          <li>
            <a href="employer-shortlisted-resumes.html">
              <i className="ti-bookmark" />
              Shortlisted Resumes
            </a>
          </li>
          <li>
            <a href="employer-packages.html">
              <i className="ti-notepad" />
              Packages
            </a>
          </li>
          <li>
            <a href="employer-messages.html">
              <i className="ti-comment-alt" />
              Messages
            </a>
          </li>
          <li>
            <a href="employer-resume-alerts.html">
              <i className="ti-bell" />
              Resume Alerts
            </a>
          </li>
          <li>
            <a href="employer-change-password.html">
              <i className="ti-lock" />
              Change Password
            </a>
          </li>
          <li>
            <a href="index.html">
              <i className="ti-trash" />
              Delete Profile
            </a>
          </li>
          <li>
           <NavLink to="/login">
              <i className="ti-power-off" />
              Logout
              </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}
