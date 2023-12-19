# MERN Stack CRUD

MERN stack is compilation of four different tech which MongoDB, ExpressJS, ReactJS, NodeJS.
I use MVC (Model-View-Controller) pattern to develop basic CRUD (create, read, update, delete)
is very basic to learning
 
# List of contents
 - [Structure Project](#structure-project)
 - [How to installation](#how-to-installation)
 - [How to run](#how-to-run)
 - [Referrence](#referrence)

# Structure Project
```
├── client
│   ├── index.html
│   ├── package.json
│   ├── package-lock.json
│   ├── public
│   │   └── vite.svg
│   ├── README.md
│   ├── src
│   │   ├── App.css
│   │   ├── App.jsx
│   │   ├── assets
│   │   │   └── react.svg
│   │   ├── main.jsx
│   │   ├── New.jsx
│   │   ├── Update.jsx
│   │   └── Users.jsx
│   └── vite.config.js
├── docker-compose.yml
└── server
    ├── config
    │   └── dbcon.js
    ├── controllers
    │   └── crudController.js
    ├── models
    │   └── User.js
    ├── package.json
    ├── package-lock.json
    ├── routes
    │   └── route.js
    └── server.js

```
# How to installation
after install init git repository in your folder and clone this project
```bash
git init
git clone https://github.com/nrmtr/MERN-Stack-CRUD.git
```
# How to run
run docker compose file it contain image MongoDB 
```bash
docker compose up -d
```
then if you don't how NodeJS download and install it after run this command
```bash
cd client
npm run dev
cd ../server
npm start
```
# Referrence
: code with yoursaf
