import React from "react";

function Team() {
  return (
    <div className="container">
      <div className="row p-3 mt-5 border-top">
        <h1 className="text-center">Founder’s Vision</h1>
      </div>

      <div
        className="row p-3 text-muted"
        style={{ lineHeight: "1.8", fontSize: "1.2em" }}
      >
        <div className="col-md-6 p-3 text-center">
          <img
            src="media\images\logo.png"
            alt="Founder"
            style={{ borderRadius: "100%", width: "50%" }}
          />
          <h1 className="mt-4">DHANSETU</h1>
        
        </div>

        <div className="col-md-6 p-3" style={{ fontSize: "17px" }}>
          <blockquote>
            “We created DhanSetu to level the playing field for every Indian
            investor. Investing shouldn’t be overwhelming—it should be
            empowering. Our mission is simple: build tools that make people
            smarter and more confident with money.”
            <footer className="mt-2">— Founder, DhanSetu</footer>
          </blockquote>

          <div className="mt-4">
            <h3>Milestones</h3>
            <ul>
              <li>
                🟢 2025 — DhanSetu launches with a core set of trading tools and
                a clean, minimal UI
              </li>
              <li>🚀 2025 Q2 — Crossed 10,000+ registered users</li>
              <li>
                📈 2025 Q3 — Introduced watchlists, real-time charts, and market
                alerts
              </li>
              <li>🎓 Coming Soon — Launch of our investor education hub</li>
              <li>
                🤝 Planned — Partnering with fintech communities to expand our
                ecosystem
              </li>
            </ul>
          </div>

          <div className="mt-4">
            <h3>Join Us</h3>
            <p>
              DhanSetu isn’t just another trading app. It’s a movement toward
              better, smarter investing in India. <p>We’re excited to have you with
              us on this journey.</p>
            </p>
            <a
              href="http://localhost:3000/signup"
              target="_blank"
              rel="noopener noreferrer"
              className="me-2"
              style={{
                textDecoration: "none",
                color: "white",
                backgroundColor: "#007bff",
                padding: "10px 20px",
                borderRadius: "5px",
              }}
            >
              Signup Now!
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Team;
