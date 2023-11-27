import React from "react";
import Header from "../../template/UserTemplate/Header/Header";
import { NavLink } from "react-router-dom/cjs/react-router-dom";
export default function ListTutor() {
  return (
    <div className="main-wrapper">
      {/* HEADER
    ================================================== */}
      <Header />
      {/* PAGE TITLE
    ================================================== */}
      <section className="page-title-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10 text-center">
              <h1 className="h2 mb-4">Job Listing 1 - Right Sidebar</h1>
              <div className="row justify-content-center">
                <div className="col-lg-6">
                  <div className="page-title-list">
                    <ol className="breadcrumb d-inline-block mb-0">
                      <li className="breadcrumb-item d-inline-block">
                        <a href="job-listing-right-sidebar.html#!">Home</a>
                      </li>
                      <li className="breadcrumb-item d-inline-block active">
                        <a
                          href="job-listing-right-sidebar.html#!"
                          className="text-primary"
                        >
                          Job Listing 1 - Right Sidebar
                        </a>
                      </li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* JOB LISTING 1 - RIGHT SIDEBAR
    ================================================== */}
      <section>
        <div className="container">
          <div className="row mt-n6">
            {/* job-listing left */}
            <div className="col-lg-9 mt-6">
              <div className="pe-lg-1-6 pe-xl-1-9">
                <div className="d-md-flex justify-content-between align-items-center mb-2-2">
                  <div className="mb-4 mb-md-0">
                    <h4 className="mb-0 h5">
                      Showing 1–10 of{" "}
                      <span className="text-primary">28 Jobs</span>
                    </h4>
                  </div>
                  <form
                    action="job-listing-right-sidebar.html#!"
                    method="post"
                    encType="multipart/form-data"
                    onclick
                  >
                    <div className="quform-elements">
                      <div className="row align-items-center">
                        {/* Begin Select element */}
                        <div className="col-md-6 mb-4 mb-md-0">
                          <div className="quform-element">
                            <div className="quform-input">
                              <select
                                id="sortby"
                                className="form-control form-select border-radius-10"
                                name="sortby"
                              >
                                <option value>Sort By</option>
                                <option value="New Jobs">New Jobs</option>
                                <option value="Freelance">Freelance</option>
                                <option value="Full Time">Full Time</option>
                                <option value="Internship">Internship</option>
                                <option value="Part Time">Part Time</option>
                                <option value="Temporary">Temporary</option>
                              </select>
                            </div>
                          </div>
                        </div>
                        {/* End Select element */}
                        {/* Begin Select element */}
                        <div className="col-md-6">
                          <div className="quform-element">
                            <div className="quform-input">
                              <select
                                id="show"
                                className="form-control form-select border-radius-10"
                                name="show"
                              >
                                <option value>Show</option>
                                <option value="Show 10">Show 10</option>
                                <option value="Show 20">Show 20</option>
                                <option value="Show 30">Show 30</option>
                                <option value="Show 40">Show 40</option>
                                <option value="Show 50">Show 50</option>
                                <option value="Show 60">Show 60</option>
                              </select>
                            </div>
                          </div>
                        </div>
                        {/* End Select element */}
                      </div>
                    </div>
                  </form>
                </div>
                <div id="accordion2" className="accordion-style1">
                  <div
                    className="card card-style3 mb-4 bg-white"
                    id="headingOne"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="true"
                    role="navigation"
                  >
                    <div className="card-body">
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="d-flex align-items-center">
                          <img
                            src="img/content/job-01.jpg"
                            alt="..."
                            className="me-3 border-radius-10"
                          />
                          <h3 className="h5 mb-0">Assistant Manager</h3>
                        </div>
                        <div className="job-badge purple">Featured</div>
                      </div>
                    </div>
                    <div
                      id="collapseOne"
                      className="accordion-collapse collapse show"
                      aria-labelledby="headingOne"
                      data-bs-parent="#accordion2"
                    >
                      <div className="card-body mt-n1 pt-0">
                        <p className="mb-3">
                          Start taking a while for your job search to request
                          and agenda informational interviews with human beings
                          withinside the fields you’re interested by to find out
                          about their profession paths and get profession
                          advice.
                        </p>
                        <div className="d-flex justify-content-between align-items-center">
                          <div>
                            <span className="display-30 me-2">
                              <i className="fas fa-map-marker-alt pe-2" />
                              Canada
                            </span>
                            <span className="display-30 me-2">
                              <i className="far fa-clock pe-2" />
                              08 Hours Ago
                            </span>
                            <span className="display-30">
                              <i className="far fa-money-bill-alt pe-2" />
                              $25K
                            </span>
                          </div>
                        
                          <NavLink to="/tutor"className="job-favourite me-2">
                           <i className="far fa-heart" />
                        </NavLink>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="card card-style3 mb-4 bg-white"
                    id="headingTwo"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo"
                    aria-expanded="true"
                    role="navigation"
                  >
                    <div className="card-body">
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="d-flex align-items-center">
                          <img
                            src="img/content/job-02.jpg"
                            alt="..."
                            className="me-3 border-radius-10"
                          />
                          <h3 className="h5 mb-0">Sr. Project Manager</h3>
                        </div>
                        <div className="job-badge red">Hot</div>
                      </div>
                    </div>
                    <div
                      id="collapseTwo"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accordion2"
                    >
                      <div className="card-body mt-n1 pt-0">
                        <p className="mb-3">
                          Start taking a while for your job search to request
                          and agenda informational interviews with human beings
                          withinside the fields you’re interested by to find out
                          about their profession paths and get profession
                          advice.
                        </p>
                        <div className="d-flex justify-content-between align-items-center">
                          <div>
                            <span className="display-30 me-2">
                              <i className="fas fa-map-marker-alt pe-2" />
                              California
                            </span>
                            <span className="display-30 me-2">
                              <i className="far fa-clock pe-2" />
                              12 Hours Ago
                            </span>
                            <span className="display-30">
                              <i className="far fa-money-bill-alt pe-2" />
                              $15K
                            </span>
                          </div>
                          <a
                            className="job-favourite me-2"
                            href="job-listing-right-sidebar.html#!"
                          >
                            <i className="far fa-heart" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="card card-style3 mb-4 bg-white"
                    id="headingThree"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseThree"
                    aria-expanded="true"
                    role="navigation"
                  >
                    <div className="card-body">
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="d-flex align-items-center">
                          <img
                            src="img/content/job-03.jpg"
                            alt="..."
                            className="me-3 border-radius-10"
                          />
                          <h3 className="h5 mb-0">UI / UX Designer</h3>
                        </div>
                        <div className="job-badge purple">Featured</div>
                      </div>
                    </div>
                    <div
                      id="collapseThree"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingThree"
                      data-bs-parent="#accordion2"
                    >
                      <div className="card-body mt-n1 pt-0">
                        <p className="mb-3">
                          Start taking a while for your job search to request
                          and agenda informational interviews with human beings
                          withinside the fields you’re interested by to find out
                          about their profession paths and get profession
                          advice.
                        </p>
                        <div className="d-flex justify-content-between align-items-center">
                          <div>
                            <span className="display-30 me-2">
                              <i className="fas fa-map-marker-alt pe-2" />
                              New York
                            </span>
                            <span className="display-30 me-2">
                              <i className="far fa-clock pe-2" />
                              14 Hours Ago
                            </span>
                            <span className="display-30">
                              <i className="far fa-money-bill-alt pe-2" />
                              $18K
                            </span>
                          </div>
                          <a
                            className="job-favourite me-2"
                            href="job-listing-right-sidebar.html#!"
                          >
                            <i className="far fa-heart" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="card card-style3 mb-4 bg-white"
                    id="headingFour"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseFour"
                    aria-expanded="true"
                    role="navigation"
                  >
                    <div className="card-body">
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="d-flex align-items-center">
                          <img
                            src="img/content/job-04.jpg"
                            alt="..."
                            className="me-3 border-radius-10"
                          />
                          <h3 className="h5 mb-0">Software Engineer</h3>
                        </div>
                        <div className="job-badge purple">Featured</div>
                      </div>
                    </div>
                    <div
                      id="collapseFour"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingFour"
                      data-bs-parent="#accordion2"
                    >
                      <div className="card-body mt-n1 pt-0">
                        <p className="mb-3">
                          Start taking a while for your job search to request
                          and agenda informational interviews with human beings
                          withinside the fields you’re interested by to find out
                          about their profession paths and get profession
                          advice.
                        </p>
                        <div className="d-flex justify-content-between align-items-center">
                          <div>
                            <span className="display-30 me-2">
                              <i className="fas fa-map-marker-alt pe-2" />
                              London
                            </span>
                            <span className="display-30 me-2">
                              <i className="far fa-clock pe-2" />
                              18 Hours Ago
                            </span>
                            <span className="display-30">
                              <i className="far fa-money-bill-alt pe-2" />
                              $20K
                            </span>
                          </div>
                          <a
                            className="job-favourite me-2"
                            href="job-listing-right-sidebar.html#!"
                          >
                            <i className="far fa-heart" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="card card-style3 mb-4 bg-white"
                    id="headingFive"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseFive"
                    aria-expanded="true"
                    role="navigation"
                  >
                    <div className="card-body">
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="d-flex align-items-center">
                          <img
                            src="img/content/job-05.jpg"
                            alt="..."
                            className="me-3 border-radius-10"
                          />
                          <h3 className="h5 mb-0">Content Writing</h3>
                        </div>
                        <div className="job-badge red">Hot</div>
                      </div>
                    </div>
                    <div
                      id="collapseFive"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingFive"
                      data-bs-parent="#accordion2"
                    >
                      <div className="card-body mt-n1 pt-0">
                        <p className="mb-3">
                          Start taking a while for your job search to request
                          and agenda informational interviews with human beings
                          withinside the fields you’re interested by to find out
                          about their profession paths and get profession
                          advice.
                        </p>
                        <div className="d-flex justify-content-between align-items-center">
                          <div>
                            <span className="display-30 me-2">
                              <i className="fas fa-map-marker-alt pe-2" />
                              UK
                            </span>
                            <span className="display-30 me-2">
                              <i className="far fa-clock pe-2" />
                              20 Hours Ago
                            </span>
                            <span className="display-30">
                              <i className="far fa-money-bill-alt pe-2" />
                              $40K
                            </span>
                          </div>
                          <a
                            className="job-favourite me-2"
                            href="job-listing-right-sidebar.html#!S"
                          >
                            <i className="far fa-heart" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="card card-style3 mb-4 bg-white"
                    id="headingSix"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseSix"
                    aria-expanded="true"
                    role="navigation"
                  >
                    <div className="card-body">
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="d-flex align-items-center">
                          <img
                            src="img/content/job-06.jpg"
                            alt="..."
                            className="me-3 border-radius-10"
                          />
                          <h3 className="h5 mb-0">.Net Developer</h3>
                        </div>
                        <div className="job-badge red">Hot</div>
                      </div>
                    </div>
                    <div
                      id="collapseSix"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingSix"
                      data-bs-parent="#accordion2"
                    >
                      <div className="card-body mt-n1 pt-0">
                        <p className="mb-3">
                          Start taking a while for your job search to request
                          and agenda informational interviews with human beings
                          withinside the fields you’re interested by to find out
                          about their profession paths and get profession
                          advice.
                        </p>
                        <div className="d-flex justify-content-between align-items-center">
                          <div>
                            <span className="display-30 me-2">
                              <i className="fas fa-map-marker-alt pe-2" />
                              Japan
                            </span>
                            <span className="display-30 me-2">
                              <i className="far fa-clock pe-2" />
                              23 Hours Ago
                            </span>
                            <span className="display-30">
                              <i className="far fa-money-bill-alt pe-2" />
                              $90K
                            </span>
                          </div>
                          <a
                            className="job-favourite me-2"
                            href="job-listing-right-sidebar.html#!"
                          >
                            <i className="far fa-heart" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="card card-style3 mb-4 bg-white"
                    id="headingSeven"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseSeven"
                    aria-expanded="true"
                    role="navigation"
                  >
                    <div className="card-body">
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="d-flex align-items-center">
                          <img
                            src="img/content/job-07.jpg"
                            alt="..."
                            className="me-3 border-radius-10"
                          />
                          <h3 className="h5 mb-0">Digital Marketing</h3>
                        </div>
                        <div className="job-badge purple">Featured</div>
                      </div>
                    </div>
                    <div
                      id="collapseSeven"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingSeven"
                      data-bs-parent="#accordion2"
                    >
                      <div className="card-body mt-n1 pt-0">
                        <p className="mb-3">
                          Start taking a while for your job search to request
                          and agenda informational interviews with human beings
                          withinside the fields you’re interested by to find out
                          about their profession paths and get profession
                          advice.
                        </p>
                        <div className="d-flex justify-content-between align-items-center">
                          <div>
                            <span className="display-30 me-2">
                              <i className="fas fa-map-marker-alt pe-2" />
                              Afghanistan
                            </span>
                            <span className="display-30 me-2">
                              <i className="far fa-clock pe-2" />
                              24 Hours Ago
                            </span>
                            <span className="display-30">
                              <i className="far fa-money-bill-alt pe-2" />
                              $35K
                            </span>
                          </div>
                          <a
                            className="job-favourite me-2"
                            href="job-listing-right-sidebar.html#!"
                          >
                            <i className="far fa-heart" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="card card-style3 mb-4 bg-white"
                    id="headingEight"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseEight"
                    aria-expanded="true"
                    role="navigation"
                  >
                    <div className="card-body">
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="d-flex align-items-center">
                          <img
                            src="img/content/job-08.jpg"
                            alt="..."
                            className="me-3 border-radius-10"
                          />
                          <h3 className="h5 mb-0">Education &amp; Training</h3>
                        </div>
                        <div className="job-badge purple">Featured</div>
                      </div>
                    </div>
                    <div
                      id="collapseEight"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingEight"
                      data-bs-parent="#accordion2"
                    >
                      <div className="card-body mt-n1 pt-0">
                        <p className="mb-3">
                          Start taking a while for your job search to request
                          and agenda informational interviews with human beings
                          withinside the fields you’re interested by to find out
                          about their profession paths and get profession
                          advice.
                        </p>
                        <div className="d-flex justify-content-between align-items-center">
                          <div>
                            <span className="display-30 me-2">
                              <i className="fas fa-map-marker-alt pe-2" />
                              South Korea
                            </span>
                            <span className="display-30 me-2">
                              <i className="far fa-clock pe-2" />
                              25 Hours Ago
                            </span>
                            <span className="display-30">
                              <i className="far fa-money-bill-alt pe-2" />
                              $35000
                            </span>
                          </div>
                          <a
                            className="job-favourite me-2"
                            href="job-listing-right-sidebar.html#!"
                          >
                            <i className="far fa-heart" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="card card-style3 mb-4 bg-white"
                    id="headingNine"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseNine"
                    aria-expanded="true"
                    role="navigation"
                  >
                    <div className="card-body">
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="d-flex align-items-center">
                          <img
                            src="img/content/job-09.jpg"
                            alt="..."
                            className="me-3 border-radius-10"
                          />
                          <h3 className="h5 mb-0">Finance Manager</h3>
                        </div>
                        <div className="job-badge purple">Featured</div>
                      </div>
                    </div>
                    <div
                      id="collapseNine"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingNine"
                      data-bs-parent="#accordion2"
                    >
                      <div className="card-body mt-n1 pt-0">
                        <p className="mb-3">
                          Start taking a while for your job search to request
                          and agenda informational interviews with human beings
                          withinside the fields you’re interested by to find out
                          about their profession paths and get profession
                          advice.
                        </p>
                        <div className="d-flex justify-content-between align-items-center">
                          <div>
                            <span className="display-30 me-2">
                              <i className="fas fa-map-marker-alt pe-2" />
                              Canada
                            </span>
                            <span className="display-30 me-2">
                              <i className="far fa-clock pe-2" />
                              28 Hours Ago
                            </span>
                            <span className="display-30">
                              <i className="far fa-money-bill-alt pe-2" />
                              $35000
                            </span>
                          </div>
                          <a
                            className="job-favourite me-2"
                            href="job-listing-right-sidebar.html#!S"
                          >
                            <i className="far fa-heart" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="card card-style3 bg-white"
                    id="headingTen"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTen"
                    aria-expanded="true"
                    role="navigation"
                  >
                    <div className="card-body">
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="d-flex align-items-center">
                          <img
                            src="img/content/job-10.jpg"
                            alt="..."
                            className="me-3 border-radius-10"
                          />
                          <h3 className="h5 mb-0">PHP Developer</h3>
                        </div>
                        <div className="job-badge red">Hot</div>
                      </div>
                    </div>
                    <div
                      id="collapseTen"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTen"
                      data-bs-parent="#accordion2"
                    >
                      <div className="card-body mt-n1 pt-0">
                        <p className="mb-3">
                          Start taking a while for your job search to request
                          and agenda informational interviews with human beings
                          withinside the fields you’re interested by to find out
                          about their profession paths and get profession
                          advice.
                        </p>
                        <div className="d-flex justify-content-between align-items-center">
                          <div>
                            <span className="display-30 me-2">
                              <i className="fas fa-map-marker-alt pe-2" />
                              UK
                            </span>
                            <span className="display-30 me-2">
                              <i className="far fa-clock pe-2" />
                              29 Hours Ago
                            </span>
                            <span className="display-30">
                              <i className="far fa-money-bill-alt pe-2" />
                              $35000
                            </span>
                          </div>
                          <a
                            className="job-favourite me-2"
                            href="job-listing-right-sidebar.html#!S"
                          >
                            <i className="far fa-heart" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-12">
                    {/* start pager  */}
                    <div className="text-center mt-6">
                      <div className="pagination text-primary">
                        <ul>
                          <li>
                            <a href="job-listing-right-sidebar.html#!">
                              <i className="fas fa-long-arrow-alt-left me-2" />{" "}
                              Prev
                            </a>
                          </li>
                          <li className="active">
                            <a href="job-listing-right-sidebar.html#!">1</a>
                          </li>
                          <li>
                            <a href="job-listing-right-sidebar.html#!">2</a>
                          </li>
                          <li>
                            <a href="job-listing-right-sidebar.html#!">3</a>
                          </li>
                          <li>
                            <a href="job-listing-right-sidebar.html#!">
                              Next
                              <i className="fas fa-long-arrow-alt-right ms-2" />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    {/* end pager */}
                  </div>
                </div>
              </div>
            </div>
            {/* end job-listing left */}
            {/* job-listing right */}
            <div className="col-lg-3 mt-6">
              <div className="sidebar">
                <div className="sidebar-title">Search Keywords</div>
                <div className="widget search">
                  <form
                    action="job-listing-right-sidebar.html#!"
                    className="search-bar"
                  >
                    <div className="quform-element form-group">
                      <label htmlFor="search">Search By Keywords</label>
                      <div className="quform-input">
                        <input
                          className="form-control border-radius-10"
                          id="search"
                          type="text"
                          name="search"
                          placeholder="search keywords"
                        />
                      </div>
                    </div>
                    <div className="quform-element form-group">
                      <label htmlFor="pincode">Pincode</label>
                      <div className="quform-input">
                        <input
                          className="form-control border-radius-10"
                          id="pincode"
                          type="text"
                          name="pincode"
                          placeholder="enter postcode"
                        />
                      </div>
                    </div>
                    <div className="quform-element">
                      <label htmlFor="category">Category</label>
                      <div className="quform-input">
                        <select
                          id="category"
                          className="form-control form-select border-radius-10"
                          name="category"
                        >
                          <option value>Choose Category</option>
                          <option value="Accounting">Accounting</option>
                          <option value="Marketing">Marketing</option>
                          <option value="Design">Design</option>
                          <option value="Development">Development</option>
                          <option value="Engineering">Engineering</option>
                          <option value="Health & Care">
                            Health &amp; Care
                          </option>
                        </select>
                      </div>
                    </div>
                  </form>
                </div>
                <div className="sidebar-title">Salary Range</div>
                <div className="widget">
                  <div className="price-range" />
                </div>
                <div className="sidebar-title">Job Type</div>
                <div className="widget">
                  <div className="form-check mb-2">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      defaultValue
                      id="full-time"
                    />
                    <label
                      className="form-check-label mb-0"
                      htmlFor="full-time"
                    >
                      Full Time
                    </label>
                  </div>
                  <div className="form-check mb-2">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      defaultValue
                      id="part-time"
                    />
                    <label
                      className="form-check-label mb-0"
                      htmlFor="part-time"
                    >
                      Part Time
                    </label>
                  </div>
                  <div className="form-check mb-2">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      defaultValue
                      id="freelance"
                    />
                    <label
                      className="form-check-label mb-0"
                      htmlFor="freelance"
                    >
                      Freelance
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      defaultValue
                      id="temporary"
                    />
                    <label
                      className="form-check-label mb-0"
                      htmlFor="temporary"
                    >
                      Temporary
                    </label>
                  </div>
                </div>
                <div className="sidebar-title">Experience</div>
                <div className="widget">
                  <div className="form-check mb-2">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      defaultValue
                      id="fresher"
                    />
                    <label className="form-check-label mb-0" htmlFor="fresher">
                      Fresher
                    </label>
                  </div>
                  <div className="form-check mb-2">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      defaultValue
                      id="oneyear"
                    />
                    <label className="form-check-label mb-0" htmlFor="oneyear">
                      Less than 1 year
                    </label>
                  </div>
                  <div className="form-check mb-2">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      defaultValue
                      id="twoyear"
                    />
                    <label className="form-check-label mb-0" htmlFor="twoyear">
                      2 Year
                    </label>
                  </div>
                  <div className="form-check mb-2">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      defaultValue
                      id="threeyear"
                    />
                    <label
                      className="form-check-label mb-0"
                      htmlFor="threeyear"
                    >
                      3 Year
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      defaultValue
                      id="fouryear"
                    />
                    <label className="form-check-label mb-0" htmlFor="fouryear">
                      4 Year
                    </label>
                  </div>
                </div>
                <div className="sidebar-title">Date Posted</div>
                <div className="widget">
                  <div className="form-check mb-2">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      defaultValue
                      id="lasthour"
                    />
                    <label className="form-check-label mb-0" htmlFor="lasthour">
                      Last hour
                    </label>
                  </div>
                  <div className="form-check mb-2">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      defaultValue
                      id="lasttwentyhour"
                    />
                    <label
                      className="form-check-label mb-0"
                      htmlFor="lasttwentyhour"
                    >
                      Last 24 hour
                    </label>
                  </div>
                  <div className="form-check mb-2">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      defaultValue
                      id="lastsevendays"
                    />
                    <label
                      className="form-check-label mb-0"
                      htmlFor="lastsevendays"
                    >
                      Last 7 days
                    </label>
                  </div>
                  <div className="form-check mb-2">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      defaultValue
                      id="lastfourteendays"
                    />
                    <label
                      className="form-check-label mb-0"
                      htmlFor="lastfourteendays"
                    >
                      Last 14 Days
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      defaultValue
                      id="lastthirtydays"
                    />
                    <label
                      className="form-check-label mb-0"
                      htmlFor="lastthirtydays"
                    >
                      Last 30 Days
                    </label>
                  </div>
                </div>
                <div className="sidebar-title">Qualification</div>
                <div className="widget">
                  <div className="form-check mb-2">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      defaultValue
                      id="matriculation"
                    />
                    <label
                      className="form-check-label mb-0"
                      htmlFor="matriculation"
                    >
                      Matriculation
                    </label>
                  </div>
                  <div className="form-check mb-2">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      defaultValue
                      id="intermediate"
                    />
                    <label
                      className="form-check-label mb-0"
                      htmlFor="intermediate"
                    >
                      Intermediate
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      defaultValue
                      id="graduate"
                    />
                    <label className="form-check-label mb-0" htmlFor="graduate">
                      Graduate
                    </label>
                  </div>
                </div>
              </div>
            </div>
            {/* end job-listing right */}
          </div>
        </div>
      </section>
      {/* FOOTER
    ================================================== */}
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
                  <a href="job-listing-right-sidebar.html#!">
                    66 Guild Street 512B, Great North Town.
                  </a>
                </li>
                <li className="d-flex">
                  <span className="fa fa-phone-alt pe-3 text-white" />
                  <a href="job-listing-right-sidebar.html#!">
                    (+44) 123 456 789
                  </a>
                </li>
                <li className="d-flex">
                  <span className="fa fa-envelope pe-3 text-white" />
                  <a href="job-listing-right-sidebar.html#!">
                    info@example.com
                  </a>
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
                    <a href="job-listing-right-sidebar.html#!">
                      <i className="fab fa-facebook-f" />
                    </a>
                  </li>
                  <li>
                    <a href="job-listing-right-sidebar.html#!">
                      <i className="fab fa-twitter" />
                    </a>
                  </li>
                  <li>
                    <a href="job-listing-right-sidebar.html#!">
                      <i className="fab fa-youtube" />
                    </a>
                  </li>
                  <li>
                    <a href="job-listing-right-sidebar.html#!">
                      <i className="fab fa-linkedin-in" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
