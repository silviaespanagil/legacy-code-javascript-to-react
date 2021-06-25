import React, { useState, useEffect } from "react";
import Form from "./Form.js";
import CardPreview from "./PreviewCard.js";
import ls from "../../src/services/LocalStorage";

function Main() {
  const lsData = ls.get("cardData") || {};
  console.log(lsData);

  let [paletteValue, setPalette] = useState(lsData.palette || "g");
  let [nameValue, setName] = useState(lsData.name || "");
  let [jobValue, setJob] = useState(lsData.job || "");
  let [mailValue, setMail] = useState(lsData.email || "");
  let [phoneValue, setPhone] = useState(lsData.phone || "");
  let [liValue, setLi] = useState(lsData.linkedin || "www.linkedin.com");
  let [githubValue, setGithub] = useState(lsData.github || "www.github.com");
  const [image, setImage] = useState(lsData.photo || "");

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

  const updateAvatar = (avatar) => {
    setImage(avatar);
  };
  const cardData = {
    palette: paletteValue,
    name: nameValue,
    job: jobValue,
    email: mailValue,
    phone: phoneValue,
    linkedin: liValue,
    github: githubValue,
    photo: image,
  };

  useEffect(() => {
    ls.set("cardData", cardData);
  });

  const handleButton = () => {
    setName("");
    setJob("");
    setMail("");
    setPhone("");
    setLi("");
    setGithub("");
    setImage("");
  };

  return (
    <>
      <main className="main-cards">
        <div className="main-cards__container">
          <CardPreview
            paletteValue={paletteValue}
            nameValue={nameValue}
            jobValue={jobValue}
            image={image}
            mailValue={mailValue}
            phoneValue={phoneValue}
            liValue={liValue}
            githubValue={githubValue}
            handleButton={handleButton}
          />
          <Form
            updateAvatar={updateAvatar}
            image={image}
            nameValue={nameValue}
            jobValue={jobValue}
            mailValue={mailValue}
            phoneValue={phoneValue}
            liValue={liValue}
            githubValue={githubValue}
            paletteValue={paletteValue}
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
