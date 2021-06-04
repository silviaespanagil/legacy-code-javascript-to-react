import React from "react";
import Design from "./Design.js";
import Fill from "./Fill.js";
import Share from "./Share.js";
import "../stylesheets/App.scss";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = { className: "" };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    console.log("hice clic");
    this.setState((prevState) => {
      let changeClass =
        prevState.className === "collapsible--close"
          ? "collapsible--open"
          : "collapsible--close";
      return { className: changeClass };
    });
  }
  render() {
    return (
      <>
        <section className="sectionForm">
          <form className="main-cards__form">
            <Design handleClick={this.handleClick} state={this.state} />
            <Fill handleClick={this.handleClick} state={this.state} />
            <Share handleClick={this.handleClick} state={this.state} />
          </form>
        </section>
      </>
    );
  }
}

export default Form;
