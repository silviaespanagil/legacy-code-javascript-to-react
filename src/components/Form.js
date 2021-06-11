import React, { useState } from "react";
import Design from "./Design.js";
import Fill from "./Fill.js";
import Share from "./Share.js";
import "../stylesheets/App.scss";

function Form(props) {
  return (
    <>
      <section className="sectionForm">
        <form className="main-cards__form">
          <Design handlePalette={props.handlePalette} />
          <Fill
            handleName={props.handleName}
            handleMail={props.handleMail}
            handleJob={props.handleJob}
            handlePhone={props.handlePhone}
            handleLi={props.handleLi}
            handleGithub={props.handleGithub}
          />
          <Share />
        </form>
      </section>
    </>
  );
}
{
}

export default Form;
