import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom/cjs/react-router-dom";
import { GetListCourceAction } from "../../../../redux/action/CourceAction";

export default function CousesRight() {
  const dispatch = useDispatch();
  const { arrCource } = useSelector((root) => root.CourceReducer);
  console.log(arrCource);
  useEffect(() => {
    const action = GetListCourceAction();
    dispatch(action);
  }, []);
  return (
    <div className="col-lg-9 order-1 order-lg-2 mt-6">
      <div className="ps-lg-1-6 ps-xl-1-9">
        <div className="row">
          <div className="col-lg-12">
            <div className="d-md-flex justify-content-between align-items-center mb-2-2">
              <div className="mb-4 mb-md-0">
                <h4 className="mb-0 h5">
                  Showing 1–10 of{" "}
                  <span className="text-primary">{arrCource.length} Course</span>
                </h4>
              </div>
              <form
                action="job-grid-2-left-sidebar.html#!"
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
          </div>
        </div>
        <div className="row mt-n1-9">
          {arrCource.map((item, index) => {
            return (
              <div className="col-md-6 mt-1-9">
                <div className="card card-style10">
                  <div className="card-body">
                    <span className="popular-jobs-status">{item.duration}</span>
                    <NavLink to={`/cource/${item.course_id}`} className="favourite"> <i className="far fa-heart" /></NavLink>
                    <div className="popular-jobs-box">
                      <img
                        className="mb-4 border-radius-10"
                        src={item.image_url}
                        alt="..."
                        style={{width:"40%"}}
                      />
                      <h4 className="h5">
                        <a href="job-details.html">{item.name}</a>
                      </h4>
                      <p className="text-muted font-weight-500">
                        {item.description}
                      </p>
                    </div>
                    <span className="border-end border-color-extra-light-gray pe-2 me-2">
                    <i class="fa-regular fa-clock pe-2 text-secondary" />
                      {item.spend_time} hour
                    </span>
                    <span className="border-end border-color-extra-light-gray pe-2 me-2">
                      <i className="fa-solid fa-money-bill pe-2 text-secondary" />
                      ${item.price}
                    </span>
                    <span>
                    <i class="fa-regular fa-star pe-2 text-secondary" />{item.ratting}
                    </span>
                  </div>
                  <NavLink to={`/cource/${item.course_id}`} className="butn butn-apply">
                    Register Now
                  </NavLink>
                </div>
              </div>
            );
          })}
        </div>
        <div className="row">
          <div className="col-sm-12">
            {/* start pager  */}
            <div className="text-center mt-6 mt-lg-7">
              <div className="pagination text-primary">
                <ul>
                  <li>
                    <a href="job-grid-2-left-sidebar.html#!">
                      <i className="fas fa-long-arrow-alt-left me-2" /> Prev
                    </a>
                  </li>
                  <li className="active">
                    <a href="job-grid-2-left-sidebar.html#!">1</a>
                  </li>
                  <li>
                    <a href="job-grid-2-left-sidebar.html#!">2</a>
                  </li>
                  <li>
                    <a href="job-grid-2-left-sidebar.html#!">3</a>
                  </li>
                  <li>
                    <a href="job-grid-2-left-sidebar.html#!">
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
  );
}
