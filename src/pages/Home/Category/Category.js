import React, { useEffect } from "react";
import { GetListCategoryAction } from "../../../redux/action/CategoryAction";
import { useDispatch, useSelector } from "react-redux";
export default function Category() {
  const dispatch = useDispatch();
  const { arrCategory } = useSelector((root) => root.CategoryReducer);
  console.log(arrCategory);
  useEffect(() => {
    const action = GetListCategoryAction();
    dispatch(action);
  }, []);
  return (
    <section>
      <div className="container border-bottom border-color-extra-light-gray mb-6 pb-6">
        <div className="section-heading2">
          <span># Categories</span>
          <h2>
            <strong>Top trending</strong> categories
          </h2>
        </div>
        <div className="job-categories owl-carousel owl-theme">
          {arrCategory?.map((item,index)=>{
            return   <div className="card card-style5">
            <div
              className="categories-img bg-img cover-background min-height-250"
              data-background="img/content/job-categorie-01.jpg"
            />
            <div className="card-body">
              <span className="job-position">{item.courses?.length} course</span>
              <div className="d-flex align-items-center">
                <div className="flex-shrink-0">
                  <div className="categories-icon">
                    <img src={`img/icons/icon-${12 + index}.png`} alt="..." />
                  </div>
                </div>
                <div className="flex-grow-1 ms-3">
                  <h4 className="h5 mb-1">
                    <a href="job-listing.html" className="text-white">
                      {item.name}
                    </a>
                  </h4>
                  <p className="mb-0 display-30 text-white">
                  { item.description.length > 40 ? `${item.description.slice(0, 30)}...` : item.description}
                  </p>
                </div>
              </div>
            </div>
            </div>
          })}
          
        </div>
      </div>
      <div className="container">
        <div className="row mt-n1-9">
          <div className="col-sm-6 col-lg-3 mt-1-9 text-center text-sm-start">
            <div className="d-sm-flex align-items-center">
              <div className="flex-shrink-0 mb-3 mb-sm-0">
                <img src="img/icons/icon-09.png" alt="..." />
              </div>
              <div className="flex-grow-1 border-sm-start border-color-extra-light-gray ps-sm-3 ps-xl-4 ms-sm-3 ms-xl-4">
                <h3 className="countup h1 text-secondary mb-1">1327</h3>
                <span className="text-muted">Jobs Posted</span>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-lg-3 mt-1-9 text-center text-sm-start">
            <div className="d-sm-flex align-items-center">
              <div className="flex-shrink-0 mb-3 mb-sm-0">
                <img src="img/icons/icon-10.png" alt="..." />
              </div>
              <div className="flex-grow-1 border-sm-start border-color-extra-light-gray ps-sm-3 ps-xl-4 ms-sm-3 ms-xl-4">
                <h3 className="countup h1 text-secondary mb-1">150</h3>
                <span className="font-weight-500 text-muted">Jobs Filled</span>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-lg-3 mt-1-9 text-center text-sm-start">
            <div className="d-sm-flex align-items-center">
              <div className="flex-shrink-0 mb-3 mb-sm-0">
                <img src="img/icons/icon-11.png" alt="..." />
              </div>
              <div className="flex-grow-1 border-sm-start border-color-extra-light-gray ps-sm-3 ps-xl-4 ms-sm-3 ms-xl-4">
                <h3 className="countup h1 text-secondary mb-1">220</h3>
                <span className="font-weight-500 text-muted">Companies</span>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-lg-3 mt-1-9 text-center text-sm-start">
            <div className="d-sm-flex align-items-center">
              <div className="flex-shrink-0 mb-3 mb-sm-0">
                <img src="img/icons/icon-21.png" alt="..." />
              </div>
              <div className="flex-grow-1 border-sm-start border-color-extra-light-gray ps-sm-3 ps-xl-4 ms-sm-3 ms-xl-4">
                <h3 className="countup h1 text-secondary mb-1">2250</h3>
                <span className="font-weight-500 text-muted">Candidates</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
