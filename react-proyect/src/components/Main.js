import React from "react";
import "../stylesheets/App.scss";

class Main extends React.Component {
  render() {
    return (
      <>
        <main className="main-cards">
          <div className="main-cards__container">
            <section className="section__photo">
              <button
                className="section__photo--button js-photoReset"
                id="reset"
              >
                <i className="far fa-trash-alt icongarbage"></i>reset
              </button>
              <article className="section__photo--card">
                <div className="section__photo--boxnamejob border-palette-g2">
                  <h3 className="section__photo--name js-photoFullName color-pallete-g1">
                    nombre apellido
                  </h3>
                  <h4 className="section__photo--job js-photoJob">
                    Front-end developer
                  </h4>
                </div>
                <div className="section__photo--img">
                  <div
                    className="section__photo--image js__profile-image"
                    alt="photograph"
                  ></div>
                </div>

                <nav className="section__photo--nav">
                  <ul className="section__photo--list">
                    <li className="section__photo--link border-palette-g3">
                      <a
                        className="section__photo--icon js-photoPhone"
                        href=""
                        target="_blank"
                      >
                        <i className="fas fa-mobile-alt"></i>
                      </a>
                    </li>
                    <li className="section__photo--link border-palette-g3">
                      <a
                        className="section__photo--icon js-photoEmail"
                        href=""
                        target="_blank"
                      >
                        <i className="far fa-envelope"></i>
                      </a>
                    </li>
                    <li className="section__photo--link border-palette-g3">
                      <a
                        className="section__photo--icon js-photoLinkedin"
                        href="https://es.linkein.com/in/"
                        target="_blank"
                      >
                        <i className="fab fa-linkedin-in"></i>
                      </a>
                    </li>
                    <li className="section__photo--link border-palette-g3">
                      <a
                        className="section__photo--icon js-photoGithub"
                        href="https://github.com/"
                        target="_blank"
                      >
                        <i className="fab fa-github-alt"></i>
                      </a>
                    </li>
                  </ul>
                </nav>
              </article>
            </section>

            <section className="sectionForm">
              <form className="main-cards__form">
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
                    <label
                      className="section__desing--boxcolor"
                      for="colorpalette1"
                    >
                      <input
                        className="section__design--check js-colorPalette1"
                        type="radio"
                        value="g"
                        name="design-color"
                        checked
                      />
                      <ul className="section__design--palette">
                        <li className="box color1-1"></li>
                        <li className="box color1-2"></li>
                        <li className="box color1-3"></li>
                      </ul>
                    </label>
                    <label
                      className="section__desing--boxcolor"
                      for="colorpalette2"
                    >
                      <input
                        className="section__design--check js-colorPalette2"
                        type="radio"
                        value="r"
                        name="design-color"
                      />
                      <ul className="section__design--palette">
                        <li className="box color2-1"></li>
                        <li className="box color2-2"></li>
                        <li className="box color2-3"></li>
                      </ul>
                    </label>
                    <label
                      className="section__desing--boxcolor"
                      for="colorpalette3"
                    >
                      <input
                        className="section__design--check js-colorPalette3"
                        type="radio"
                        value="b"
                        name="design-color"
                      />
                      <ul className="section__design--palette">
                        <li className="box color3-1"></li>
                        <li className="box color3-2"></li>
                        <li className="box color3-3"></li>
                      </ul>
                    </label>
                  </div>
                </section>

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
                        <label
                          className="formf__box--button"
                          for="img-selector"
                        >
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
                      <a
                        className="share__result--link js-card-link"
                        href=""
                      ></a>
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
          </div>
        </main>
      </>
    );
  }
}

export default Main;
