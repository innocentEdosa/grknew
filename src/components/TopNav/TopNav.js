import React, { useState } from "react";
import Logo from "../../assets/logo.jpeg";
import "./TopNav.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const TopNav = ({ showMobileNav, toggleMobileNav }) => {
  return (
    <nav className="navbar navbar-expand-md navigation">
      <a className="pb-2 navbar-brand navigation-logo" href="#">
        <img alt="logo" src={Logo} />
      </a>
      <button
        class="navbar-toggler border navigation-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarsExample04"
        aria-controls="navbarsExample04"
        aria-expanded="false"
        aria-label="Toggle navigation"
        onClick={toggleMobileNav}
      >
        <FontAwesomeIcon icon="bars" size="2x" />
      </button>

      <div
        className={
          showMobileNav
            ? "collapse show navbar-collapse"
            : "collapse navbar-collapse "
        }
        id="navbarsExample04"
      >
        <ul className="navbar-nav mx-auto">
          <li className="nav-item navigation-item ">
            <a
              className="nav-link navigation-link navigation-link-active"
              href="#"
            >
              Home <span class="sr-only">(current)</span>
            </a>
          </li>

          <li className="nav-item navigation-item ">
            <a
              className="nav-link navigation-link navigation-link-active"
              href="#"
            >
              Services<span class="sr-only">(current)</span>
            </a>
          </li>

          <li className="nav-item navigation-item ">
            <a
              className="nav-link navigation-link navigation-link-active"
              href="#"
            >
              About <span class="sr-only">(current)</span>
            </a>
          </li>

          <li className="nav-item navigation-item ">
            <a
              className="nav-link navigation-link navigation-link-active"
              href="#"
            >
              Contact us <span class="sr-only">(current)</span>
            </a>
          </li>

          {/* <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="dropdown04" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</a>
        <div class="dropdown-menu" aria-labelledby="dropdown04">
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
          <a class="dropdown-item" href="#">Something else here</a>
        </div>
      </li> */}
        </ul>
        {/* <form class="form-inline my-2 my-md-0">
      <input class="form-control" type="text" placeholder="Search"/>
    </form> */}
      </div>
      <button className=" d-none d-md-block navigation-quote">
        Get A Quote
      </button>
    </nav>
  );
};

export default TopNav;
