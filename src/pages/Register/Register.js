import React from "react";
import { NavLink } from "react-router-dom/cjs/react-router-dom";
import { useFormik } from "formik";
import { RegisterAction } from "../../redux/action/AuthAction";
import { useDispatch } from "react-redux";
import { history } from "../../App";
export default function Register(props) {
    
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      email: "any",
      last_name: "any",
      first_name: "any",
      gender: "any",
      avatar_url: "any",
      phone_number: "any",
      google_id: "any",
      role_id: "any",
      type: "any",
      password:"",
    },
    enableReinitialize: true,
    onSubmit: (value) => {
      console.log(value);
      const action = RegisterAction(value, history);
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
                        <h2 className="h3 mb-0">Register Your Account</h2>
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
                              id="Email"
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
                          <div className="col-lg-12 mb-3">
                            <label
                              htmlFor="username"
                              className="form-label fs-6 text-muted"
                            >
                              Phone Number
                            </label>
                            <div className="input-group">
                              <div className="input-group-text bg-light border-radius-10">
                                <i className="ti-user" />
                              </div>
                              <input
                                name="phone_number"
                                onChange={formik.handleChange}
                                type="text"
                                className="form-control border-radius-10"
                                placeholder="Enter Your Phone Number"
                                id="username"
                                required
                              />
                            </div>
                          </div>
                          <div className="col-lg-12 mb-3">
                            <label
                              htmlFor="username"
                              className="form-label fs-6 text-muted"
                            >
                              First Name
                            </label>
                            <div className="input-group">
                              <div className="input-group-text bg-light border-radius-10">
                                <i className="ti-user" />
                              </div>
                              <input
                                name="first_name"
                                onChange={formik.handleChange}
                                type="text"
                                className="form-control border-radius-10"
                                placeholder="Enter Your First Name"
                                id="username"
                                required
                              />
                            </div>
                          </div>
                          <div className="col-lg-12 mb-3">
                            <label
                              htmlFor="username"
                              className="form-label fs-6 text-muted"
                            >
                              Last Name
                            </label>
                            <div className="input-group">
                              <div className="input-group-text bg-light border-radius-10">
                                <i className="ti-user" />
                              </div>
                              <input
                                name="last_name"
                                onChange={formik.handleChange}
                                type="text"
                                className="form-control border-radius-10"
                                placeholder="Enter Your Last Name"
                                id="username"
                                required
                              />
                            </div>
                          </div>
                          <div className="col-lg-12 mb-3">
                            <label
                              htmlFor="username"
                              className="form-label fs-6 text-muted"
                            >
                              Role
                            </label>
                            <div className="input-group">
                              <div className="input-group-text bg-light border-radius-10">
                                <i className="ti-user" />
                              </div>
                              <select
                                className="form-control border-radius-10"
                                name="role_id"
                                onChange={formik.handleChange}
                              >
                                <option>Chọn vai trò</option>
                                <option value="3fd935a1-4ef6-403c-976a-df558dd911e1">
                                  Student
                                </option>
                                <option value="90ce2234-d181-46bb-b0b6-da055cc960bd">
                                  Tutor
                                </option>
                              </select>
                            </div>
                          </div>
                        </div>

                        <div className="col-lg-12">
                          <div className="d-grid">
                            <button type="submit" className="butn">
                              Register
                            </button>
                          </div>
                        </div>
                      </form>
                      <div className="login-divider">
                        <span className="fs-6 bg-white z-index-1 p-2 mb-0 text-muted font-weight-600"></span>
                      </div>

                      <div className="d-flex justify-content-center align-items-center">
                        <span>
                          You have account ?{" "}
                          <NavLink to="/login" className="font-weight-600">
                            Login account
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
