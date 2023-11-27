import React from 'react'
import { NavLink } from 'react-router-dom/cjs/react-router-dom'

export default function Header() {
  return (
    <header className="header-style2">
    <div id="top-bar" className="bg-primary">
      <div className="container-fluid px-lg-1-6 px-xl-2-5 px-xxl-2-9">
        <div className="row">
          <div className="col-md-9">
            <div className="top-bar-info">
              <ul className="list-unstyled">
                <li className="border-right text-white">
                  <i className="fas fa-mobile-alt text-white" />
                  (+123) 456 7890
                </li>
                <li className="border-right text-white d-none d-md-inline-block">
                  <i className="fas fa-envelope text-white" />
                  addyour@emailhere
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-3 d-none d-md-block">
            <div>
              <ul className="top-social-icon mb-0">
                <li>
                  <a href="index-02.html#!">
                    <i className="fab fa-facebook-f" />
                  </a>
                </li>
                <li>
                  <a href="index-02.html#!">
                    <i className="fab fa-twitter" />
                  </a>
                </li>
                <li>
                  <a href="index-02.html#!">
                    <i className="fab fa-instagram" />
                  </a>
                </li>
                <li>
                  <a href="index-02.html#!">
                    <i className="fab fa-linkedin-in" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="navbar-default">
      {/* start top search */}
      <div className="top-search bg-secondary">
        <div className="container-fluid px-lg-1-6 px-xl-2-5 px-xxl-2-9">
          <form
            className="search-form"
            action="https://jobboard.websitelayout.net/search.html"
            method="GET"
            acceptCharset="utf-8"
          >
            <div className="input-group">
              <span className="input-group-addon cursor-pointer">
                <button
                  className="search-form_submit fas fa-search text-white"
                  type="submit"
                />
              </span>
              <input
                type="text"
                className="search-form_input form-control"
                name="s"
                autoComplete="off"
                placeholder="Type & hit enter..."
              />
              <span className="input-group-addon close-search mt-1">
                <i className="fas fa-times" />
              </span>
            </div>
          </form>
        </div>
      </div>
      {/* end top search */}
      <div className="container-fluid px-lg-1-6 px-xl-2-5 px-xxl-2-9">
        <div className="row align-items-center">
          <div className="col-12 col-lg-12">
            <div className="menu_area alt-font">
              <nav className="navbar navbar-expand-lg navbar-light p-0">
                <div className="navbar-header navbar-header-custom">
                  {/* start logo */}
                  <a href="index.html" className="navbar-brand logodefault">
                    <img id="logo" src="img/logos/logo.png" alt="logo" />
                  </a>
                  {/* end logo */}
                </div>
                <div className="navbar-toggler" />
                {/* menu area */}
                <ul
                  className="navbar-nav ms-auto"
                  id="nav"
                  style={{ display: "block" }}
                >
                  <li>
                  <NavLink to="/">Home</NavLink>
                    
                  </li>
                  <li>
                    <NavLink to="/listcource">Course</NavLink>
                  </li>

                  <li>
                    <NavLink to="/listtutor">Tutor</NavLink>
                  </li>
                  <li>
                    <NavLink to="/cart">Cart</NavLink>
                  </li>
                  <li>
                    <NavLink to="/login">Login</NavLink>
                  </li>
                </ul>
                {/* end menu area */}
                {/* start attribute navigation */}
                <div className="attr-nav align-items-lg-center ms-lg-auto">
                  <ul>
                    <li className="search">
                      <a href="index-02.html#!">
                        <i className="fas fa-search" />
                      </a>
                    </li>
                    <li className="d-none d-xl-inline-block">
                      <a
                        href="employer-post-job.html"
                        className="butn secondary text-white"
                      >
                       Profile
                      </a>
                    </li>
                  </ul>
                </div>
                {/* end attribute navigation */}
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
  )
}
