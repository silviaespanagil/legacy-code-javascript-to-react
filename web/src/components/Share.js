import React from "react";
import FetchData from "../services/FetchData.js";

class Share extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      className: "collapsible--close",
      url: "",
      loading: false,
    };
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

    let data = {
      name: this.props.nameValue,
      job: this.props.jobValue,
      phone: this.props.phoneValue,
      email: this.props.mailValue,
      linkedin: this.props.liValue,
      github: this.props.githubValue,
      photo: this.props.image,
      palette: this.props.paletteValue,
    };

    console.log(data);

    this.setState({ loading: true });

    FetchData(data)
      .then((response) => {
        this.setState({ loading: false });
        this.setState({ url: response.cardURL });
      })
      .catch((err) => {
        this.setState({ loading: false });
        // TODO print the error in the UI
        console.error("FetchData error -> ", err);
      });
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
            {this.state.loading ? (
              <div className="share__loading">
                Generando tarjeta, por favor espere...
              </div>
            ) : (
              <div className="share__create">
                <button
                  className="share__create--button js-create-btn"
                  type="submit"
                  value="Generar tarjeta"
                  onClick={this.handleShare}
                >
                  <i className="far fa-address-card" title="Crear tarjeta" />
                  Crear tarjeta
                </button>
              </div>
            )}

            {this.state.url && (
              <div className="share__result js-twitter-share js-card-result">
                <p className="share__result--title">
                  La tarjeta ha sido creada:
                </p>

                <a
                  className="share__result--link js-card-link"
                  href={this.state.url}
                  target="_blank"
                  rel="noreferrer"
                >
                  {this.state.url}
                </a>

                <a
                  className="share__result--link js-card-link"
                  href={this.state.url}
                  target="_blank"
                  rel="noreferrer"
                >
                  Compartir en twitter
                </a>

                <button className="share__result--twitter js-twitter-btn">
                  <i className="fa fa-twitter" title="Comparte en Twitter"></i>
                  <a
                    href={`https://twitter.com/intent/tweet?text="Aquí tenéis mi nueva tarjeta virtual"&url=${this.state.url}`}
                    className="share__result--twitterlink js-twitter-link"
                    data-show-count="false"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Compartir en twitter
                  </a>
                </button>
              </div>
            )}
          </div>
        </section>
      </>
    );
  }
}

export default Share;
