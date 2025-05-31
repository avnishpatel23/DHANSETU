import React from "react";

function SupportPortal() {
  return (
    <div className="container py-5">
      <h1 className="text-center mb-4">Support Portal</h1>

      {/* Subheading */}
      <p className="text-center text-muted mb-4">
        Track tickets, search for answers, or browse help topics to create a ticket.
      </p>

      {/* Search bar */}
      <div className="row justify-content-center mb-5">
        <div className="col-md-8">
          <input
            type="text"
            className="form-control"
            placeholder="Eg. how do I activate F&O"
          />
        </div>
      </div>

      {/* Quick Track Links */}
      <div className="row mb-5 text-center">
        <div className="col-md-3 mb-3">
          <button className="btn btn-outline-primary w-100">Track Account Opening</button>
        </div>
        <div className="col-md-3 mb-3">
          <button className="btn btn-outline-primary w-100">Track Segment Activation</button>
        </div>
        <div className="col-md-3 mb-3">
          <button className="btn btn-outline-primary w-100">Intraday Margins</button>
        </div>
        <div className="col-md-3 mb-3">
          <button className="btn btn-outline-primary w-100">Kite User Manual</button>
        </div>
      </div>

      {/* Featured Section */}
      <div className="mb-5">
        <h4 className="mb-3">📌 Featured</h4>
        <ul className="list-unstyled">
          <li className="mb-2">
            <strong>Latest Intraday leverages and Square-off timings</strong>
          </li>
          <li>
            <strong>Surveillance measure on scrips – May 2025</strong>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default SupportPortal;
