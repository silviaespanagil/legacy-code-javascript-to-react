import React from "react";
import logoVegan from "../images/vegan-deburguer-icon.png";

class Header extends React.Component {
  render() {
    return (
      <>
        <header className="header">
          <img className="header__imag" src={logoVegan} alt="image" />
        </header>
      </>
    );
  }
}

export default Header;
