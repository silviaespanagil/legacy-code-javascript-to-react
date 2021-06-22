import React, { useState } from "react";
import Palettes from "./Palettes.js";

function Design(props) {
  //desplegable

  const [className, setClassName] = useState("collapsible--close");

  const handleClick = (props) => {
    setClassName(() => {
      let changeClass =
        className === "collapsible--close"
          ? "collapsible--open"
          : "collapsible--close";
      return changeClass;
    });
  };

  //Fin desplegable

  return (
    <>
      <section className="section__design">
        <div
          className="section__design--contain js-collapsible-header"
          onClick={handleClick}
        >
          <h2 className="section__design--title">
            <i className="far fa-object-ungroup icon--design"></i>
            diseña
          </h2>
          <span className="icon--angle">
            <i className="fa fa-chevron-down js-arrow"></i>
          </span>
        </div>
        <div className={`section__design--box js-collapsible ${className}`}>
          <h3 className="section__design--subtitle">Colores</h3>

          <Palettes handlePalette={props.handlePalette} />
        </div>
      </section>
    </>
  );
}

export default Design;
