import React from 'react'

export default function Banner() {
  return (
    <section className="banner2">
              <div className="container">
                <div className="row">
                  <div className="content-column col-lg-7">
                    <div className="inner-column pe-xxl-5">
                      <div className="banner-title mb-md-2-5">
                        <h1 className="mb-3">
                        Search for a suitable Course or Tutor
                        </h1>
                        <p className="display-28">
                          Search Course, Tutor 
                        </p>
                      </div>
                      {/*Start Job Search Form */}
                      <div className="job-search-form">
                        <form
                          action="index-02.html#!"
                          method="post"
                          encType="multipart/form-data"
                          onclick
                        >
                          <div className="quform-elements">
                            <div className="row mt-n3">
                              {/* Begin Text input element */}
                              <div className="col-md-9 mt-3">
                                <div className="quform-element">
                                  <div className="quform-input">
                                    <input
                                      id="job-search"
                                      className="form-control"
                                      type="text"
                                      name="job-search"
                                      placeholder="Cource, tutor"
                                    />
                                  </div>
                                </div>
                              </div>
                              {/* End Text input element */}
                              {/* Begin Text input element */}
                              {/* <div className="col-md-4 mt-3">
                                <div className="quform-element">
                                  <div className="quform-input">
                                    <input
                                      id="email"
                                      className="form-control"
                                      type="text"
                                      name="email"
                                      placeholder="City or postcode"
                                    />
                                  </div>
                                </div>
                              </div> */}
                              {/* End Text input element */}
                              {/* Begin Submit button */}
                              <div className="col-md-3 mt-3">
                                <div className="quform-submit-inner">
                                  <button className="butn" type="submit">
                                    <span>Find </span>
                                  </button>
                                </div>
                                <div className="quform-loading-wrap">
                                  <span className="quform-loading" />
                                </div>
                              </div>
                              {/* End Submit button */}
                            </div>
                          </div>
                        </form>
                      </div>
                      {/*End Job Search Form */}
                      {/* Popular Search */}
                      <div className="popular-searches">
                        <span className="pe-3 font-weight-600">
                          Trending Keywords :{" "}
                        </span>
                        <a href="index-02.html#!">Designer</a>,
                        <a href="index-02.html#!">Developer</a>,
                        <a href="index-02.html#!">Web</a>,
                        <a href="index-02.html#!">IOS</a>,
                        <a href="index-02.html#!">PHP</a>,
                        <a href="index-02.html#!">Senior</a>,
                        <a href="index-02.html#!">Engineer</a>
                      </div>
                      {/* End Popular Search */}
                    </div>
                  </div>
                  <div className="image-column col-lg-5">
                    <div className="image-box">
                      <div className="row align-items-center">
                        <div className="col-6">
                          <img
                            src="img/banner/banner-04.jpg"
                            className="border-radius-5"
                            alt="..."
                          />
                        </div>
                        <div className="col-6">
                          <img
                            src="img/banner/banner-02.jpg"
                            className="mb-4 border-radius-5"
                            alt="..."
                          />
                          <img
                            src="img/banner/banner-03.jpg"
                            className="border-radius-5"
                            alt="..."
                          />
                        </div>
                      </div>
                      <div className="banner-image-text d-none d-sm-block">
                        <div className="d-flex align-items-center">
                          <div className="flex-shrink-0">
                            <i className="ti-export display-25 text-primary" />
                          </div>
                          <div className="flex-grow-1 ms-3">
                            <h4 className="h6 mb-0">Suitable Course</h4>
                            <small>It only takes a few seconds</small>
                          </div>
                        </div>
                      </div>
                      <div className="banner-image-text bottom-text text-center d-none d-sm-block">
                        <h6 className="mb-3">10k+ Candidates</h6>
                        <ul className="list-unstyled users-list m-0">
                          <li>
                            <img
                              className="rounded-circle"
                              src="img/avatar/avatar-01.jpg"
                              alt="..."
                            />
                          </li>
                          <li>
                            <img
                              className="rounded-circle"
                              src="img/avatar/avatar-02.jpg"
                              alt="..."
                            />
                          </li>
                          <li>
                            <img
                              className="rounded-circle"
                              src="img/avatar/avatar-03.jpg"
                              alt="..."
                            />
                          </li>
                          <li>
                            <img
                              className="rounded-circle"
                              src="img/avatar/avatar-05.jpg"
                              alt="..."
                            />
                          </li>
                          <li>
                            <img
                              className="rounded-circle"
                              src="img/avatar/avatar-06.jpg"
                              alt="..."
                            />
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
  )
}
