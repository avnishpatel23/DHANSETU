import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

const linkStyle = {
  color: "white",
  textDecoration: "none",
  display: "block",
  padding: "8px 12px",
  cursor: "pointer",
};

function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const buttonRef = useRef(null);

  const toggleDropdown = (forceClose = false) => {
    if (forceClose) {
      setDropdownOpen(false);
    } else {
      setDropdownOpen((prev) => !prev);
    }
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setDropdownOpen(false);
      }
    }

    if (dropdownOpen) {
      window.addEventListener("click", handleClickOutside);
    } else {
      window.removeEventListener("click", handleClickOutside);
    }

    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, [dropdownOpen]);

  return (
    <nav
      className="navbar navbar-expand-lg border-bottom"
      style={{ backgroundColor: "#1e1e1e" }}
    >
      <div className="container p-2 d-flex justify-content-between align-items-center">
        <Link className="navbar-brand" to="/">
          <img src="media\images\green dhan.png" style={{ width: "25%"}} alt="Logo" />
        </Link>

        <div className="d-flex" role="search">
          <ul className="navbar-nav mb-lg-0 d-flex align-items-center">
            {/* Original Nav Links */}
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/signup">
                Signup
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="http://localhost:3001/">
                Kite/Dashboard
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/products">
                Products
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/pricing">
                Pricing
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/support">
                Support
              </Link>
            </li>

            {/* Menu Icon Button with Dropdown */}
            <li className="nav-item" style={{ position: "relative" }}>
              <button
                type="button"
                onClick={() => toggleDropdown()}
                ref={buttonRef}
                className="btn btn-link nav-link"
                style={{
                  color: "white",
                  fontSize: "1.5rem",
                  padding: "0",
                  border: "none",
                }}
                aria-label="Toggle menu"
                aria-expanded={dropdownOpen}
              >
                <i className="fa-solid fa-bars" aria-hidden="true" />
              </button>

              {dropdownOpen && (
                <ul
                  ref={dropdownRef}
                  style={{
                    position: "absolute",
                    top: "2.5rem",
                    right: 0,
                    backgroundColor: "#66B2B2",
                    padding: "10px 16px",
                    borderRadius: "6px",
                    listStyle: "none",
                    boxShadow: "0 4px 8px rgba(0,0,0,0.15)",
                    zIndex: 1000,
                    minWidth: "260px",
                    maxHeight: "400px",
                    overflowY: "auto",
                  }}
                >
                  {/* Profile Section */}
                  <li
                    style={{
                      padding: "6px 0",
                      fontWeight: "bold",
                      color: "white",
                      borderBottom: "1px solid #4a9a9a",
                    }}
                  >
                    Profile
                  </li>
                  <li>
                    <Link to="/profile" style={linkStyle} onClick={() => toggleDropdown(true)}>
                      View Profile Details
                    </Link>
                  </li>

                  {/* Trading Related */}
                  <li
                    style={{
                      padding: "6px 0",
                      fontWeight: "bold",
                      color: "white",
                      borderTop: "1px solid #4a9a9a",
                      borderBottom: "1px solid #4a9a9a",
                      marginTop: "10px",
                    }}
                  >
                    Trading Related
                  </li>
                  <li>
                    <Link to="http://localhost:3001/" style={linkStyle} onClick={() => toggleDropdown(true)}>
                      Dashboard
                    </Link>
                  </li>
                  <li>
                    <Link to="http://localhost:3001/holdings" style={linkStyle} onClick={() => toggleDropdown(true)}>
                      Holdings
                    </Link>
                  </li>
                  <li>
                    <Link to="http://localhost:3001/orders" style={linkStyle} onClick={() => toggleDropdown(true)}>
                      Orders
                    </Link>
                  </li>
                  <li>
                    <Link to="http://localhost:3001/funds" style={linkStyle} onClick={() => toggleDropdown(true)}>
                      Funds / Wallet
                    </Link>
                  </li>
                  <li>
                    <Link to="http://localhost:3001/positions" style={linkStyle} onClick={() => toggleDropdown(true)}>
                      Positions
                    </Link>
                  </li>

                  {/* Research & Tools */}
                  <li
                    style={{
                      padding: "6px 0",
                      fontWeight: "bold",
                      color: "white",
                      borderTop: "1px solid #4a9a9a",
                      borderBottom: "1px solid #4a9a9a",
                      marginTop: "10px",
                    }}
                  >
                    Research & Tools
                  </li>
                  <li>
                    <Link to="/news" style={linkStyle} onClick={() => toggleDropdown(true)}>
                      News
                    </Link>
                  </li>
                  <li>
                    <Link to="/charts" style={linkStyle} onClick={() => toggleDropdown(true)}>
                      Charts
                    </Link>
                  </li>
                  <li>
                    <Link to="/stock-screener" style={linkStyle} onClick={() => toggleDropdown(true)}>
                      Stock Screener
                    </Link>
                  </li>
                  <li>
                    <Link to="/reports" style={linkStyle} onClick={() => toggleDropdown(true)}>
                      Reports
                    </Link>
                  </li>
                  <li>
                    <Link to="/alerts" style={linkStyle} onClick={() => toggleDropdown(true)}>
                      Alerts
                    </Link>
                  </li>
                </ul>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
