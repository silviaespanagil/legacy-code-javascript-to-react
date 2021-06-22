import React from "react";
import GetAvatar from "./GetAvatar";

class Fill extends React.Component {
  constructor(props) {
    super(props);
    this.state = { className: "collapsible--close" };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    console.log("hice clic");
    this.setState((prevState) => {
      let changeClass =
        prevState.className === "collapsible--close"
          ? "collapsible--open"
          : "collapsible--close";
      return { className: changeClass };
    });
  }
  render() {
    return (
      <>
        <section className="formf" id="reset">
          <div
            className="formf__fill js-collapsible-header"
            onClick={this.handleClick}
          >
            <div className="formf__fill--icon">
              <i className="far fa-keyboard"></i>
              <h2 className="formf__fill--title">rellena</h2>
            </div>
            <span className="formf__fill--arrow-up">
              <i className="fa fa-chevron-down js-arrow"></i>
            </span>
          </div>
          <div className={` js-collapsible ${this.state.className}`}>
            <section className="formf__box js-fillform" action="" method="POST">
              <label htmlFor="full-name">Nombre completo</label>
              <input
                onChange={this.props.handleName}
                id="full-name"
                className="name js-fullName"
                placeholder="Ej: Sally Hill"
                type="text"
                name="name"
                required
                value={this.props.nameValue}
              />

              <label htmlFor="job">Puesto</label>
              <input
                onChange={this.props.handleJob}
                className="js-fillJob"
                placeholder="Ej: Front-End unicorn"
                type="text"
                name="job"
                id="job"
                required
                value={this.props.jobValue}
              />
              <GetAvatar
                avatar={this.props.image}
                updateAvatar={this.props.updateAvatar}
              />

              {/*<div className="formf__box--label">Imagen de perfil</div>
              <div className="formf__box--container">
                <label className="formf__box--button" htmlFor="img-selector">
                  Añadir imagen
                </label>

                {/* <input
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
              </div>*/}

              <label htmlFor="email">Email</label>
              <input
                onChange={this.props.handleMail}
                className="js-input-email"
                placeholder="Ej: sally-hill@gmail.com"
                type="email"
                name="email"
                required
                value={this.props.mailValue}
              />

              <label htmlFor="">Teléfono</label>
              <input
                onChange={this.props.handlePhone}
                className="js-input-phone"
                placeholder="Ej: 555-55-55-55"
                type="tel"
                name="phone"
                required
                value={this.props.phoneValue}
              />

              <label htmlFor="">LinkedIn</label>
              <input
                onChange={this.props.handleLi}
                className="js-input-linkedin"
                href="https://www.linkedin.com/"
                placeholder="Ej: linkedin.com/in/sally.hill"
                type="text"
                name="linkedin"
                required
              />

              <label htmlFor="">Github</label>
              <input
                onChange={this.props.handleGithub}
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
      </>
    );
  }
}

export default Fill;
