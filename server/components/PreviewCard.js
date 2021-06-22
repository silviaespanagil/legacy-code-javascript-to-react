import React from "react";
import defaultAvatar from "../images/vegan-deburguer-photo.jpg";

function CardPreview(props) {
  const image = props.image === "" ? defaultAvatar : props.image;

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
              style={{ backgroundImage: `url(${image})` }}
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
                  rel="noreferrer"
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
                  href={props.mailValue || "mailto:"}
                  target="_blank"
                  rel="noreferrer"
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
                  href={
                    `https://es.linkedin.com/in/${props.liValue}` ||
                    "https://es.linkedin.com/in"
                  }
                  target="_blank"
                  rel="noreferrer"
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
                  href={
                    `https://github.com/${props.githubValue}` ||
                    "https://es.linkedin.com/in"
                  }
                  target="_blank"
                  rel="noreferrer"
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
