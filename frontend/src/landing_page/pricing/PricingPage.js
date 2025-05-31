import React from "react";
import Hero from "./Hero";
import Brokerage from "./Brokerage";
import OpenAccount from "../OpenAccount";
import StockTradingCalculator from "./BrokerageCalculator";
import BrokerageCalculator from "./BrokerageCalculator";

function PricingPage() {
  return (
    <>
      <Hero />
      <OpenAccount />
      <Brokerage />
      <BrokerageCalculator/>
    </>
  );
}

export default PricingPage;
