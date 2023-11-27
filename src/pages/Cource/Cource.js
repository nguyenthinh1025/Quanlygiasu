import React from "react";
import Header from "../../template/UserTemplate/Header/Header";
import Footer from "../../component/Footer/Footer";
import HeaderDetailCourse from "./HeaderDetailCourse/HeaderDetailCourse";
import BodyDetailCourse from "./BodyDetailCourse/BodyDetailCourse";
export default function Cource(props) {
  const {id} = props.match.params
  return (
    <div className="main-wrapper">
      {/* HEADER
  ================================================== */}
      <Header />
      {/* PAGE TITLE
  ================================================== */}
      <HeaderDetailCourse id= {id}/>
      {/* JOB DETAILS
  ================================================== */}
      <BodyDetailCourse id= {id}/>
      {/* FOOTER
  ================================================== */}
      <Footer />
    </div>
  );
}
