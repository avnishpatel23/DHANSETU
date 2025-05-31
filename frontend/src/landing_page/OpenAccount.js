import React from 'react';

function OpenAccount() {
    return ( 
        <div className="container p-5 mb-5">
      <div className="row text-center">
        <h1 className="mt-4 fs-2">Open a DhanSetu account</h1>
        <p className="fs-6 mt-2 mb-4 text-muted">
        Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.
        </p>
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

export default OpenAccount;