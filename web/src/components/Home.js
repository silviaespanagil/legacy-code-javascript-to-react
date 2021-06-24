import { Link } from "react-router-dom";
import "../stylesheets/App.scss";
import Footer from "./Footer";
import logo from "../images/vegan-deburguer-icon.png";

const Home = () => {
  return (
    <body className="landing-page">
      <main className="main">
        <img className="main__img" src={logo} alt="logo" />
        <h1 className="main__title">Crea tu tarjeta de visita</h1>
        <p className="main__subtitle">
          Crea mejores contactos profesionales de forma fácil y cómoda
        </p>
        <div className="main__container">
          <div>
            <i className="main__icon far fa-object-ungroup"></i>
            <div>
              <span className="main__text">Diseña</span>
            </div>
          </div>
          <div>
            <i className="main__icon far fa-keyboard"></i>
            <div>
              <span className="main__text">Rellena</span>
            </div>
          </div>
          <div>
            <i className="main__icon fas fa-share-alt"></i>
            <div>
              <span className="main__text">Comparte</span>
            </div>
          </div>
        </div>
        <Link className="main__button" to="/card">
          Comenzar
        </Link>
      </main>
      <Footer />
    </body>
  );
};
export default Home;
