import React from "react";
import "../stylesheets/App.scss";

class Share extends React.Component {
  constructor(props) {
    super(props);
    this.state = { className: "collapsible--close" };
    this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleOnClick() {
    this.props.handleClick();
  }
  render() {
    return (
      <>
        <section className="share__container">
          <div
            onClick={this.handleOnClick}
            className="share js-collapsible-header"
          >
            <div className="share__header">
              <i
                className="share__header--icon fas fa-share-alt"
                title="Comparte"
              ></i>
              <h2 className="share__header--title">Comparte</h2>
            </div>
            <span className="share__arrow">
              <i className="fa fa-chevron-down arrow js-arrow"></i>
            </span>
          </div>

          <div className={`js-collapsible ${this.props.state.className}`}>
            <div className="share__create">
              <button
                className="share__create--button js-create-btn"
                type="submit"
                value="Generar tarjeta"
              >
                <i className="far fa-address-card" title="Crea"></i>
                Crear tarjeta
              </button>
            </div>

            <div className="share__result js-twitter-share js-share-hidden js-card-result">
              <p className="share__result--title">La tarjeta ha sido creada:</p>
              <a className="share__result--link js-card-link" href=""></a>
              <button className="share__result--twitter js-twitter-btn">
                <i className="fa fa-twitter" title="Comparte en Twitter"></i>
                <a
                  href="https://twitter.com/?lang=es"
                  className="share__result--twitterlink js-twitter-link"
                  data-show-count="false"
                  target="_blank"
                >
                  Compartir en twitter
                </a>
              </button>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default Share;
