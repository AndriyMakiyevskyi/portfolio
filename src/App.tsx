import React from "react";
import "./App.css";
import Header from "./components/header/Header";
import IAmTester from "./components/iamtester/IAmTester";
import Offer from "./components/offer/Offer";
import Difference from "./components/difference/Difference";
import SuperPower from "./components/superpower/SuperPower";
import Footer from "./components/footer/Footer";

const App = () => {
  return (
    <div className="App">
      <Header />
      <IAmTester />
      <Offer/>
      <Difference/>
      <SuperPower/>
      <Footer/>
    </div>
  );
};

export default App;
