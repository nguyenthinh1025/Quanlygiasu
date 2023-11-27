import { useFormik } from "formik";
import React from "react";
import { NavLink } from "react-router-dom/cjs/react-router-dom";
import { LoginAction } from "../../redux/action/AuthAction";
import { useDispatch } from "react-redux";
export default function Login() {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (value) => {
      console.log(value);
      const action = LoginAction(value);
      dispatch(action);
    },
  });
  return (
    <div style={{ height: "100vh" }}>
      <div className="main-wrapper">
        {/* LOGIN
  ================================================== */}
        <section
          className="full-screen cover-background bg-img d-flex align-items-center p-0"
          // data-overlay-dark={8}

          data-background="img/bg/bg-02.jpg"
          style={{ height: "100vh", backgroundColor: "rgba(38,174,97,0.1)" }}
        >
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-12">
                <div className="row g-0">
                  <div className="col-lg-6 bg-img cover-background min-height-300 rounded-start-lg-10px d-none d-lg-block">
                    <img
                      src="/img/banner/banner-04.jpg"
                      style={{ width: "83%" }}
                    />
                  </div>
                  <div
                    className="col-lg-6"
                    style={{
                      border: "1px solid #26ae61",
                      borderRadius: "10px",
                    }}
                  >
                    <div
                      className="p-1-6 p-sm-1-9 p-lg-2-2 p-xl-2-9 bg-white rounded-start-md-10px rounded-end-lg-10px"
                      style={{ height: "100%" }}
                    >
                      <div className="text-center mb-1-6 mb-lg-1-9">
                        <h2 className="h3 mb-0">Login Your Account</h2>
                      </div>
                      <form onSubmit={formik.handleSubmit}>
                        <div className="col-lg-12 mb-3">
                          <label
                            htmlFor="username"
                            className="form-label fs-6 text-muted"
                          >
                            Email
                          </label>
                          <div className="input-group">
                            <div className="input-group-text bg-light border-radius-10">
                              <i className="ti-user" />
                            </div>
                            <input
                              name="email"
                              onChange={formik.handleChange}
                              type="text"
                              className="form-control border-radius-10"
                              placeholder="Enter Your Email*"
                              id="username"
                              required
                            />
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <label
                            className="form-label fs-6 text-muted"
                            htmlFor="password"
                          >
                            Password
                          </label>
                          <div className="input-group mb-4">
                            <div className="input-group-text bg-light border-radius-10">
                              <i className="ti-unlock" />
                            </div>
                            <input
                              name="password"
                              onChange={formik.handleChange}
                              type="Password"
                              className="form-control border-radius-10"
                              placeholder="Enter Your Password*"
                              id="password"
                            />
                          </div>
                          <div className="d-sm-flex justify-content-between align-items-center mb-4">
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                defaultValue
                                id="login-remember"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="login-remember"
                              >
                                Remember Me
                              </label>
                            </div>
                            <div>
                              <a
                                href="forgot-password.html"
                                className="text-primary font-weight-500"
                              >
                                Forget Password?
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <div className="d-grid">
                            <button type="submit" className="butn">
                              Sign In
                            </button>
                          </div>
                        </div>
                      </form>
                      <div className="login-divider">
                        <span className="fs-6 bg-white z-index-1 p-2 mb-0 text-muted font-weight-600">
                          Or Login With
                        </span>
                      </div>
                      <div className="row mb-1-9">
                        <div className="col-lg-4 mb-3 mb-lg-0">
                          <div className="form-social-item">
                            <a
                              href="login.html#!"
                              className="facebook vertical-align-middle"
                            >
                              <i className="ti-facebook me-2 display-30" />
                              Facebook
                            </a>
                          </div>
                        </div>
                        <div className="col-lg-4 mb-3 mb-lg-0">
                          <div className="form-social-item">
                            <a
                              href="login.html#!"
                              className="twitter vertical-align-middle"
                            >
                              <i className="ti-twitter-alt me-2 display-30" />
                              Twitter
                            </a>
                          </div>
                        </div>
                        <div className="col-lg-4">
                          <div className="form-social-item">
                            <a
                              href="login.html#!"
                              className="linkedin vertical-align-middle"
                            >
                              <i className="ti-linkedin me-2 display-30" />
                              Linkedin
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="d-flex justify-content-center align-items-center">
                        <span>
                          Not registered ?{" "}
                          <NavLink to="/register" className="font-weight-600">
                            Create account
                          </NavLink>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
