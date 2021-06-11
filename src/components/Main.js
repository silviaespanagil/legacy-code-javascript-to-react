import React, { useState } from "react";
import "../stylesheets/App.scss";
import Form from "./Form.js";
import CardPreview from "./PreviewCard.js";

function Main() {
  let [PaletteValue, setPalette] = useState("g");
  let [nameValue, setName] = useState("");
  let [jobValue, setJob] = useState("");
  let [mailValue, setMail] = useState("");
  let [phoneValue, setPhone] = useState("");
  let [liValue, setLi] = useState("www.linkedin.com");
  let [githubValue, setGithub] = useState("www.github.com");

  let handlePalette = (ev) => {
    setPalette(ev.currentTarget.value);
  };

  let handleName = (ev) => {
    setName(ev.currentTarget.value);
  };

  let handleJob = (ev) => {
    setJob(ev.currentTarget.value);
  };
  let handleMail = (ev) => {
    setMail(ev.currentTarget.value);
  };
  let handlePhone = (ev) => {
    setPhone(ev.currentTarget.value);
  };
  let handleLi = (ev) => {
    setLi(ev.currentTarget.value);
  };
  let handleGithub = (ev) => {
    setGithub(ev.currentTarget.value);
  };

  const handleButton = () => {
    setName("");
    setJob("");
    setMail("");
    setPhone("");
    setLi("");
    setGithub("");
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
            handleButton={handleButton}
          />
          <Form
            nameValue={nameValue}
            jobValue={jobValue}
            mailValue={mailValue}
            phoneValue={phoneValue}
            liValue={liValue}
            githubValue={githubValue}
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
