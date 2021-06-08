import React from "react";
import "../stylesheets/App.scss";
import Form from "./Form.js";
import CardPreview from "./PreviewCard.js";

class Main extends React.Component {
  render() {
    return (
      <>
        <main className="main-cards">
          <div className="main-cards__container">
            <CardPreview />
            <Form />
          </div>
        </main>
      </>
    );
  }
}

export default Main;
