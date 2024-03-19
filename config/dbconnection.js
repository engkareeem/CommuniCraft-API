const mongoose = require("mongoose");
// const projectsModel = require('../models/project')
// const usersModel = require('../models/user')
// const toolsModel = require('../models/tool')
// const materialsModel = require('../models/material')


const DB_CLUSTER = "softwarecluster"
const DB_SERVER = "lxpig9x"
const DB_MAIN = "dataset";
const { DB_USERNAME, DB_PASSWORD } = process.env

const DB_URI =  `mongodb+srv://${DB_USERNAME}:${DB_PASSWORD}@${DB_CLUSTER}.${DB_SERVER}.mongodb.net/${DB_MAIN}?retryWrites=true&w=majority`;
mongoose.connect(DB_URI);



// let user = new usersModel({
//     name: "Kareem",
//     age: 21,
//     gender: true,
//     address: "Stat of Bidya",
//     contact: "0999999999",
//     email: "kareem001832@gmail.com",
//     password: "secret",
//     skills: [],
//     interests: [],
//     borrowedTools: [],
//     ownedTools: [],
// })
// user.save()
module.exports = mongoose;