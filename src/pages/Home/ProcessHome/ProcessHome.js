import React from 'react'

export default function ProcessHome() {
  return (
    <section className="bg-light">
    <div className="container">
      <div className="section-heading2">
        <span># How We Work</span>
        <h2>
          <strong>Our working</strong> process
        </h2>
      </div>
      <div className="row mt-n1-9">
        <div className="col-sm-6 col-lg-3 mt-1-9">
          <div className="process-style2 first">
            <div className="process-arrow">
              <div className="process-icon-box">
                <img src="img/icons/icon-22.png" alt="..." />
              </div>
              <div className="process-contnet">
                <h4 className="h5">01. Create Account</h4>
                <p className="mb-0">Sign Up Your Profile</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-lg-3 mt-1-9">
          <div className="process-style2">
            <div className="process-arrow">
              <div className="process-icon-box">
                <img src="img/icons/icon-23.png" alt="..." />
              </div>
              <div className="process-contnet">
                <h4 className="h5">02. CV / Resume Upload</h4>
                <p className="mb-0">Upload By Category</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-lg-3 mt-1-9">
          <div className="process-style2">
            <div className="process-arrow">
              <div className="process-icon-box">
                <img src="img/icons/icon-24.png" alt="..." />
              </div>
              <div className="process-contnet">
                <h4 className="h5">03. Find Vacancy</h4>
                <p className="mb-0">Choose A Suitable Job</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-lg-3 mt-1-9">
          <div className="process-style2 last">
            <div className="process-arrow">
              <div className="process-icon-box">
                <img
                  src="https://jobboard.websitelayout.net/img/icons/icon-25.png"
                  alt="..."
                />
              </div>
              <div className="process-contnet">
                <h4 className="h5">04. Apply Them</h4>
                <p className="mb-0">Get Personal Job Offer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}
