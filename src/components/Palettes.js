import React from "react";
import "../stylesheets/App.scss";

class Palettes extends React.Component {
  render() {
    return (
      <>
        <label className="section__desing--boxcolor" for="colorpalette1">
          <input
            className="section__design--check js-colorPalette1"
            type="radio"
            value="g"
            name="design-color"
            checked
          />
          <ul className="section__design--palette">
            <li className="box color1-1"></li>
            <li className="box color1-2"></li>
            <li className="box color1-3"></li>
          </ul>
        </label>
        <label className="section__desing--boxcolor" for="colorpalette2">
          <input
            className="section__design--check js-colorPalette2"
            type="radio"
            value="r"
            name="design-color"
          />
          <ul className="section__design--palette">
            <li className="box color2-1"></li>
            <li className="box color2-2"></li>
            <li className="box color2-3"></li>
          </ul>
        </label>
        <label className="section__desing--boxcolor" for="colorpalette3">
          <input
            className="section__design--check js-colorPalette3"
            type="radio"
            value="b"
            name="design-color"
          />
          <ul className="section__design--palette">
            <li className="box color3-1"></li>
            <li className="box color3-2"></li>
            <li className="box color3-3"></li>
          </ul>
        </label>
      </>
    );
  }
}

export default Palettes;
