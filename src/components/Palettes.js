import React from "react";

function Palettes(props) {
  return (
    <>
      <label className="section__desing--boxcolor" htmlFor="colorpalette1">
        <input
          onChange={props.handlePalette}
          className="section__design--check js-colorPalette1"
          type="radio"
          value="g"
          name="design-color"
        />
        <ul className="section__design--palette">
          <li className="box color1-1"></li>
          <li className="box color1-2"></li>
          <li className="box color1-3"></li>
        </ul>
      </label>
      <label className="section__desing--boxcolor" htmlFor="colorpalette2">
        <input
          onChange={props.handlePalette}
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
      <label className="section__desing--boxcolor" htmlFor="colorpalette3">
        <input
          onChange={props.handlePalette}
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
export default Palettes;
