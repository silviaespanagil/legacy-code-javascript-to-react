import "../stylesheets/App.scss";
import React, { useState } from "react";
import Header from "./Header.js";
import Main from "./Main.js";
import Footer from "./Footer.js";

function App() {
  return (
    <>
      <div className="cards-page">
        <Header />
        <Main />
        <Footer />
      </div>
      ;
    </>
  );
}

export default App;
