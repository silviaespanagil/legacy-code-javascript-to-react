import React from "react";
import FetchData from "../services/FetchData.js";

class Share extends React.Component {
  constructor(props) {
    super(props);
    this.state = { className: "collapsible--close", url: "" };
    this.handleClick = this.handleClick.bind(this);
    this.handleShare = this.handleShare.bind(this);
  }

  handleClick() {
    this.setState((prevState) => {
      let changeClass =
        prevState.className === "collapsible--close"
          ? "collapsible--open"
          : "collapsible--close";
      return { className: changeClass };
    });
  }

  handleShare(ev) {
    ev.preventDefault();
    this.data = this.props;
    /*let data = {
      name: this.props.name,
      job: this.props.job,
      phone: this.props.phone,
      email: this.props.email,
      linkedin: this.props.linkedin,
      github: this.props.github,
      photo: this.props.photo,
    };*/

    FetchData(this.data).then((response) => {
      if (response.success !== false) {
        console.log(this.data);
        console.log("faltandatos");
      } else {
        console.log("Se envio bien yupi");
        console.log(this.data);
        return this.setState({ url: response.cardURL });
      }
    });
    //Si nos da ok pq no da el link -- tampoco da ok :S
    console.log(`${this.state.url}`);
  }
  render() {
    return (
      <>
        <section className="share__container">
          <div
            onClick={this.handleClick}
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

          <div className={`js-collapsible ${this.state.className}`}>
            <div className="share__create">
              <button
                className="share__create--button js-create-btn"
                type="submit"
                value="Generar tarjeta"
                onClick={this.handleShare}
              >
                <i className="far fa-address-card" title="Crea"></i>
                Crear tarjeta
              </button>
            </div>

            <div className="share__result js-twitter-share js-share-hidden js-card-result">
              <p className="share__result--title">La tarjeta ha sido creada:</p>
              <a
                className="share__result--link js-card-link"
                href={this.state.url}
              ></a>
              <button className="share__result--twitter js-twitter-btn">
                <i className="fa fa-twitter" title="Comparte en Twitter"></i>
                <a
                  href="https://twitter.com/?lang=es"
                  className="share__result--twitterlink js-twitter-link"
                  data-show-count="false"
                  target="_blank"
                  rel="noreferrer"
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
