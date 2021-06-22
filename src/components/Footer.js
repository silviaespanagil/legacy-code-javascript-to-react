import React from "react";
import logo from "../images/logo-adalab.png";

class Footer extends React.Component {
  render() {
    return (
      <>
        <footer className="footer">
          <div className="footer__copy">Vegan Debuggers &copy; 2021</div>
          <img className="footer__image" src={logo} alt="logo-adalab" />
        </footer>
      </>
    );
  }
}

export default Footer;
