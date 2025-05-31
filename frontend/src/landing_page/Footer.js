import React from "react";

function Footer() {
  return (
    <footer style={{ backgroundColor: "rgb(250, 250, 250)" }}>
      <div className="container border-top mt-5">
        <div className="row mt-5">
          <div className="col">
            <img src="media\images\green dhan.png" style={{ width: "50%" }} />
            <p>
              &copy; DhanSetu All rights reserved.
            </p>

            
            <div className="row mt-3">
              <div className="col text-center">
                <i className="fa-brands fa-x-twitter"></i>
              </div>
              <div className="col text-center">
                <i className="fa-brands fa-square-facebook"></i>
              </div>
              <div className="col text-center">
                <i className="fa-brands fa-instagram"></i>
              </div>
              <div className="col text-center">
                <i className="fa-brands fa-linkedin-in"></i>
              </div>
            </div>

            
            <div className="row mt-3">
              <div className="col text-center">
                <i className="fa-brands fa-youtube"></i>
              </div>
              <div className="col text-center">
                <i className="fa-brands fa-whatsapp"></i>
              </div>
              <div className="col text-center">
                <i className="fa-brands fa-telegram"></i>
              </div>
            </div>
          </div>

          <div className="col">
            <p>Company</p>
            <a href="http://localhost:3000/about" className="no-underline">
              About
            </a>
            <br />
            <a href="http://localhost:3000/products" className="no-underline">
              Products
            </a>
            <br />
            <a href="http://localhost:3000/pricing" className="no-underline">
              Pricing
            </a>
            <br />
            <a href="http://localhost:3001/" className="no-underline">
              Kite
            </a>
            {/* <br />
            <a href="https://zerodha.tech/" className="no-underline">
              DhanSetu.tech
            </a>
            <br />
            <a href="https://zerodha.com/media/" className="no-underline">
              Press & media
            </a>
            <br />
            <a href="https://zerodha.com/cares/" className="no-underline">
              DhanSetu cares (CSR)
            </a> */}
            <br />
          </div>
          <div className="col">
            <p>Support</p>
            <a href="http://localhost:3000/support" className="no-underline">
              Contact us
            </a>
            {/* <br />
            <a href="http://localhost:3000/support" className="no-underline">
              Support portal
            </a>
            <br />
            <a href="https://zerodha.com/z-connect/" className="no-underline">
              D-Connect blog
            </a>
            <br />
            <a href="http://localhost:3000/pricing" className="no-underline">
              List of charges
            </a>
            <br />
            <a href="" className="no-underline">
              Downloads & resources
            </a>
            <br />
            <a href="" className="no-underline">
              Videos
            </a>
            <br />
            <a href="" className="no-underline">
              Market overview
            </a>
            <br />
            <a href="" className="no-underline">
              How to file a complaint?
            </a>
            <br />
            <a href="" className="no-underline">
              Status of your complaints
            </a>
            <br /> */}
          </div>
          <div className="col">
            <p>Account</p>
            <a href="http://localhost:3000/signup" className="no-underline">
              Open an account
            </a>
            <br />
            {/* <a href="" className="no-underline">
              Fund transfer
            </a>
            <br /> */}
          </div>
        </div>
        <div className="mt-5 text-muted" style={{ fontSize: "14px" }}>
          <div className="mt-5 text-muted" style={{ fontSize: "11.40px" }}>
            <p>
              DhanSetu Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI
              Registration no.: INZ000031633 CDSL/NSDL: Depository services
              through DhanSetu Broking Ltd. – SEBI Registration no.:
              IN-DP-431-2019 Commodity Trading through DhanSetu Commodities Pvt.
              Ltd. MCX: 46025; NSE-50001 – SEBI Registration no.: INZ000038238
              Registered Address: DhanSetu Broking Ltd., #153/154, 4th Cross,
              Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase,
              Bengaluru - 560078, Karnataka, India. For any complaints
              pertaining to securities broking please write to{" "}
              <a href="mailto:complaints@zerodha.com" className="no-underline">
                complaints@dhansetu.com
              </a>
              , for DP related to{" "}
              <a href="mailto:dp@zerodha.com" className="no-underline">
                dp@dhansetu.com
              </a>
              . Please ensure you carefully read the Risk Disclosure Document as
              prescribed by SEBI | ICF
            </p>

            <p>
              Procedure to file a complaint on{" "}
              <a href="SEBI SCORES" className="no-underline">
                SEBI SCORES
              </a>
              : Register on SCORES portal. Mandatory details for filing
              complaints on SCORES: Name, PAN, Address, Mobile Number, E-mail
              ID. Benefits: Effective Communication, Speedy redressal of the
              grievances
            </p>

            <p>
              <a
                href="Smart Online Dispute Resolution"
                className="no-underline"
              >
                Smart Online Dispute Resolution
              </a>{" "}
              |{" "}
              <a href="Grievances Redressal Mechanism" className="no-underline">
                Grievances Redressal Mechanism
              </a>
            </p>

            <p>
              Investments in securities market are subject to market risks; read
              all the related documents carefully before investing.
            </p>

            <p>
              Attention investors: 1) Stock brokers can accept securities as
              margins from clients only by way of pledge in the depository
              system w.e.f September 01, 2020. 2) Update your e-mail and phone
              number with your stock broker / depository participant and receive
              OTP directly from depository on your e-mail and/or mobile number
              to create pledge. 3) Check your securities / MF / bonds in the
              consolidated account statement issued by NSDL/CDSL every month.
            </p>

            <p>
              "Prevent unauthorised transactions in your account. Update your
              mobile numbers/email IDs with your stock brokers. Receive
              information of your transactions directly from Exchange on your
              mobile/email at the end of the day. Issued in the interest of
              investors. KYC is one time exercise while dealing in securities
              markets - once KYC is done through a SEBI registered intermediary
              (broker, DP, Mutual Fund etc.), you need not undergo the same
              process again when you approach another intermediary." Dear
              Investor, if you are subscribing to an IPO, there is no need to
              issue a cheque. Please write the Bank account number and sign the
              IPO application form to authorize your bank to make payment in
              case of allotment. In case of non allotment the funds will remain
              in your bank account. As a business we don't give stock tips, and
              have not authorized anyone to trade on behalf of others. If you
              find anyone claiming to be part of Zerodha and offering such
              services, please{" "}
              <a href="create a ticket here" className="no-underline">
                create a ticket here
              </a>
              .
            </p>
          </div>
          <div className="col-12 text-center mt-5">
            <div className="footer-links">
              <a href="https://www.nseindia.com/" className="no-underline footer-link">
                NSE
              </a>
              <a href="https://www.bseindia.com/" className="no-underline footer-link">
                BSE
              </a>
              <a href="https://www.mcxindia.com/" className="no-underline footer-link">
                MCX
              </a>
              {/* <a href="#" className="no-underline footer-link">
                Terms & Conditions
              </a>
              <a href="#" className="no-underline footer-link">
                Policies & Procedures
              </a>
              <a href="#" className="no-underline footer-link">
                Privacy Policy
              </a>
              <a href="#" className="no-underline footer-link">
                Disclosure
              </a>
              <a href="#" className="no-underline footer-link">
                For Investor's Attention
              </a>
              <a href="#" className="no-underline footer-link">
                Investor Charter
              </a> */}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
