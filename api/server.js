const express = require("express");
const cors = require('cors');
const Users = require('./users-model');

const server = express();

server.use(express.json());
server.use(cors());

server.get("/", (req, res) => {
  res.send("Hello from outer space!");
});


server.get('/api/users', (req, res) => {
    Users.findAll()
        .then(users => {
            res.status(200).json(users)
        })
})

server.post('/api/register', (req, res) => {
    let user= req.body;
    // let {username, password} = req.body;
    Users.create(user)
        .then(user => {
            if(!user){
                res.status(404).json({message: 'no no no you need a username AND a password!'})
            } else {
                res.status(201).json(user)
                return user;
            }
        })
})

server.post('/api/login', (req, res) => {
    // let user= req.body;
    let {username, password} = req.body;
    Users.create(username, password)
        .then(user => {
            if(!username || !password){
                res.status(404).json({message: 'no no no you need a username AND a password!'})
            } else {
                return user;
            }
        })
})

module.exports = server;
