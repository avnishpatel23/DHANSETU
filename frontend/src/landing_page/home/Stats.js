import React from "react";

function Stats() {
  return (
    <div className="container p-3">
      <div className="row p-5">
        <div className="col-6 p-5">
          <h1 className="fs-2 mb-5">Trust with confidence</h1>
          <h2 className="fs-4">Trade with Simplicity and Confidence</h2>
          <p className="text-muted">
           Built for modern investors, our platform offers a clean, intuitive interface for managing your trades, investments, and market insights—all in one place.
          </p>
          <h2 className="fs-4">No Clutter. Just Clarity.</h2>
          <p className="text-muted">
          We believe in transparency, not distractions. No pushy notifications, no confusing jargon. Just tools that help you make smart trading decisions.
          </p>
          <h2 className="fs-4">A Platform, Not Just an App</h2>
          <p className="text-muted">
          We are building more than a trading tool. With continuous improvements and upcoming features, our goal is to give you a complete ecosystem for wealth building.
          </p>
          <h2 className="fs-4">Focused on Your Growth</h2>
          <p className="text-muted">
           Whether you are a beginner or an experienced trader, our mission is to help you grow with every decision. Smart tools, real-time data, and helpful insights—all at your fingertips.
          </p>
        </div>
        <div className="col-6 p-5">
          <img src="media/images/ecosystem.png" style={{ width: "110%" }} />
          <div className="text-center">
            <a href="http://localhost:3000/products" className="mx-5" style={{ textDecoration: "none" }}>
              Explore our products{" "}
              <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
            <a href="http://localhost:3001/" style={{ textDecoration: "none" }}>
              Try Kite demo{" "}
              <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stats;