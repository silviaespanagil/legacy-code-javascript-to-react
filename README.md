# Refactor a  legacy code

## _Javascript to React_

¡Hola mundo!

Is time to do a makeover! 💅🏼

Me and my team were given a code of a web app developed on Javascript with the task to refactor the whole code and migrate it to React and deploy it on Heroku. Let's begin!✨

<img src="https://i.ibb.co/QdWn9QF/Screenshot-1.png" width="300"/> 

## Requirements 📋

- Refactor: **all the code** must be on React
- Component creation is up to the developers
- The user's information must be stored in a local storage so that if they leave the page, when they return they do not have to complete it again.
- The app must not lose any of it previous functionalities.
- Previous code **can't** be changed. 
- Create a SQLite database and fetch to this service for the card creation
- Deploy in Heroku

## Tech 💻

- Visual Code Studio: as code editor
- SASS
- React
- SQLite
- Heroku

## Development ⌨️

First and foremost as it was a teamwork we choose a Scrum Master within us and made a list of task and issues to follow. This list was organized by priorities ❗ and two sprints.  📅

For the task that it was given we started creating a mock up of  all the components we thought we needed and started with those and then we kept on the creation as needed.
Component creation rule was: each component for one task. We also choose to do some Class and some Functional Components as we wanted to practice with both of them.

Second phase was BackEnd. We created a SQLite database that it was in synchrony with the previous code and the card needs. We did then a service to fetch the data. Service works either in production as in development enviroment.
The fetch data creates a Card URL that  allows the user to share the card. Backend uses Express and Better SQLite -check on dependencies to install-

After all the code was refactored we deployed the code using Heroku.


## Want to clone my repository? 🐑🐑

Please, do it! We believe that sharing is caring. This proyect has some dependencies so be sure to install them:

1. Install dependencies. You will only have to do this once.

```sh
npm install better-sqlite3
```
```sh
npm install cors
```
```sh
npm install express --save
```
```sh
npm install node-sass
```
```sh
npm install -g nodemon
```
```sh
npm install --save react-router-dom
```
## License

MIT
