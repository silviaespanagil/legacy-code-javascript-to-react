import React from "react";
import Design from "./Design.js";
import "../stylesheets/App.scss";

class Form extends React.Component {
  render() {
    return (
      <>
        <section className="sectionForm">
          <form className="main-cards__form">
            <Design />

            <section className="formf" id="reset">
              <div className="formf__fill js-collapsible-header">
                <div className="formf__fill--icon">
                  <i className="far fa-keyboard"></i>
                  <h2 className="formf__fill--title">rellena</h2>
                </div>
                <span className="formf__fill--arrow-up">
                  <i className="fa fa-chevron-down js-arrow"></i>
                </span>
              </div>
              <div className="js-collapsible collapsible--close">
                <section
                  className="formf__box js-fillform"
                  action=""
                  method="POST"
                >
                  <label for="full-name">Nombre completo</label>
                  <input
                    className="name js-fullName"
                    placeholder="Ej: Sally Hill"
                    type="text"
                    name="name"
                    required
                  />

                  <label for="">Puesto</label>
                  <input
                    className="js-fillJob"
                    value=""
                    placeholder="Ej: Front-End unicorn"
                    type="text"
                    name="job"
                    required
                  />

                  <div className="formf__box--label">Imagen de perfil</div>
                  <div className="formf__box--container">
                    <label className="formf__box--button" for="img-selector">
                      Añadir imagen
                    </label>
                    <input
                      id="img-selector"
                      className="js__profile-upload-btn formf__box--inputFile"
                      type="file"
                    />

                    <div
                      className="formf__box--previewimg js__profile-preview"
                      type="image"
                      src=""
                      alt=""
                    ></div>
                  </div>

                  <label for="email">Email</label>
                  <input
                    className="js-input-email"
                    placeholder="Ej: sally-hill@gmail.com"
                    type="email"
                    name="email"
                    required
                  />

                  <label for="">Teléfono</label>
                  <input
                    className="js-input-phone"
                    placeholder="Ej: 555-55-55-55"
                    type="tel"
                    name="phone"
                    required
                  />

                  <label for="">LinkedIn</label>
                  <input
                    className="js-input-linkedin"
                    placeholder="Ej: linkedin.com/in/sally.hill"
                    type="text"
                    name="linkedin"
                    required
                  />

                  <label for="">Github</label>
                  <input
                    className="js-input-github"
                    placeholder="Ej: @sally-hill"
                    href="https://github.com/"
                    type="text"
                    name="github"
                    required
                  />
                </section>
              </div>
            </section>

            <section className="share__container">
              <div className="share js-collapsible-header">
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

              <div className="js-collapsible collapsible--close">
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
                  <p className="share__result--title">
                    La tarjeta ha sido creada:
                  </p>
                  <a className="share__result--link js-card-link" href=""></a>
                  <button className="share__result--twitter js-twitter-btn">
                    <i
                      className="fa fa-twitter"
                      title="Comparte en Twitter"
                    ></i>
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
          </form>
        </section>
      </>
    );
  }
}

export default Form;
