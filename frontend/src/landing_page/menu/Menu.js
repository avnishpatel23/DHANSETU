import React, { useState } from "react";
import { Link } from "react-router-dom";

function Menu() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  return (
    <nav
      className="navbar navbar-expand-lg border-bottom"
      style={{ backgroundColor: "#4ade80" }} // light teal
    >
      <div className="container p-2 d-flex justify-content-between align-items-center">
        <Link className="navbar-brand" to="/">
          <img
            src="media/images/logo.svg"
            style={{ width: "25%" }}
            alt="Logo"
          />
        </Link>

        {/* Menu Icon */}
        <div style={{ position: "relative" }}>
          <button
            onClick={toggleDropdown}
            className="btn btn-transparent"
            aria-label="Toggle menu"
            style={{ fontSize: "1.5rem", color: "white", border: "none", background: "none" }}
          >
            <i className="fa-solid fa-bars"></i>
          </button>

          {/* Dropdown Menu */}
          {dropdownOpen && (
            <ul
              style={{
                position: "absolute",
                right: 0,
                top: "2.5rem",
                backgroundColor: "#4ade80",
                listStyle: "none",
                padding: "10px",
                borderRadius: "6px",
                boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                minWidth: "150px",
                zIndex: 1000,
              }}
            >
              <li>
                <Link
                  to="/signup"
                  onClick={() => setDropdownOpen(false)}
                  style={{ color: "white", textDecoration: "none", display: "block", padding: "8px 12px" }}
                >
                  Signup
                </Link>
              </li>
              <li>
                <Link
                  to="http://localhost:3001/"
                  onClick={() => setDropdownOpen(false)}
                  style={{ color: "white", textDecoration: "none", display: "block", padding: "8px 12px" }}
                >
                  Kite/Dashboard
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  onClick={() => setDropdownOpen(false)}
                  style={{ color: "white", textDecoration: "none", display: "block", padding: "8px 12px" }}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/products"
                  onClick={() => setDropdownOpen(false)}
                  style={{ color: "white", textDecoration: "none", display: "block", padding: "8px 12px" }}
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  to="/pricing"
                  onClick={() => setDropdownOpen(false)}
                  style={{ color: "white", textDecoration: "none", display: "block", padding: "8px 12px" }}
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  to="/support"
                  onClick={() => setDropdownOpen(false)}
                  style={{ color: "white", textDecoration: "none", display: "block", padding: "8px 12px" }}
                >
                  Support
                </Link>
              </li>
            </ul>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Menu;
