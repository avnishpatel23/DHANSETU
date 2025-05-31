import React from "react";

function Universe() {
  return (
    <div className="container mt-5">
      <div className="row text-center">
        <h1>The DhanSetu Universe</h1>
        <p>
          Extend your trading and investment experience even further with our
          partner platforms
        </p>

        <div className="col-4 p-3 mt-5">
          <img
            src="media\images\fund house.png"
            alt="Zerodha Fundhouse"
            className="img-fluid mb-2"
            style={{ maxWidth: "200px", height: "auto" }}

          />
          <p className="text-small text-muted ">
            Our asset management venture that is creating simple and transparent
            index funds to help you save for your goals.
          </p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img
            src="media\images\sensibull-logo2.svg"
            alt="Sensibull"
            className="img-fluid mb-4"
            style={{ maxWidth: "400px", height: "auto" }}
          />
          <p className="text-small text-muted ">
            Options trading platform that lets you create strategies, analyze
            positions, and examine data points like open interest, FII/DII, and
            more.
          </p>
        </div>
        <div className="col-4 p-3 ">
          <img
            src="media/images/tijori.svg"
            alt="Tijori"
            className="img-fluid"
            style={{ maxWidth: "150px", height: "100px" }}
          />
          <p className="text-small text-muted">
            Investment research platform that offers detailed insights on
            stocks, sectors, supply chains, and more.
          </p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img
            src="media/images/streakLogo.png"
            alt="Streak"
            className="img-fluid mb-3"
            style={{ maxWidth: "160px", height: "auto" }}
          />
          <p className="text-small text-muted">
            Systematic trading platform that allows you to create and backtest
            strategies without coding.
          </p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img
            src="media/images/smallcaseLogo.png"
            alt="Smallcase"
            className="img-fluid mb-3"
            style={{ maxWidth: "250px", height: "auto" }}
          />
          <p className="text-small text-muted">
            Thematic investing platform that helps you invest in diversified
            baskets of stocks on ETFs.
          </p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img
            src="media/images/dittoLogo.png"
            alt="Ditto"
            className="img-fluid mb-3"
            style={{ maxWidth: "140px", height: "auto" }}
          />
          <p className="text-small text-muted">
            and health insurance. No spam and no mis-selling. Sign up for free.
          </p>
        </div>
        <button
          className="p-2 btn btn-primary fs-5 mb-5"
          style={{ width: "20%", margin: "0 auto" }}
          href="http://localhost:3000/signup"
          onClick={() => {
            window.location.href = "http://localhost:3000/signup";
          }}
        >
          Sign up for free
        </button>
      </div>
    </div>
  );
}

export default Universe;
