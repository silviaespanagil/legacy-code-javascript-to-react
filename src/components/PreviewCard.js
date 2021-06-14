import React from "react";
import "../stylesheets/App.scss";

function CardPreview(props) {
  return (
    <>
      <section className="section__photo">
        <button
          className="section__photo--button js-photoReset"
          id="reset"
          onClick={props.handleButton}
        >
          <i className="far fa-trash-alt icongarbage"></i>reset
        </button>
        <article className="section__photo--card">
          <div
            className={`section__photo--boxnamejob border-palette-${props.paletteValue}2`}
          >
            <h3
              className={`section__photo--name js-photoFullName   color-palette-${props.paletteValue}1`}
            >
              {props.nameValue || "Nombre Completo"}
            </h3>
            <h4 className="section__photo--job js-photoJob">
              {props.jobValue || "Front-end Developer"}
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
              <li
                className={`section__photo--link border-palette-${props.paletteValue}3`}
              >
                <a
                  className="section__photo--icon js-photoPhone"
                  href={props.phoneValue || "+34"}
                  target="_blank"
                >
                  <i
                    className={`fas fa-mobile-alt color-palette-${props.paletteValue}1`}
                  ></i>
                </a>
              </li>
              <li
                className={`section__photo--link border-palette-${props.paletteValue}3`}
              >
                <a
                  className="section__photo--icon js-photoEmail "
                  href={props.mailValue}
                  target="_blank"
                >
                  <i
                    className={`far fa-envelope color-palette-${props.paletteValue}1`}
                  ></i>
                </a>
              </li>
              <li
                className={`section__photo--link border-palette-${props.paletteValue}3`}
              >
                <a
                  className="section__photo--icon js-photoLinkedin"
                  href={`https://es.linkedin.com/in/${props.liValue}`}
                  target="_blank"
                >
                  <i
                    className={`fab fa-linkedin-in color-palette-${props.paletteValue}1`}
                  ></i>
                </a>
              </li>
              <li
                className={`section__photo--link border-palette-${props.paletteValue}3`}
              >
                <a
                  className="section__photo--icon js-photoGithub"
                  href={`https://github.com/${props.githubValue}`}
                  target="_blank"
                >
                  <i
                    className={`fab fa-github-alt color-palette-${props.paletteValue}1`}
                  ></i>
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
