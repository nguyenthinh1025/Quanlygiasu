import { Fragment, useEffect, useState } from "react";
import { Route, NavLink } from "react-router-dom";
import { history } from "../../App";
import Header from "../UserTemplate/Header/Header";
import Sidebar from "./Sidebar/Sidebar";

export const AdminTemplate = (props) => {
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
            <section className="py-0">
              <div className="row g-0">
                <Sidebar />
                <div className="col-lg-9">
                  <Component {...propsRoute} />
                </div>
              </div>
            </section>
          </div>
        );
      }}
    />
  );
};
