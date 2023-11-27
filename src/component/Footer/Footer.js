import React from 'react'

export default function Footer() {
  return (
    <footer className="pt-0">
        <div className="container border-bottom border-color-light-white py-2-5 py-md-6 mb-6 mb-md-8 mb-lg-10">
          <div className="row justify-content-center align-items-center mt-n1-9">
            <div className="col-xl-6 mt-1-9">
              <div className="d-sm-flex align-items-center">
                <div className="flex-shrink-0 mb-1-6 mb-sm-0">
                  <a href="index.html" className="footer-logo">
                    <img src="img/logos/logo-white.png" alt="..." />
                  </a>
                </div>
                <div className="flex-grow-1 border-sm-start border-color-light-white ms-sm-4 ps-sm-4 border-width-2">
                  <p className="mb-0 display-30 text-white opacity9 w-lg-95">
                    Create a free account to discover lots of Jobs &amp; Career
                    Opportunities around you!
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-6 mt-1-9">
              <div className="row">
                <div className="col-sm-4 mb-1-9 mb-sm-0">
                  <div className="d-flex align-items-center">
                    <div className="flex-shrink-0">
                      <img src="img/icons/icon-09.png" alt="..." />
                    </div>
                    <div className="flex-grow-1 ms-3">
                      <h3 className="h2 mb-1 countup font-weight-700 text-white">
                        1327
                      </h3>
                      <p className="mb-0 font-weight-600 text-white opacity9 display-30">
                        Job Posted
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-4 mb-1-9 mb-sm-0">
                  <div className="d-flex align-items-center">
                    <div className="flex-shrink-0">
                      <img src="img/icons/icon-10.png" alt="..." />
                    </div>
                    <div className="flex-grow-1 ms-4">
                      <h3 className="h2 mb-1 countup font-weight-700 text-white">
                        150
                      </h3>
                      <p className="mb-0 font-weight-600 text-white opacity9 display-30">
                        Job Filled
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="d-flex align-items-center">
                    <div className="flex-shrink-0">
                      <img src="img/icons/icon-11.png" alt="..." />
                    </div>
                    <div className="flex-grow-1 ms-4">
                      <h3 className="h2 mb-1 countup font-weight-700 text-white">
                        220
                      </h3>
                      <p className="mb-0 font-weight-600 text-white opacity9 display-30">
                        Companies
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row mt-n2-6">
            <div className="col-sm-6 col-lg-3 mt-2-6">
              <h3 className="h5 mb-1-6 mb-lg-1-9 text-white">Contact Us</h3>
              <p className="mb-1-6 text-white opacity9">
                Advertise your jobs to hundreds of thousands of monthly
                customers and seek 15.8 million CV in our database.
              </p>
              <ul className="contact-list">
                <li className="d-flex">
                  <span className="fa fa-home pe-3 text-white" />
                  <a href="job-grid-2-left-sidebar.html#!">
                    66 Guild Street 512B, Great North Town.
                  </a>
                </li>
                <li className="d-flex">
                  <span className="fa fa-phone-alt pe-3 text-white" />
                  <a href="job-grid-2-left-sidebar.html#!">(+44) 123 456 789</a>
                </li>
                <li className="d-flex">
                  <span className="fa fa-envelope pe-3 text-white" />
                  <a href="job-grid-2-left-sidebar.html#!">info@example.com</a>
                </li>
              </ul>
            </div>
            <div className="col-sm-6 col-lg-2 mt-2-6">
              <div className="ps-sm-1-9">
                <h3 className="h5 mb-1-6 mb-lg-1-9 text-white">Information</h3>
                <ul className="footer-list-style1">
                  <li>
                    <a href="aboutus.html">About us</a>
                  </li>
                  <li>
                    <a href="blog-grid.html">Blog</a>
                  </li>
                  <li>
                    <a href="how-it-works.html">Our Process</a>
                  </li>
                  <li>
                    <a href="pricing-plans.html">Our Pricing</a>
                  </li>
                  <li>
                    <a href="contact-us.html">Contact Us</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-sm-6 col-lg-2 mt-2-6">
              <div className="ps-lg-1-9">
                <h3 className="h5 mb-1-6 mb-lg-1-9 text-white">Candidates</h3>
                <ul className="footer-list-style1">
                  <li>
                    <a href="candidate-applied-job.html">Applied Job</a>
                  </li>
                  <li>
                    <a href="candidate-cv-manager.html">CV Manager</a>
                  </li>
                  <li>
                    <a href="candidate-shortlisted-jobs.html">
                      Shortlisted Jobs
                    </a>
                  </li>
                  <li>
                    <a href="candidate-job-alerts.html">Job Alerts</a>
                  </li>
                  <li>
                    <a href="candidate-dashboard.html">Dashboard</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-sm-6 col-lg-2 mt-2-6">
              <div className="ps-sm-1-9 ps-lg-2-2 ps-xl-2-5">
                <h3 className="h5 mb-1-6 mb-lg-1-9 text-white">Employers</h3>
                <ul className="footer-list-style1">
                  <li>
                    <a href="employer-packages.html">Job Packages</a>
                  </li>
                  <li>
                    <a href="employer-company-profile.html">Company Profile</a>
                  </li>
                  <li>
                    <a href="employer-manage-job.html">Manage Job</a>
                  </li>
                  <li>
                    <a href="employer-resume-alerts.html">Resume Alerts</a>
                  </li>
                  <li>
                    <a href="employer-post-job.html">Post a Job</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-sm-6 col-lg-3 mt-2-6">
              <div className="ps-lg-2-2 ps-xl-2-5">
                <h3 className="h5 mb-1-6 mb-lg-1-9 text-white">
                  Join Newsletter
                </h3>
                <p className="text-white mb-4">
                  Subscribe to get the latest jobs posted, candidates...
                </p>
                <form
                  className="quform newsletter-form"
                  action="https://jobboard.websitelayout.net/quform/newsletter-two.php"
                  method="post"
                  encType="multipart/form-data"
                  onclick
                >
                  <div className="quform-elements">
                    <div className="row">
                      {/* Begin Text input element */}
                      <div className="col-md-12">
                        <div className="quform-element">
                          <div className="quform-input">
                            <input
                              className="form-control"
                              id="email_address"
                              type="text"
                              name="email_address"
                              placeholder="Subscribe with us"
                            />
                          </div>
                        </div>
                      </div>
                      {/* End Text input element */}
                      {/* Begin Submit button */}
                      <div className="col-md-12">
                        <div className="quform-submit-inner">
                          <button
                            className="btn btn-white text-primary m-0"
                            type="submit"
                          >
                            <span>
                              <i className="fas fa-paper-plane text-primary" />
                            </span>
                          </button>
                        </div>
                        <div className="quform-loading-wrap text-start">
                          <span className="quform-loading" />
                        </div>
                      </div>
                      {/* End Submit button */}
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bar borders-top border-color-light-white">
          <div className="container">
            <div className="row">
              <div className="col-md-7 text-center text-md-start mt-3 mt-md-0 order-2 order-md-1">
                <p className="d-inline-block text-white mb-0">
                  © <span className="current-year" /> Job Board Powered by
                  <a
                    href="https://www.chitrakootweb.com/"
                    target="_blank"
                    className="text-primary white-hover"
                  >
                    Chitrakoot Web
                  </a>
                </p>
              </div>
              <div className="col-md-5 text-center text-md-end order-1 order-md-2">
                <p className="text-white d-inline-block mb-0 align-middle">
                  Follow Us :
                </p>
                <ul className="footer-social-style1">
                  <li>
                    <a href="job-grid-2-left-sidebar.html#!">
                      <i className="fab fa-facebook-f" />
                    </a>
                  </li>
                  <li>
                    <a href="job-grid-2-left-sidebar.html#!">
                      <i className="fab fa-twitter" />
                    </a>
                  </li>
                  <li>
                    <a href="job-grid-2-left-sidebar.html#!">
                      <i className="fab fa-youtube" />
                    </a>
                  </li>
                  <li>
                    <a href="job-grid-2-left-sidebar.html#!">
                      <i className="fab fa-linkedin-in" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
  )
}
