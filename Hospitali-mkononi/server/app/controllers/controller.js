const db =  require("../models");
const Users = db.users;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
    //validte request
    if (!req.body.title) {
        res.staus(400).send({
        Message: "Cannot be empty!"
        });
        return;
    }

    //create user
    const users = {
        username: req.body.username,
        password: req.body.password,
        useremail: req.body.useremail
    }

    Users.create(users)
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message:
            err.message || "Some error occured while creating sers"
        })
    })
}