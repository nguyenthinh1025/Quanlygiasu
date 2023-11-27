import React from 'react'

export default function CousesLeft() {
  return (
    <div className="col-lg-3 order-2 order-lg-1 mt-6">
          <div className="sidebar">
            <div className="sidebar-title">Search Keywords</div>
            <div className="widget search">
              <form
                action="job-grid-2-left-sidebar.html#!"
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
  )
}
