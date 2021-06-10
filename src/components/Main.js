import React, { useState } from "react";
import "../stylesheets/App.scss";
import Form from "./Form.js";
import CardPreview from "./PreviewCard.js";

function Main() {
  //funcion recoje valor diseña la escucha
  let [PaletteValue, setPalette] = useState("g");

  let handlePalette = (ev) => {
    setPalette((PaletteValue = ev.currentTarget.value));
  };
  console.log(PaletteValue);
  //pasamos el valor a  card preview
  return (
    <>
      <main className="main-cards">
        <div className="main-cards__container">
          <CardPreview paletteValue={PaletteValue} />
          <Form handlePalette={handlePalette} />
        </div>
      </main>
    </>
  );
}
/*class Main extends React.Component {
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
}*/
export default Main;
