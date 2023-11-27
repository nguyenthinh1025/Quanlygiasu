import React from "react";
import Header from "../../template/UserTemplate/Header/Header";
import Footer from "../../component/Footer/Footer";
import HeaderList from "./Header/HeaderList";
import BodyList from "./BodyList/BodyList";
export default function ListCourse() {
  return (
    <div className="main-wrapper">
      {/* HEADER
    ================================================== */}
      <Header />
      {/* PAGE TITLE
    ================================================== */}
      <HeaderList />
      {/* JOB GRID 2 - LEFT SIDEBAR
    ================================================== */}
      <BodyList />
      {/* FOOTER
    ================================================== */}
      <Footer />
    </div>
  );
}
