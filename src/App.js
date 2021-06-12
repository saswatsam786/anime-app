import React from "react";
import "./App.css";
import CenterCards from "./centerCards";
import Header from "./header";
import Buttons from "./Buttons";
import Footer from "./footer";

function App() {
  return (
    <div className="App">
      {/* {header} */}
      <Header />
      {/* {centerCards} */}
      <CenterCards />
      {/* {icons} */}
      <Buttons />
      {/* {footer} */}
      <Footer />
    </div>
  );
}

export default App;
