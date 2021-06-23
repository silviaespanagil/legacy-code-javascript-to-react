const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const appPort = 3000;
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
        // phone: this.props.phoneValue,
        // email: this.props.mailValue,
        // linkedin: this.props.liValue,
        // github: this.props.githubValue,
        // photo: this.props.image,
        // palette: this.props.paletteValue,
      },
    ],
  };
  res.json(response);
});

const userData = [];

// app.get('/card', (req, res) => {
//   console.log("database");
// userData.push({
//     name:
//     job:
// })

// });
