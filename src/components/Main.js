import React, { useState } from "react";
import "../stylesheets/App.scss";
import Form from "./Form.js";
import CardPreview from "./PreviewCard.js";

function Main() {
  let [PaletteValue, setPalette] = useState("g");
  let [nameValue, setName] = useState("Nombre completo");
  let [jobValue, setJob] = useState("Front-end Developer");
  let [mailValue, setMail] = useState("");
  let [phoneValue, setPhone] = useState("+34");
  let [liValue, setLi] = useState("www.linkedin.com");
  let [githubValue, setGithub] = useState("www.github.com");

  let handlePalette = (ev) => {
    setPalette((PaletteValue = ev.currentTarget.value));
  };

  let handleName = (ev) => {
    setName((nameValue = ev.currentTarget.value));
  };

  let handleJob = (ev) => {
    setJob((jobValue = ev.currentTarget.value));
  };
  let handleMail = (ev) => {
    setMail((mailValue = ev.currentTarget.value));
  };
  let handlePhone = (ev) => {
    setPhone((phoneValue = ev.currentTarget.value));
  };
  let handleLi = (ev) => {
    setLi((liValue = ev.currentTarget.value));
  };
  let handleGithub = (ev) => {
    setGithub((githubValue = ev.currentTarget.value));
  };

  return (
    <>
      <main className="main-cards">
        <div className="main-cards__container">
          <CardPreview
            paletteValue={PaletteValue}
            nameValue={nameValue}
            jobValue={jobValue}
            mailValue={mailValue}
            phoneValue={phoneValue}
            liValue={liValue}
            githubValue={githubValue}
          />
          <Form
            handlePalette={handlePalette}
            handleName={handleName}
            handleMail={handleMail}
            handleJob={handleJob}
            handlePhone={handlePhone}
            handleLi={handleLi}
            handleGithub={handleGithub}
          />
        </div>
      </main>
    </>
  );
}
/*class Main extends React.Component {
  render() {
    return (
      <>
        <main className="main-cards">
          <div className="main-cards__container">
            <CardPreview />
            <Form />
          </div>
        </main>
      </>
    );
  }
}*/
export default Main;
