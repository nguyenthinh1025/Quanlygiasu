import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { GetCourceByIDAction } from '../../../redux/action/CourceAction';
export default function BodyDetailCourse(props) {
  const { id} = props;
  const dispatch = useDispatch();
  const { courseByID } = useSelector((root) => root.CourceReducer);
  console.log(courseByID);
  useEffect(() => {
    const action = GetCourceByIDAction(id);
    dispatch(action);
  }, []);
  return (
    <section>
        <div className="container">
          <div className="row mb-2-2 mb-lg-2-5 pb-2-2 pb-lg-2-5 mt-n1-9 border-bottom border-color-extra-light-gray">
            <div className="col-lg-8 mt-1-9">
              <div className="pe-lg-1-6 pe-xl-1-9">
                <div className="row align-items-center mb-2-2 pb-2-2 border-bottom border-color-extra-light-gray">
                  <div className="col-sm-8 mb-4 mb-sm-0">
                    <div className="d-flex align-items-center">
                      <div className="flex-shrink-0">
                        <div className="job-details-logo">
                          <img
                            src={courseByID.image_url}
                            alt="..."
                            className="border-radius-10"
                          />
                        </div>
                      </div>
                      <div className="flex-grow-1 ms-3 ms-sm-4">
                        <h4>{courseByID.name}</h4>
                        {/* <span className="text-muted"> Senior Manager</span> */}
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="row">
                      <div className="col-12">
                        <a
                          href="job-details.html#!"
                          className="butn mb-3 w-100 text-center"
                        >
                         Register Now
                        </a>
                      </div>

                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-12 mb-2-2">
                    <h5 className="mb-3">Course Description :</h5>
                    <p>
                     {courseByID.description}
                    </p>
                    
                  </div>
                  <div className="col-lg-12 mb-2-2">
                    <h5 className="mb-3">Programs :</h5>
                    <ul className="list-unstyled mb-0">
                      {courseByID.course_programs?.map((item,index)=>{
                        return <li className="mb-3 d-flex align-items-baseline">
                        <i className="fas fa-check text-primary me-2 vertical-align-middle" />
                        {item.description}
                      </li>
                      })}
                     
                    </ul>
                  </div>
                  
                  
                </div>
              </div>
            </div>
            <div className="col-lg-4 mt-1-9">
              <div className="job-details-sidebar">
                <div className="widget">
                  <div className="card border-color-extra-light-gray border-radius-10">
                    <div className="card-body p-4">
                      <h4>Course Summary</h4>
                      <ul className="list-style5">
                        <li>
                          <span>Published</span> Nov 6, 2021
                        </li>
                        <li>
                          <span>Vacancy</span> 08
                        </li>
                        <li>
                          <span>Status</span> Full-time
                        </li>
                        <li>
                          <span>Experience</span> 5 year(s)
                        </li>
                        <li>
                          <span>Location</span> Canada
                        </li>
                        <li>
                          <span>Salary</span> $25K
                        </li>
                        <li>
                          <span>Gender</span> Any
                        </li>
                        <li>
                          <span>Deadline</span> Nov 15, 2021
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
               
                <div className="widget">
                  <div className="card border-color-extra-light-gray border-radius-10">
                    <div className="card-body p-4">
                      <h4>About Company</h4>
                      <ul className="list-style5">
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
                          Town.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row recent-job-style2">
            <h4 className="mb-4">Related Jobs :</h4>
            <div className="col-lg-12 mb-1-9">
              <div className="p-1-6 border border-color-extra-light-gray bg-white border-radius-10">
                <div className="d-lg-flex justify-content-between align-items-center text-center text-lg-start">
                  <div className="d-lg-flex align-items-center mb-4 mb-lg-0">
                    <div className="flex-shrink-0">
                      <div className="job-company-logo radius-10">
                        <img
                          src="img/content/job-02.jpg"
                          alt="..."
                          className="border-radius-10"
                        />
                      </div>
                    </div>
                    <div className="flex-grow-1 ms-lg-4">
                      <h4 className="h5">
                        <a href="job-details.html">Sr. Project Manager</a>
                      </h4>
                      <span className="me-2">
                        <i className="ti-briefcase pe-2 text-secondary" />
                        Factory &amp; Industry
                      </span>
                      <span className="me-2">
                        <i className="ti-location-pin pe-2 text-secondary" />
                        California
                      </span>
                      <span className="me-2">
                        <i className="ti-time pe-2 text-secondary" />
                        12 Hour Ago
                      </span>
                      <span className="me-2">
                        <i className="far fa-money-bill-alt pe-2 text-secondary" />
                        $15K
                      </span>
                      <span className="company-info radius-10">Full Time</span>
                    </div>
                  </div>
                  <a href="job-details.html" className="butn butn-md">
                    Apply Job
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-12 mb-1-9">
              <div className="p-1-6 border border-color-extra-light-gray bg-white border-radius-10">
                <div className="d-lg-flex justify-content-between align-items-center text-center text-lg-start">
                  <div className="d-lg-flex align-items-center mb-4 mb-lg-0">
                    <div className="flex-shrink-0">
                      <div className="job-company-logo radius-10">
                        <img
                          src="img/content/job-03.jpg"
                          alt="..."
                          className="border-radius-10"
                        />
                      </div>
                    </div>
                    <div className="flex-grow-1 ms-lg-4">
                      <h4 className="h5">
                        <a href="job-details.html">UI / UX Designer</a>
                      </h4>
                      <span className="me-2">
                        <i className="ti-briefcase pe-2 text-secondary" />
                        IT
                      </span>
                      <span className="me-2">
                        <i className="ti-location-pin pe-2 text-secondary" />
                        New York
                      </span>
                      <span className="me-2">
                        <i className="ti-time pe-2 text-secondary" />
                        14 Hour Ago
                      </span>
                      <span className="me-2">
                        <i className="far fa-money-bill-alt pe-2 text-secondary" />
                        $18K
                      </span>
                      <span className="company-info radius-10">Part Time</span>
                    </div>
                  </div>
                  <a href="job-details.html" className="butn butn-md">
                    Apply Job
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-12 mb-1-9">
              <div className="p-1-6 border border-color-extra-light-gray bg-white border-radius-10">
                <div className="d-lg-flex justify-content-between align-items-center text-center text-lg-start">
                  <div className="d-lg-flex align-items-center mb-4 mb-lg-0">
                    <div className="flex-shrink-0">
                      <div className="job-company-logo radius-10">
                        <img
                          src="img/content/job-04.jpg"
                          alt="..."
                          className="border-radius-10"
                        />
                      </div>
                    </div>
                    <div className="flex-grow-1 ms-lg-4">
                      <h4 className="h5">
                        <a href="job-details.html">Software Engineer</a>
                      </h4>
                      <span className="me-2">
                        <i className="ti-briefcase pe-2 text-secondary" />
                        Construction
                      </span>
                      <span className="me-2">
                        <i className="ti-location-pin pe-2 text-secondary" />
                        London
                      </span>
                      <span className="me-2">
                        <i className="ti-time pe-2 text-secondary" />
                        18 Hour Ago
                      </span>
                      <span className="me-2">
                        <i className="far fa-money-bill-alt pe-2 text-secondary" />
                        $20K
                      </span>
                      <span className="company-info radius-10">Full Time</span>
                    </div>
                  </div>
                  <a href="job-details.html" className="butn butn-md">
                    Apply Job
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="p-1-6 border border-color-extra-light-gray bg-white border-radius-10">
                <div className="d-lg-flex justify-content-between align-items-center text-center text-lg-start">
                  <div className="d-lg-flex align-items-center mb-4 mb-lg-0">
                    <div className="flex-shrink-0">
                      <div className="job-company-logo radius-10">
                        <img
                          src="img/content/job-05.jpg"
                          alt="..."
                          className="border-radius-10"
                        />
                      </div>
                    </div>
                    <div className="flex-grow-1 ms-lg-4">
                      <h4 className="h5">
                        <a href="job-details.html">Content Writing</a>
                      </h4>
                      <span className="me-2">
                        <i className="ti-briefcase pe-2 text-secondary" />
                        IT
                      </span>
                      <span className="me-2">
                        <i className="ti-location-pin pe-2 text-secondary" />
                        Uk
                      </span>
                      <span className="me-2">
                        <i className="ti-time pe-2 text-secondary" />
                        20 Hour Ago
                      </span>
                      <span className="me-2">
                        <i className="far fa-money-bill-alt pe-2 text-secondary" />
                        $40K
                      </span>
                      <span className="company-info radius-10">Part Time</span>
                    </div>
                  </div>
                  <a href="job-details.html" className="butn butn-md">
                    Apply Job
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}
