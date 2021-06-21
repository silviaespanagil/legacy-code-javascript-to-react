import React from "react";
import Design from "./Design.js";
import Fill from "./Fill.js";
import Share from "./Share.js";

function Form(props) {
  return (
    <>
      <section className="sectionForm">
        <form className="main-cards__form">
          <Design handlePalette={props.handlePalette} />
          <Fill {...props} />
          <Share {...props} />
        </form>
      </section>
    </>
  );
}

export default Form;
