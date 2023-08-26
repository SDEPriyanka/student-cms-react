import React from "react";

export const Aboutus = () => {
  return (
    <div className="aboutuswrapper">
      <div className="container about-section">
      <div className="row">

        <div className="left col-md-6">
          <img
            src="https://images03.nicepage.com/c461c07a441a5d220e8feb1a/483b4e1e31f25f7f9bda4d9a/3546919min.jpg"
            alt=""
          ></img>
        </div>
        <div className="right col-md-6">
          <div className="desc-section">
            <div className="right-heading">
              <p>INNOVATIVE BUSINESS</p>
              <h4>About Us</h4>
            </div>
            <div className="right-text">
              <p>
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur.
              </p>
            </div>
            <div className="btn">
              <button>LEARN MORE</button>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};
