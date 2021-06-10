import React from "react";
import "../stylesheets/App.scss";

function CardPreview() {
  return (
    <>
      <section className="section__photo">
        <button className="section__photo--button js-photoReset" id="reset">
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
    </>
  );
}

export default CardPreview;
