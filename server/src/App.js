// External variables
const express = require("express");
const mongoose = require('mongoose');
// THIS IS WRONG NEVER DO THAT !! Only for the task we put the DB Link here!! NEVER DO THAAAT AGAIN !!
const MongoURI = 'mongodb+srv://alaa:1234@cluster0.6ulyk.mongodb.net/myFirstDatabase?retryWrites=true&w=majority' ;

//App variables
const app = express();
const port = process.env.PORT || "8000";
const chalk = require('chalk');
const cors = require('cors')
// #Importing the userController
const userController = require('./Routes/userController');
//middleware
const bp = require('body-parser');
app.use(bp.json());
app.use(bp.urlencoded({ extended: true }));

// configurations
// Mongo DB
mongoose.connect(MongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
.then(result =>console.log(chalk.bold.cyan("MongoDB is now connected")) )
.catch(err => console.log(err));

// enabling all requests 
app.use(cors())

/*
                                                    Start of your code
*/

app.get("/Home", (req, res) => {
    res.status(200).send("You have everything installed !");
  });


  // #Routing to usercontroller here
app.use('/user', userController);



/*
                                                    End of your code
*/

// Starting server
app.listen(port, () => {
    console.log(chalk.bold.yellow(`Listening to requests on http://localhost:${port}`));
  });
