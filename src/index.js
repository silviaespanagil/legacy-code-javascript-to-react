const express = require("express");
const cors = require("cors");
const Database = require("better-sqlite3");

const app = express();

app.use(cors());
app.use(express.json());

//const appPort = 3001;
const appPort = process.env.PORT || 3001;

app.listen(
  appPort /*() => {
  console.log(`Server listening at http://localhost:${appPort}`);
}*/
);

const appPublicPath = "./public";
// app.use(express.json());
app.use(express.static(appPublicPath));

const db = new Database("./database.db", {
  verbose: console.log,
});

app.get("/card/:id", (req, res) => {
  const query = db.prepare(`SELECT * FROM card WHERE id = ?`);
  const data = query.get(req.params.id);
  //const userId =

  if (!data) {
    return res.sendStatus(404);
  } else {
    res.render("pages/card.ejs", data);
  }
});

app.post("/card", (req, res) => {
  console.log(req.body);
  const response = {};

  if (!req.body.name || req.body.name === "") {
    response.error = "Completa tu nombre";
  } else if (!req.body.job || req.body.job === "") {
    response.error = "Completa tu puesto laboral";
  } else if (!req.body.phone || req.body.phone === "") {
    response.error = "Completa tu teléfono";
  } else if (!req.body.email || req.body.email === "") {
    response.error = "Completa tu email";
  } else if (!req.body.linkedin || req.body.linkedin === "") {
    response.error = "Completa tu LinkedIn";
  } else if (!req.body.github || req.body.github === "") {
    response.error = "Completa tu GitHub";
  } else if (!req.body.photo || req.body.photo === "") {
    response.error = "Sube una foto";
  } else if (!req.body.palette || req.body.palette === "") {
    response.error = "Escoge tu paleta favorita";
  } else {
    const insertUser = db.prepare(
      `INSERT INTO card (name, job, phone, email, linkedin, github, photo, palette) VALUES (?,?,?,?,?,?,?,?)`
    );
    const result = insertUser.run(
      req.body.name,
      req.body.job,
      req.body.phone,
      req.body.email,
      req.body.linkedin,
      req.body.github,
      req.body.photo,
      req.body.palette
    );
    const userId = result.lastInsertRowid;
    const isDevelopment = process.env.NODE_ENV === "development";
    const cardURL = isDevelopment
      ? "http://localhost:3001/"
      : "https://vegandebuggers.herokuapp.com/";
    response.cardURL = cardURL + "card/" + userId;
  }
  /* const response = {
    users: [
      {
        name: req.body.name,
        job: req.body.job,
        phone: req.body.phone,
        email: req.body.email,
        linkedin: req.body.linkedin,
        github: req.body.github,
        photo: req.body.image,
        palette: req.body.palette,
      },
    ],
  }; */
  res.json(response);
});
