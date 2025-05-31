import React from "react";

function SupportPortal() {
  return (
    <div className="container py-5">
      <h1 className="text-center mb-4">DhanSetu Support Portal</h1>

      {/* Search bar */}
      <div className="mb-4">
        <input
          type="text"
          className="form-control"
          placeholder="Eg. How do I activate F&O?"
        />
      </div>

      {/* Featured Section */}
      <div className="mb-5">
        <h3>Featured</h3>
        <ul>
          <li>📌 Latest Intraday leverages and Square-off timings</li>
          <li>📌 Surveillance measure on scrips - May 2025</li>
        </ul>
      </div>

      {/* Help Categories */}
      <div className="row">
        <div className="col-md-4">
          <h4><i class="fa fa-plus-circle" aria-hidden="true"></i> Account Opening</h4>
          <ul>
            <li>Getting Started</li>
            <li>Online Process</li>
            <li>Charges</li>
            <li>Company, Partnership & HUF</li>
            <li>NRIs</li>
          </ul>
        </div>
        <div className="col-md-4">
          <h4> <i class="fa fa-user" aria-hidden="true"></i> Your DhanSetu Account</h4>
          <ul>
            <li>Login Credentials</li>
            <li>Profile & Modifications</li>
            <li>CMR & DP ID</li>
            <li>Nomination</li>
            <li>Transfer/Conversion of Shares</li>
          </ul>
        </div>
        <div className="col-md-4">
          <h4><i class="fa fa-line-chart" aria-hidden="true"></i> Trading and Markets</h4>
          <ul>
            <li>FAQs</li>
            <li>Order Types</li>
            <li>Kite Features</li>
            <li>Corporate Actions</li>
          </ul>
        </div>
      </div>

      <div className="row mt-4">
        <div className="col-md-4">
          <h4><i class="fa fa-credit-card" aria-hidden="true"></i> Funds</h4>
          <ul>
            <li>Withdrawal</li>
            <li>Adding Funds</li>
            <li>Bank Account Linking</li>
            <li>eMandates</li>
          </ul>
        </div>
        <div className="col-md-4">
          <h4> <i class="fa fa-gg-circle" aria-hidden="true"></i> Console</h4>
          <ul>
            <li>IPO</li>
            <li>Portfolio</li>
            <li>Reports</li>
            <li>Referral Program</li>
          </ul>
        </div>
        <div className="col-md-4">
          <h4> <i class="fa fa-circle" aria-hidden="true"></i> Coin (Mutual Funds)</h4>
          <ul>
            <li>Understanding Coin</li>
            <li>Coin App & Web</li>
            <li>Transactions & Reports</li>
            <li>NPS (National Pension Scheme)</li>
          </ul>
        </div>
      </div>

      {/* Ticket Tracking */}
      <div className="mt-5 border-top pt-4">
        <h3>Need more help?</h3>
        <p>To create a support ticket, please select a relevant topic above or browse our FAQs.</p>
        <button className="btn btn-primary">Track/Create a Ticket</button>
      </div>
    </div>
  );
}

export default SupportPortal;
