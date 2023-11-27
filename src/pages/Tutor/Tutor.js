import React from "react";
import Header from "../../template/UserTemplate/Header/Header";
export default function Tutor() {
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
              <h1 className="h2 mb-4">Job Details 2</h1>
              <div className="row justify-content-center">
                <div className="col-lg-6">
                  <div className="page-title-list">
                    <ol className="breadcrumb d-inline-block mb-0">
                      <li className="breadcrumb-item d-inline-block">
                        <a href="job-details-2.html#!">Home</a>
                      </li>
                      <li className="breadcrumb-item d-inline-block active">
                        <a href="job-details-2.html#!" className="text-primary">
                          Job Details 2
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
      {/* JOB DETAILS 2
    ================================================== */}
      <section>
        <div className="container">
          <div className="row mb-2-5 mb-lg-2-9">
            <div className="col-lg-12">
              <div className="p-1-6 p-md-1-9 border border-color-extra-light-gray border-radius-10">
                <div className="row align-items-center">
                  <div className="col-lg-9 mb-4 mb-lg-0">
                    <div className="d-lg-flex align-items-center text-center text-lg-start">
                      <div className="flex-shrink-0 mb-4 mb-lg-0">
                        <img
                          src="img/content/job-detail-01.jpg"
                          alt="..."
                          className="border-radius-10"
                        />
                      </div>
                      <div className="flex-grow-1 ms-lg-4">
                        <div className="display-30 text-warning mb-3">
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <span className="px-2 py-1 bg-primary text-white ms-2 display-31 border-radius-10">
                            5.0
                          </span>
                        </div>
                        <h4 className="mb-3">
                          Assistant Manager
                          <span className="job-detail-info">
                            <i className="ti-briefcase text-primary pe-2" />
                            Full Time
                          </span>
                        </h4>
                        <span className="me-2">
                          <i className="ti-briefcase pe-2 text-secondary" />
                          Finance Agency
                        </span>
                        <span className="me-2">
                          <i className="ti-location-pin pe-2 text-secondary" />
                          Canada
                        </span>
                        <span className="me-2">
                          <i className="ti-time pe-2 text-secondary" />5 Year
                        </span>
                        <span>
                          <i className="far fa-money-bill-alt pe-2 text-secondary" />
                          $25K
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3">
                    <div className="row">
                      <div className="text-center mb-3">
                        Application Ends: <strong>Nov 28, 2021</strong>
                      </div>
                      <div className="col-12">
                        <a
                          href="job-details-2.html#!"
                          className="butn mb-3 w-100 text-center"
                        >
                          Apply For Job
                        </a>
                      </div>
                      <div className="col-12">
                        <a
                          href="job-details-2.html#!"
                          className="butn w-100 text-center"
                        >
                          Shortlist
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row mb-2-2 mb-lg-2-5 pb-2-2 pb-lg-2-5 border-bottom border-color-extra-light-gray">
            <div className="col-lg-8 mb-2-2 mb-lg-0">
              <div className="pe-lg-1-6 pe-xl-1-9">
                <div className="row">
                  <div className="col-lg-12 mb-2-2">
                    <div className="p-1-6 border border-color-extra-light-gray border-radius-10">
                      <h4 className="mb-3">Job Details :</h4>
                      <div className="row mt-n3">
                        <div className="col-sm-6 col-md-4 mt-3">
                          <div className="border border-color-extra-light-gray py-3 px-4 border-radius-10">
                            <h5 className="display-29 display-xl-28">
                              Offered Salary
                            </h5>
                            <span className="font-weight-500 text-primary display-30">
                              $25K
                            </span>
                          </div>
                        </div>
                        <div className="col-sm-6 col-md-4 mt-3">
                          <div className="border border-color-extra-light-gray py-3 px-4 border-radius-10">
                            <h5 className="display-29 display-xl-28">
                              Career Level
                            </h5>
                            <span className="font-weight-500 text-primary display-30">
                              Executive
                            </span>
                          </div>
                        </div>
                        <div className="col-sm-6 col-md-4 mt-3">
                          <div className="border border-color-extra-light-gray py-3 px-4 border-radius-10">
                            <h5 className="display-29 display-xl-28">
                              Experience
                            </h5>
                            <span className="font-weight-500 text-primary display-30">
                              5 Years
                            </span>
                          </div>
                        </div>
                        <div className="col-sm-6 col-md-4 mt-3">
                          <div className="border border-color-extra-light-gray py-3 px-4 border-radius-10">
                            <h5 className="display-29 display-xl-28">Gender</h5>
                            <span className="font-weight-500 text-primary display-30">
                              Male
                            </span>
                          </div>
                        </div>
                        <div className="col-sm-6 col-md-4 mt-3">
                          <div className="border border-color-extra-light-gray py-3 px-4 border-radius-10">
                            <h5 className="display-29 display-xl-28">
                              Industry
                            </h5>
                            <span className="font-weight-500 text-primary display-30">
                              Finance Agency
                            </span>
                          </div>
                        </div>
                        <div className="col-sm-6 col-md-4 mt-3">
                          <div className="border border-color-extra-light-gray py-3 px-4 border-radius-10">
                            <h5 className="display-29 display-xl-28">
                              Qualification
                            </h5>
                            <span className="font-weight-500 text-primary display-30">
                              Master
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12 mb-2-2">
                    <div className="p-1-6 border border-color-extra-light-gray border-radius-10">
                      <h4 className="mb-3">Job Description :</h4>
                      <p>
                        A good job description begins offevolved with an
                        eye-catching precis of the location and its position
                        inside your organisation. Your precis must offer an
                        outline of your organisation and expectancies for the
                        location. Outline the sorts of sports and duties
                        required for the job so job seekers can decide if
                        they're qualified, or if the job is appropriate for
                        them.
                      </p>
                      <p className="mb-0">
                        If you like to work in a fast paced retail surroundings
                        and preference an possibility to earn appealing bonuses
                        in your difficult paintings, we need to pay attention
                        from you. Our shoe shop franchise wishes an articulate
                        and informed person to take over the Assistant Manager
                        role. You’ll set schedules for all income associates,
                        assist the GM increase and control promotions, make
                        contributions to the high-power surroundings withinside
                        the shop, order products and take care of all budgetary
                        elements of walking the business. We sell from inside
                        each time possible, so capability profession tracks
                        should encompass GM, DM or advertising prospects.
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-12 mb-2-2">
                    <div className="p-1-6 border border-color-extra-light-gray border-radius-10">
                      <h4 className="mb-3">Key Responsibilities :</h4>
                      <ul className="list-unstyled mb-0">
                        <li className="mb-3 d-flex align-items-baseline">
                          <i className="fas fa-check text-primary me-2 vertical-align-middle" />
                          Hire and teach sales associates to work at the ground
                          in addition to in shipping.
                        </li>
                        <li className="mb-3 d-flex align-items-baseline">
                          <i className="fas fa-check text-primary me-2 vertical-align-middle" />
                          Allow your information of rising and steady traits to
                          tell buying and stock selections and solutions.
                        </li>
                        <li className="mb-3 d-flex align-items-baseline">
                          <i className="fas fa-check text-primary me-2 vertical-align-middle" />
                          Continually advance your product understanding and
                          that of different employees.
                        </li>
                        <li className="mb-3 d-flex align-items-baseline">
                          <i className="fas fa-check text-primary me-2 vertical-align-middle" />
                          Maintain correct purchaser facts for loyalty program.
                        </li>
                        <li className="mb-3 d-flex align-items-baseline">
                          <i className="fas fa-check text-primary me-2 vertical-align-middle" />
                          Manage and examine sales and cost reports.
                        </li>
                        <li className="d-flex align-items-baseline">
                          <i className="fas fa-check text-primary me-2 vertical-align-middle" />
                          Become liaison with company workplace and use contacts
                          to sell the commercial enterprise and align with
                          emblem values.
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-lg-12 mb-2-2">
                    <div className="p-1-6 border border-color-extra-light-gray border-radius-10">
                      <h5 className="mb-3">Skill &amp; Experience :</h5>
                      <ul className="list-unstyled mb-0">
                        <li className="mb-3 d-flex align-items-baseline">
                          <i className="fas fa-check text-primary me-2 vertical-align-middle" />
                          2+ years retail revel in in a management capacity.
                        </li>
                        <li className="mb-3 d-flex align-items-baseline">
                          <i className="fas fa-check text-primary me-2 vertical-align-middle" />
                          Bachelor’s diploma or equal experience.
                        </li>
                        <li className="mb-3 d-flex align-items-baseline">
                          <i className="fas fa-check text-primary me-2 vertical-align-middle" />
                          Ability to efficiently teach and inspire income
                          associates.
                        </li>
                        <li className="mb-3 d-flex align-items-baseline">
                          <i className="fas fa-check text-primary me-2 vertical-align-middle" />
                          Willingness to expose management and steerage from the
                          floor.
                        </li>
                        <li className="d-flex align-items-baseline">
                          <i className="fas fa-check text-primary me-2 vertical-align-middle" />
                          Familiarity with style tendencies and styles.
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="p-1-6 border border-color-extra-light-gray border-radius-10">
                      <h5 className="mb-4">Share This Post :</h5>
                      <ul className="social-icons-list">
                        <li>
                          <a className="facebook" href="job-details-2.html#!">
                            <i className="fab fa-facebook-f me-2" />
                            Facebook
                          </a>
                        </li>
                        <li>
                          <a className="twitter" href="job-details-2.html#!">
                            <i className="fab fa-twitter me-2" />
                            Twitter
                          </a>
                        </li>
                        <li>
                          <a className="youtube" href="job-details-2.html#!">
                            <i className="fab fa-youtube me-2" />
                            Youtube
                          </a>
                        </li>
                        <li>
                          <a className="linkedin" href="job-details-2.html#!">
                            <i className="fab fa-linkedin-in me-2" />
                            Linkedin
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="job-details-sidebar">
                <div className="widget">
                  <div className="card border border-color-extra-light-gray border-radius-10">
                    <div className="card-body p-4">
                      <div className="d-flex align-items-center mb-1-9">
                        <div className="flex-shrink-0">
                          <img
                            src="img/content/job-01.jpg"
                            alt="..."
                            className="border-radius-10"
                          />
                        </div>
                        <div className="flex-grow-1 ms-3">
                          <h5 className="mb-1">Security Ltd.</h5>
                          <a
                            href="job-details-2.html#!"
                            className="font-weight-600"
                          >
                            View Company Profile
                          </a>
                        </div>
                      </div>
                      <ul className="list-style5">
                        <li>
                          <span>Industry</span> Finance Agency
                        </li>
                        <li>
                          <span>Size</span> 450
                        </li>
                        <li>
                          <span>Founded In</span> 2017
                        </li>
                        <li>
                          <span>Phone</span> (+44) 123 456 789
                        </li>
                        <li>
                          <span>Email</span> info@example.com
                        </li>
                        <li>
                          <span>Website</span> www.info.com
                        </li>
                        <li>
                          <span>Address</span> 66 Guild Street 512B, Great North
                          Town
                        </li>
                        <li>
                          <span>Follow</span>
                          <div className="social-links">
                            <a href="job-details-2.html#!">
                              <i className="fab fa-facebook-f" />
                            </a>
                            <a href="job-details-2.html#!">
                              <i className="fab fa-twitter" />
                            </a>
                            <a href="job-details-2.html#!">
                              <i className="fab fa-instagram" />
                            </a>
                            <a href="job-details-2.html#!">
                              <i className="fab fa-linkedin-in" />
                            </a>
                          </div>
                        </li>
                      </ul>
                      <a
                        href="job-details-2.html#!"
                        className="butn w-100 text-center mt-1-9"
                      >
                        www.security.com
                      </a>
                    </div>
                  </div>
                </div>
                <div className="widget">
                  <div className="card border border-color-extra-light-gray border-radius-10">
                    <div className="card-body p-4">
                      <h4>Location</h4>
                      <iframe
                        className="map-h250"
                        id="gmap_canvas"
                        src="https://maps.google.com/maps?q=london&t=&z=13&ie=UTF8&iwloc=&output=embed"
                      />
                    </div>
                  </div>
                </div>
                <div className="widget">
                  <div className="card border border-color-extra-light-gray border-radius-10">
                    <div className="card-body p-4">
                      <h4>Quick Contacts</h4>
                      <form
                        className="contact quform"
                        action="https://jobboard.websitelayout.net/quform/contact.php"
                        method="post"
                        encType="multipart/form-data"
                        onclick
                      >
                        <div className="quform-elements">
                          <div className="row">
                            {/* Begin Text input element */}
                            <div className="col-md-6">
                              <div className="quform-element form-group">
                                <label htmlFor="name">
                                  Your Name{" "}
                                  <span className="quform-required">*</span>
                                </label>
                                <div className="quform-input">
                                  <input
                                    className="form-control border-radius-10"
                                    id="name"
                                    type="text"
                                    name="name"
                                    placeholder="Your name here"
                                  />
                                </div>
                              </div>
                            </div>
                            {/* End Text input element */}
                            {/* Begin Text input element */}
                            <div className="col-md-6">
                              <div className="quform-element form-group">
                                <label htmlFor="email">
                                  Your Email{" "}
                                  <span className="quform-required">*</span>
                                </label>
                                <div className="quform-input">
                                  <input
                                    className="form-control border-radius-10"
                                    id="email"
                                    type="text"
                                    name="email"
                                    placeholder="Your email here"
                                  />
                                </div>
                              </div>
                            </div>
                            {/* End Text input element */}
                            {/* Begin Text input element */}
                            <div className="col-md-6">
                              <div className="quform-element form-group">
                                <label htmlFor="subject">
                                  Your Subject{" "}
                                  <span className="quform-required">*</span>
                                </label>
                                <div className="quform-input">
                                  <input
                                    className="form-control border-radius-10"
                                    id="subject"
                                    type="text"
                                    name="subject"
                                    placeholder="Your subject here"
                                  />
                                </div>
                              </div>
                            </div>
                            {/* End Text input element */}
                            {/* Begin Text input element */}
                            <div className="col-md-6">
                              <div className="quform-element form-group">
                                <label htmlFor="phone">Contact Number</label>
                                <div className="quform-input">
                                  <input
                                    className="form-control border-radius-10"
                                    id="phone"
                                    type="text"
                                    name="phone"
                                    placeholder="Your phone here"
                                  />
                                </div>
                              </div>
                            </div>
                            {/* End Text input element */}
                            {/* Begin Textarea element */}
                            <div className="col-md-12">
                              <div className="quform-element form-group">
                                <label htmlFor="message">
                                  Message{" "}
                                  <span className="quform-required">*</span>
                                </label>
                                <div className="quform-input">
                                  <textarea
                                    className="form-control border-radius-10"
                                    id="message"
                                    name="message"
                                    rows={3}
                                    placeholder="Tell us a few words"
                                    defaultValue={""}
                                  />
                                </div>
                              </div>
                            </div>
                            {/* End Textarea element */}
                            {/* Begin Captcha element */}
                            <div className="col-md-12">
                              <div className="quform-element">
                                <div className="form-group">
                                  <div className="quform-input">
                                    <input
                                      className="form-control border-radius-10"
                                      id="type_the_word"
                                      type="text"
                                      name="type_the_word"
                                      placeholder="Type the below word"
                                    />
                                  </div>
                                </div>
                                <div className="form-group">
                                  <div className="quform-captcha">
                                    <div className="quform-captcha-inner">
                                      <img
                                        src="quform/images/captcha/courier-new-light.png"
                                        alt="..."
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            {/* End Captcha element */}
                            {/* Begin Submit button */}
                            <div className="col-md-12">
                              <div className="quform-submit-inner">
                                <button className="butn border-0" type="submit">
                                  <span>Send Message</span>
                                </button>
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
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <h4 className="mb-4">Related Jobs :</h4>
              <div className="recent-jobs owl-carousel owl-theme">
                <div className="card card-style10">
                  <div className="card-body">
                    <span className="popular-jobs-status">Full Time</span>
                    <a className="favourite" href="job-details-2.html#">
                      <i className="far fa-heart" />
                    </a>
                    <div className="popular-jobs-box">
                      <img
                        className="mb-4 border-radius-10"
                        src="img/content/job-02.jpg"
                        alt="..."
                      />
                      <h4 className="h5">
                        <a href="job-details.html">Creative Tech Ltd.</a>
                      </h4>
                      <p className="text-muted font-weight-500">
                        Sr. Project Manager
                      </p>
                    </div>
                    <span className="border-end border-color-extra-light-gray pe-2 me-2">
                      <i className="fas fa-map-marker-alt pe-2 text-secondary" />
                      California
                    </span>
                    <span className="border-end border-color-extra-light-gray pe-2 me-2">
                      <i className="far fa-clock pe-2 text-secondary" />
                      $15K
                    </span>
                    <span>
                      <i className="ti-briefcase pe-2 text-secondary" />3 year
                    </span>
                  </div>
                  <a href="job-details.html" className="butn butn-apply">
                    Apply Now
                  </a>
                </div>
                <div className="card card-style10">
                  <div className="card-body">
                    <span className="popular-jobs-status">Part Time</span>
                    <a className="favourite" href="job-details-2.html#">
                      <i className="far fa-heart" />
                    </a>
                    <div className="popular-jobs-box">
                      <img
                        className="mb-4 border-radius-10"
                        src="img/content/job-03.jpg"
                        alt="..."
                      />
                      <h4 className="h5">
                        <a href="job-details.html">Bedford Ltd.</a>
                      </h4>
                      <p className="text-muted font-weight-500">
                        UI / UX Designer
                      </p>
                    </div>
                    <span className="border-end border-color-extra-light-gray pe-2 me-2">
                      <i className="fas fa-map-marker-alt pe-2 text-secondary" />
                      New York
                    </span>
                    <span className="border-end border-color-extra-light-gray pe-2 me-2">
                      <i className="far fa-clock pe-2 text-secondary" />
                      $18K
                    </span>
                    <span>
                      <i className="ti-briefcase pe-2 text-secondary" />8 year
                    </span>
                  </div>
                  <a href="job-details.html" className="butn butn-apply">
                    Apply Now
                  </a>
                </div>
                <div className="card card-style10">
                  <div className="card-body">
                    <span className="popular-jobs-status">Full Time</span>
                    <a className="favourite" href="job-details-2.html#">
                      <i className="far fa-heart" />
                    </a>
                    <div className="popular-jobs-box">
                      <img
                        className="mb-4 border-radius-10"
                        src="img/content/job-04.jpg"
                        alt="..."
                      />
                      <h4 className="h5">
                        <a href="job-details.html">Saspol Limited</a>
                      </h4>
                      <p className="text-muted font-weight-500">
                        Software Engineer
                      </p>
                    </div>
                    <span className="border-end border-color-extra-light-gray pe-2 me-2">
                      <i className="fas fa-map-marker-alt pe-2 text-secondary" />
                      London
                    </span>
                    <span className="border-end border-color-extra-light-gray pe-2 me-2">
                      <i className="far fa-clock pe-2 text-secondary" />
                      $20K
                    </span>
                    <span>
                      <i className="ti-briefcase pe-2 text-secondary" />2 year
                    </span>
                  </div>
                  <a href="job-details.html" className="butn butn-apply">
                    Apply Now
                  </a>
                </div>
                <div className="card card-style10">
                  <div className="card-body">
                    <span className="popular-jobs-status">Part Time</span>
                    <a className="favourite" href="job-details-2.html#">
                      <i className="far fa-heart" />
                    </a>
                    <div className="popular-jobs-box">
                      <img
                        className="mb-4 border-radius-10"
                        src="img/content/job-05.jpg"
                        alt="..."
                      />
                      <h4 className="h5">
                        <a href="job-details.html">Depan insider ltd</a>
                      </h4>
                      <p className="text-muted font-weight-500">
                        Content Writing
                      </p>
                    </div>
                    <span className="border-end border-color-extra-light-gray pe-2 me-2">
                      <i className="fas fa-map-marker-alt pe-2 text-secondary" />
                      UK
                    </span>
                    <span className="border-end border-color-extra-light-gray pe-2 me-2">
                      <i className="far fa-clock pe-2 text-secondary" />
                      $40K
                    </span>
                    <span>
                      <i className="ti-briefcase pe-2 text-secondary" />7 year
                    </span>
                  </div>
                  <a href="job-details.html" className="butn butn-apply">
                    Apply Now
                  </a>
                </div>
                <div className="card card-style10">
                  <div className="card-body">
                    <span className="popular-jobs-status">Full Time</span>
                    <a className="favourite" href="job-details-2.html#">
                      <i className="far fa-heart" />
                    </a>
                    <div className="popular-jobs-box">
                      <img
                        className="mb-4 border-radius-10"
                        src="img/content/job-06.jpg"
                        alt="..."
                      />
                      <h4 className="h5">
                        <a href="job-details.html">Oryx International</a>
                      </h4>
                      <p className="text-muted font-weight-500">
                        .Net Developer
                      </p>
                    </div>
                    <span className="border-end border-color-extra-light-gray pe-2 me-2">
                      <i className="fas fa-map-marker-alt pe-2 text-secondary" />
                      Japan
                    </span>
                    <span className="border-end border-color-extra-light-gray pe-2 me-2">
                      <i className="far fa-clock pe-2 text-secondary" />
                      $90K
                    </span>
                    <span>
                      <i className="ti-briefcase pe-2 text-secondary" />1 year
                    </span>
                  </div>
                  <a href="job-details.html" className="butn butn-apply">
                    Apply Now
                  </a>
                </div>
                <div className="card card-style10">
                  <div className="card-body">
                    <span className="popular-jobs-status">Full Time</span>
                    <a className="favourite" href="job-details-2.html#!">
                      <i className="far fa-heart" />
                    </a>
                    <div className="popular-jobs-box">
                      <img
                        className="mb-4 border-radius-10"
                        src="img/content/job-07.jpg"
                        alt="..."
                      />
                      <h4 className="h5">
                        <a href="job-details.html">Mingo Tech</a>
                      </h4>
                      <p className="text-muted font-weight-500">
                        Digital Marketing
                      </p>
                    </div>
                    <span className="border-end border-color-extra-light-gray pe-2 me-2">
                      <i className="fas fa-map-marker-alt pe-2 text-secondary" />
                      Afghanistan
                    </span>
                    <span className="border-end border-color-extra-light-gray pe-2 me-2">
                      <i className="far fa-clock pe-2 text-secondary" />
                      $35K
                    </span>
                    <span>
                      <i className="ti-briefcase pe-2 text-secondary" />2 year
                    </span>
                  </div>
                  <a href="job-details.html" className="butn butn-apply">
                    Apply Now
                  </a>
                </div>
              </div>
            </div>
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
                  <a href="job-details-2.html#!">
                    66 Guild Street 512B, Great North Town.
                  </a>
                </li>
                <li className="d-flex">
                  <span className="fa fa-phone-alt pe-3 text-white" />
                  <a href="job-details-2.html#!">(+44) 123 456 789</a>
                </li>
                <li className="d-flex">
                  <span className="fa fa-envelope pe-3 text-white" />
                  <a href="job-details-2.html#!">info@example.com</a>
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
                    <a href="job-details-2.html#!">
                      <i className="fab fa-facebook-f" />
                    </a>
                  </li>
                  <li>
                    <a href="job-details-2.html#!">
                      <i className="fab fa-twitter" />
                    </a>
                  </li>
                  <li>
                    <a href="job-details-2.html#!">
                      <i className="fab fa-youtube" />
                    </a>
                  </li>
                  <li>
                    <a href="job-details-2.html#!">
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
