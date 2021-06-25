const express = require("express");
const cors = require("cors");
const Database = require("better-sqlite3");

const app = express();

app.use(cors());
app.use(express.json());

const appPort = 3001;
app.listen(appPort, () => {
  console.log(`Server listening at http://localhost:${appPort}`);
});

const appPublicPath = "./public";

app.use(express.static(appPublicPath));

app.post("/card", (req, res) => {
  console.log(req.body);
  const response = {
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
  };
  res.json(response);
});

// const userData = [];

const db = new Database("./database.db", {
  verbose: console.log,
});

app.get("/cards/:id", (req, res) => {
  const query = db.prepare(`SELECT * FROM card`);
  const data = query.all();

  res.render("pages/card", data);
});
