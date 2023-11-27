import React from 'react'
import { NavLink } from 'react-router-dom/cjs/react-router-dom'

export default function HeaderList() {
  return (
    <section className="page-title-section">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-10 text-center">
          <h1 className="h2 mb-4">Course - Suitable Course</h1>
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="page-title-list">
                <ol className="breadcrumb d-inline-block mb-0">
                  <li className="breadcrumb-item d-inline-block">
                   <NavLink to="/">Home</NavLink>
                  </li>
                  <li className="breadcrumb-item d-inline-block active">
                    <a
                      href="job-grid-2-left-sidebar.html#!"
                      className="text-primary"
                    >
                      Course - Suitable Course
                    </a>
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
