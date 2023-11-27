import React from "react";
import { NavLink } from "react-router-dom/cjs/react-router-dom";
import CousesLeft from "./CousesLeft/CousesLeft";
import CousesRight from "./CousesRight/CousesRight";

export default function BodyList() {
  return (
    <section>
      <div className="container">
        <div className="row mt-n6">
          {/* job-grid left */}
          <CousesLeft />
          {/* end job-grid left */}
          {/* job-grid right */}
          <CousesRight />
          {/* end job-grid right */}
        </div>
      </div>
    </section>
  );
}
