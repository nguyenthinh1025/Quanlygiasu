
import React from 'react'

export default function ContactHome() {
  return (
    <section className="bg-primary md">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-7 mb-1-9 mb-lg-0 text-center text-lg-start">
          <h3 className="text-white">Subscribe to our Newsletter!</h3>
          <p className="text-white mb-0 opacity9">
            Sign up for our newsletter and study us on social media.
          </p>
        </div>
        <div className="col-lg-5">
          <form
            className="quform newsletter-form"
            action="https://jobboard.websitelayout.net/quform/newsletter-two.php"
            method="post"
            encType="multipart/form-data"
            onclick
          >
            <div className="quform-elements">
              <div className="row">
                {/* Begin Text input element */}
                <div className="col-md-12">
                  <div className="quform-element">
                    <div className="quform-input">
                      <input
                        className="form-control border-radius-5"
                        id="email_address"
                        type="text"
                        name="email_address"
                        placeholder="Subscribe with us"
                      />
                    </div>
                  </div>
                </div>
                {/* End Text input element */}
                {/* Begin Submit button */}
                <div className="col-md-12">
                  <div className="quform-submit-inner">
                    <button
                      className="btn btn-white text-primary m-0"
                      type="submit"
                    >
                      <i className="fas fa-paper-plane" />
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
      </div>
    </div>
  </section>
  )
}
