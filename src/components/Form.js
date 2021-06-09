import React, { useState } from "react";
import Design from "./Design.js";
import Fill from "./Fill.js";
import Share from "./Share.js";
import "../stylesheets/App.scss";

function Form(props) {
  const [className, setClassName] = useState("collapsible--close");

  function handleClick(ev) {
    console.log("hice clic");
    setClassName((prevState) => {
      let changeClass =
        prevState.className === "collapsible--close"
          ? "collapsible--open"
          : "collapsible--close";
      return { className: changeClass };
    });
  }

  return (
    <>
      <section className="sectionForm">
        <form className="main-cards__form">
          <Design /*handleClick={this.handleClick} state={this.state} */ />
          <Fill />
          <Share />
        </form>
      </section>
    </>
  );
}
{
}

export default Form;
