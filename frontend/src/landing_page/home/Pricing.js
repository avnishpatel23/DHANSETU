import React from "react";

function Pricing() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-4">
          <h1 className="mb-3 fs-2">Unbeatable Pricing</h1>
          <p>
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.
          </p>
          <a href="http://localhost:3000/pricing" style={{ textDecoration: "none" }}>
            See Pricing{" "}
            <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
          </a>
        </div>
        <div className="col-2"></div>
        <div className="col-6 mb-5">
          <div className="row text-center">
            <div className="col">
             <img src="media/images/pricingEquity.svg" />
              <p style={{ fontSize: "0.8rem" }}>Free account
              opening</p>
            </div>
            <div className="col">
             <img src="media/images/pricingEquity.svg" />
              <p style={{ fontSize: "0.8rem" }}>Free equity delivery
              and direct mutual funds</p>
            </div>
            <div className="col">
            <img src="media/images/intradayTrades.svg" />
              <p style={{ fontSize: "0.8rem" , marginLeft: "10px" }}>
              Intraday and
              F&O
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
