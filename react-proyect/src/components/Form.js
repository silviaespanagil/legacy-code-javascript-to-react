import React from "react";
import Design from "./Design.js";
import Fill from "./Fill.js";
import Share from "./Share.js";
import "../stylesheets/App.scss";

class Form extends React.Component {
  render() {
    return (
      <>
        <section className="sectionForm">
          <form className="main-cards__form">
            <Design />
            <Fill />
            <Share />
          </form>
        </section>
      </>
    );
  }
}

export default Form;
