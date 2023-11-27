import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-light">
              <div className="container">
                <div className="row mt-n2-6">
                  <div className="col-sm-6 col-lg-5 mt-2-6">
                    <a href="index-02.html#!" className="footer-logo">
                      <img
                        src="img/logos/logo.png"
                        className="mb-1-6"
                        alt="..."
                      />
                    </a>
                    <p>
                      Advertise your jobs to hundreds of thousands of monthly
                      customers and seek 15.8 million CV in our database.
                    </p>
                    <ul className="contact-list black">
                      <li className="d-flex">
                        <span className="fa fa-home pe-3" />
                        <a href="index-02.html#!">
                          66 Guild Street 512B, Great North Town.
                        </a>
                      </li>
                      <li className="d-flex">
                        <span className="fa fa-phone-alt pe-3" />
                        <a href="index-02.html#!">(+44) 123 456 789</a>
                      </li>
                      <li className="d-flex">
                        <span className="fa fa-envelope pe-3" />
                        <a href="index-02.html#!">info@example.com</a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-sm-6 col-lg-2 offset-lg-1 mt-2-6">
                    <div className="ps-sm-1-6 ps-lg-0">
                      <h3 className="h5 mb-1-6 mb-lg-1-9">Information</h3>
                      <ul className="footer-list-style2">
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
                    <h3 className="h5 mb-1-6 mb-lg-1-9">Candidates</h3>
                    <ul className="footer-list-style2">
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
                  <div className="col-sm-6 col-lg-2 mt-2-6">
                    <div className="ps-sm-1-6 ps-lg-0">
                      <h3 className="h5 mb-1-6 mb-lg-1-9">Employers</h3>
                      <ul className="footer-list-style2">
                        <li>
                          <a href="employer-packages.html">Job Packages</a>
                        </li>
                        <li>
                          <a href="employer-company-profile.html">
                            Company Profile
                          </a>
                        </li>
                        <li>
                          <a href="employer-manage-job.html">Manage Job</a>
                        </li>
                        <li>
                          <a href="employer-resume-alerts.html">
                            Resume Alerts
                          </a>
                        </li>
                        <li>
                          <a href="employer-post-job.html">Post a Job</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="footer-bar bg-white">
                <div className="container">
                  <div className="row">
                    <div className="col-md-12 text-center">
                      <p className="d-inline-block mb-0">
                        © <span className="current-year" /> Job Board Powered by
                        <a
                          href="https://www.chitrakootweb.com/"
                          target="_blank"
                          className="text-primary secondary-hover"
                        >
                          Chitrakoot Web
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </footer>
  )
}
