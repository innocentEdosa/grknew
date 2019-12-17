import React from "react";
import "./Showcase.scss";

const Showcase = () => {
  return (
    <div className="showcase jumbotron jumbotron-fluid">
      <div className="container">
        <div className="d-flex flex-column showcase-content">
          <h1 className="showcase-heading">Your best in tech solutions</h1>
          <p className="lead showcase-line">
            G.R.K techs takes into account all possibilities...
          </p>
        </div>
      </div>
    </div>
  );
};

export default Showcase;
