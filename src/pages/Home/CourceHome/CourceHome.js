import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetListCourseLimitAction } from "../../../redux/action/CourceAction";

export default function CourceHome() {
  const dispatch = useDispatch();
  const { arrCourceLimit } = useSelector((root) => root.CourceReducer);
  console.log(arrCourceLimit);
  useEffect(() => {
    const action = GetListCourseLimitAction();
    dispatch(action);
  }, []);
  return (
    <section className="bg-light recent-job-style1">
      <div className="container">
        <div className="section-heading2">
          <span># Recent Cource</span>
          <h2>
            <strong>Latest cource</strong> postings
          </h2>
        </div>
        <div className="row mt-n1-9">
          {arrCourceLimit?.map((item, index) => {
            return (
              <div className="col-md-6 col-lg-4 mt-1-9">
                <div className="card border-color-extra-light-gray h-100 border-radius-5">
                  <div className="card-body p-1-6 p-xl-1-9">
                    <h4 className="h5 mb-4">
                      <a href="job-details.html">{item.name}</a>
                    </h4>
                    <div className="d-flex mb-3">
                      <div className="flex-shrink-0">
                        <img
                          src={item?.tutor_profile?.user?.avatar_url}
                          className="border-radius-50 w-40px"
                          alt="..."
                        />
                      </div>
                      <div className="flex-grow-1 ms-3">
                        <h6 className="mb-0">
                          {item?.tutor_profile?.user?.last_name}
                        </h6>
                        <span className="text-muted display-31">
                          {item?.tutor_profile?.user?.email}
                        </span>
                      </div>
                    </div>
                    <h6 style={{paddingBottom:'10px'}}>{item.description}</h6>
                    <h6 className="mb-3">Time: {item.duration}</h6>
                    <h5 className="text-primary mb-3">{item.price}$ </h5>

                    <a href="job-details.html" className="butn butn-md radius">
                      Register Now
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
