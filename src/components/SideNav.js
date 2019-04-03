import React from "react";
import { Link } from "react-router-dom";

function SideNav() {
  return (
    <div className="collapse navbar-collapse navbar-ex1-collapse">
      <ul className="nav navbar-nav side-nav">
        <li className="active">
          <Link to="/">
            {" "}
            <i className="fa fa-fw fa-dashboard" />
            Dashboard
          </Link>
        </li>
        <li>
          <Link to="/charts">
            {" "}
            <i className="fa fa-fw fa-bar-chart-o" />
            Charts
          </Link>
        </li>
        <li>
          <Link to="/tables">
            {" "}
            <i className="fa fa-fw fa-table" />
            Tables
          </Link>
        </li>
        <li>
          <Link to="/settings">
            {" "}
            <i className="fa fa-fw fa-settings" />
            Settings
          </Link>
        </li>
        <li>
          <Link to="/wall">
            {" "}
            <i className="fa fa-fw fa-wall" />
            Wall
          </Link>
        </li>
        <li>
          <Link to="/marquee/iloveroutes">
            {" "}
            <i className="fa fa-fw fa-marquee" />
            Marquee 1
          </Link>
        </li>
        <li>
          <Link to="/marquee/reactrouterrules">
            {" "}
            <i className="fa fa-fw fa-marquee" />
            Marquee 2
          </Link>
        </li>
        <li>
          <Link to="/profiles">
            {" "}
            <i className="fa fa-fw fa-profiles" />
            Profiles
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default SideNav;
