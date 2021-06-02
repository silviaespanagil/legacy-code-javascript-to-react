import React from "react";
import Palettes from "./Palettes.js";
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
            <Palettes />
          </div>
        </section>
      </>
    );
  }
}

export default Design;
