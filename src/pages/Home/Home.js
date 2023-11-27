import React, { Fragment } from "react";
import Category from "./Category/Category";
import CourceHome from "./CourceHome/CourceHome";
import SchoolHome from "./SchoolHome/SchoolHome";
import ProcessHome from "./ProcessHome/ProcessHome";
import TutorHome from "./TutorHome/TutorHome";
import ReviewHome from "./ReviewHome/ReviewHome";
import BlogHome from "./BlogHome/BlogHome";
import ContactHome from "./ContactHome/ContactHome";

export default function Home() {
  return (
    <Fragment>
      {/* JOB CATEGORIES
        ================================================== */}
      <Category />
      {/* RECENT COURCE
        ================================================== */}
      <CourceHome />
      {/* TOP SHOOL
        ================================================== */}
      {/* <SchoolHome /> */}
      {/* OUR PROCESS
        ================================================== */}
      <ProcessHome />
      {/* FEATURED TUTOR
        ================================================== */}
      <TutorHome />
      {/* REVIEW
        ================================================== */}
      <ReviewHome />
      {/* BLOG
        ================================================== */}
      <BlogHome />
      {/* CONTACT
        ================================================== */}
      <ContactHome />
      {/* FOOTER
        ================================================== */}
    </Fragment>
  );
}
