import React from "react";
import "../stylesheets/App.scss";

class Design extends React.Component {
  render() {
    return (
      <>
        <section className="section__design">
          <div className="section__design--contain js-collapsible-header">
            <h2 className="section__design--title">
              <i className="far fa-object-ungroup icon--design"></i>
              diseña
            </h2>
            <span className="icon--angle">
              <i className="fa fa-chevron-down js-arrow"></i>
            </span>
          </div>
          <div className="section__design--box js-collapsible collapsible--close">
            <h3 className="section__design--subtitle">Colores</h3>
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
          </div>
        </section>
      </>
    );
  }
}

export default Design;
