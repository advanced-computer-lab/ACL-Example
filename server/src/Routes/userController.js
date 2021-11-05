// #Task route solution
var express = require('express');
var router = express.Router();
const User = require('../Models/User');
// printing
const chalk = require('chalk');

//Get all entered users
router.get('/get-all-users', (req, res) => {
  User.find()
    .then(result => {
      res.send(result);
    })
    .catch(err => {
      console.log(err);
    });
});

//Get a certain entered user with a known attribute
router.get('/get-all-users/:name', (req, res) => {
    User.find({Name:req.params.name})
      .then(result => {
        res.send(result);
      })
      .catch(err => {
        console.log(err);
      });
  });
  // creating new user
  router.post('/create-user', (req, res) => {
    const newUser = new User(req.body);
  
    newUser.save()
      .then(result => {
        res.status(200).send(result);
        console.log(chalk.bold.green("The User is created successfully !"));
      })
      .catch(err => {
        console.log(err);
      });
  });

  //Updating an existing user
  router.put('/update-user/:id', (req,res)=>{
    User.findByIdAndUpdate(req.params.id,req.body).then(result =>{

        res.status(200).send("User updated ");
        console.log(chalk.bold.blue('The User is Updated successfully !'));
    }).catch(err => {
        console.log(err);
      });

  });

  //Deleting an existing user
  router.delete('/delete-user/:id', (req,res)=>{
    User.findByIdAndRemove(req.params.id).then(result =>{

        res.status(200).send("User Deleted ");
        console.log(chalk.bold.red("The User is deleted successfully !"));
    }).catch(err => {
        console.log(err);
      });

  });

  module.exports = router;
