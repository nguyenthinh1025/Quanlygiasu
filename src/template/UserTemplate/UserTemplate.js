import { Fragment, useEffect, useState } from "react";
import { Route, NavLink } from "react-router-dom";
import { history } from "../../App";
import Header from "./Header/Header";
import Banner from "./Banner/Banner";
import Footer from "./Footer/Footer";

export const UserTemplate = (props) => {
  const { Component, ...restProps } = props;

  return (
    <Route
      {...restProps}
      render={(propsRoute) => {
        return (
          <div className="main-wrapper">
            {/* HEADER
        ================================================== */}
            <Header />
            {/* BANNER
        ================================================== */}
           <Banner />
            <Component {...propsRoute} />
            <Footer />
          </div>
        );
      }}
    />
  );
};
