import React from "react";

function Hero() {
  return (
    <div className="container">
      <div className="row p-5 mt-5 mb-5">
        <h1 className="fs-2 text-center">
          We pioneered the discount broking model in India
          <br />
          Now, we are breaking ground with our technology.
        </h1>
      </div>

      <div
        className="row p-5 mt-5 border-top"
        style={{ lineHeight: "1.8", fontSize: "1.2em" }}
      >
        <div className="col-6 p-5" style={{ fontSize: "17px" }}>
          <p style={{ color: "#4a4a4a" }}>
            We built DhanSetu with a clear mission: to remove the barriers to
            smart investing and trading in India. In a landscape often crowded
            with hidden fees, outdated platforms, and complex tools, DhanSetu
            offers a refreshing alternative—one that’s simple, modern, and built
            for you. Whether you're a first-time investor or an experienced
            trader, our platform delivers a seamless experience with intuitive
            design, transparent pricing, and powerful tools—all in one place.
          </p>
          <p style={{ color: "#4a4a4a" }}>
            Today, our disruptive pricing models and in-house technology have
            made us the biggest stock broker in India.
          </p>
          <p style={{ color: "#4a4a4a" }}>
            No hidden charges. No confusing fine print. Just clear, competitive
            pricing. From beginner-friendly features to advanced tools for
            seasoned traders, we’ve got you covered.
          </p>
        </div>
        <div className="col-6 p-5" style={{ fontSize: "17px" }}>
          <p style={{ color: "#4a4a4a" }}>
            At DhanSetu, we’re not just a platform—we’re a community. We believe
            that knowledge should be open and accessible, which is why we’re
            working on educational initiatives and content to help Indian
            investors grow confidently. Stay tuned as we expand, invest in new
            ideas, and work toward creating a robust ecosystem for financial
            growth in India.
          </p>
          <p style={{ color: "#4a4a4a" }}>
            We’re not here to follow trends—we’re here to set new ones. Our team
            continuously listens, learns, and builds to meet the needs of our
            users.
          </p>
          <p style={{ color: "#4a4a4a" }}>
            Our Vision To democratize investing by making high-quality tools
            accessible to every Indian—no matter their background or experience.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
