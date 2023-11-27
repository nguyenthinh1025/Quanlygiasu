import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetListTutorAction } from "../../../redux/action/TutorAction";
export default function TutorHome() {
  const dispatch = useDispatch();
  const { arrTutor } = useSelector((root) => root.TutorReducer);
  console.log(arrTutor);
  useEffect(() => {
    const action = GetListTutorAction();
    dispatch(action);
  }, []);
  return (
    <section>
      <div className="container">
        <div className="section-heading2">
          <span># Tutor</span>
          <h2>
            <strong>Our featured</strong> tutor
          </h2>
        </div>
        <div className="featured-candidate owl-carousel owl-theme">
          {arrTutor?.map((item, index) => {
            return (
              <div className="card card-style7">
                <div className="card-body">
                  <a className="candidate-favourite" href="index-02.html#!">
                    <i className="far fa-heart" />
                  </a>
                  <img
                    src={item.user?.avatar_url}
                    className="border-radius-50 mb-3"
                    alt="..."
                    style={{width:'40%'}}
                  />
                  <div className="candidate-info">
                    <h4 className="h5">
                      <a href="candidate-details.html">{item.user?.last_name}</a>
                    </h4>
                    <span className="display-30 text-muted d-block mb-2 font-weight-500">
                      {item.description}
                    </span>
                    <div className="display-30 text-warning">
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <span className="px-2 py-1 bg-primary text-white ms-2 display-31">
                        5.0
                      </span>
                    </div>
                  </div>
                  <div className="d-flex justify-content-between mb-3">
                    <span>
                      <i className="ti-location-pin text-secondary me-2 display-31 display-sm-30" />
                      <strong>{item.user?.address}</strong>
                    </span>
                    <span>
                      <i className="far fa-money-bill-alt text-secondary me-2 display-31 display-sm-30" />
                      <strong>${item.balance} / hr</strong>
                    </span>
                    <span>
                      <i className="ti-briefcase text-secondary me-2 display-31 display-sm-30" />
                      <strong>{item.user?.gender}</strong>
                    </span>
                  </div>
                  <a
                    href="candidate-details.html"
                    className="butn w-100 radius"
                  >
                    View Profile
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
