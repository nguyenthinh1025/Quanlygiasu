import React from 'react'
import { NavLink } from 'react-router-dom/cjs/react-router-dom'

export default function HeaderDetailCourse(props) {
    const { id } = props;
  return (
    <section className="page-title-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10 text-center">
              <h1 className="h2 mb-4">Course Details</h1>
              <div className="row justify-content-center">
                <div className="col-lg-6">
                  <div className="page-title-list">
                    <ol className="breadcrumb d-inline-block mb-0">
                      <li className="breadcrumb-item d-inline-block">
                        <a href="job-details.html#!">Home</a>
                      </li>
                      <li className="breadcrumb-item d-inline-block active">
                       <NavLink to={`/cource/${id}`} className="text-primary"> Course Details</NavLink>
                      </li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}
