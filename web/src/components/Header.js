import React from "react";
import logoVegan from "../images/vegan-deburguer-icon.png";

class Header extends React.Component {
  render() {
    return (
      <>
        <header className="header">
          <a href="/" alt="Ir a la home">
            <img className="header__imag" src={logoVegan} alt="logoVegan" />
          </a>
        </header>
      </>
    );
  }
}

export default Header;
