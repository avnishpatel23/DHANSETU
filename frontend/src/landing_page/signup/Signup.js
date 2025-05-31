import React, { useState } from 'react';
import './Signup.css'; // Importing CSS

function Signup() {
  const [phone, setPhone] = useState('');

  const handleInput = (e) => {
    let value = e.target.value.replace(/[^0-9]/g, ''); // Remove non-digits
    if (value.length > 10) {
      value = value.slice(0, 10); // Limit to 10 digits
    }
    setPhone(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (phone.length !== 10) {
      alert('Please enter a valid 10-digit mobile number.');
      return;
    }
    // Proceed with OTP sending or next steps
    alert(`Sending OTP to +91 ${phone}`);
  };

  return (
    <div className="signup-container">
      {/* Left Section */}
      <div className="signup-left">
        <h1 className="signup-title">
          Open a free demat and<br />
          trading account online
        </h1>
        <p className="signup-subtitle">
          Start investing brokerage free and join a community of 1.6+ crore investors and traders
        </p>
        <img
          src="media\images\account_open.svg"
          alt="Zerodha Mockup"
          className="signup-image"
        />
      </div>

      {/* Right Section */}
      <div className="signup-right">
        <div className="signup-form-container">
          <h2 className="form-title">Signup now</h2>
          <p className="form-subtitle">Or track your existing application</p>

          <form className="form" onSubmit={handleSubmit}>
            <div className="input-group">
              <div className="country-code">🇮🇳 +91</div>
              <input
                type="text"
                placeholder="Enter your mobile number"
                className="phone-input"
                value={phone}
                onChange={handleInput}
                maxLength={10}
                inputMode="numeric" // Mobile numeric keyboard
              />
            </div>
            <button type="submit" className="submit-button">
              Get OTP
            </button>
          </form>

          <p className="disclaimer">
            By proceeding, you agree to the DhanSetu <a href="#">terms</a> & <a href="#">privacy policy</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Signup;
