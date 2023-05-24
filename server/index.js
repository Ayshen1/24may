const express = require('express');
const app = express();
const crypto = require('crypto')
const cors = require('cors')
const bodyParser = require('body-parser');
const mongoose = require('mongoose')
const dotenv = require ('dotenv')
dotenv.config();

app.use(bodyParser.json())

const PORT = 9090;
app.use(cors());
const UserSchema = new mongoose.Schema({
  name: String,
  surname: String,
  imageUrl: String,
  age: Number
});

const UserModel = mongoose.model('Users', UserSchema);


DB_CONNECTION = process.env.DB_CONNECTION
DB_PASSWORD = process.env.DB_PASSWORD
mongoose.connect(DB_CONNECTION.replace("<password>", DB_PASSWORD))
  .then(() => console.log("Mongo DB Connected!"))



app.get('/users', async (req, res) => {


  const { name } = req.query;
  const users = await UserModel.find();
  if (name === undefined) {
    res.status(200).send({
      data: users,
      message: "data get success!",
    });
  } else {
    res.status(200).send({
      data: users.filter((x) => x.name.toLowerCase().trim().includes(name.toLowerCase().trim())),
      message: "data get success!",
    });
  }
    
  })



  app.get('/users/:id', async (req, res) => {
    const id = req.params.id;
  const user = await UserModel.findById(id);
  console.log('user found: ', user);
  if (!user) {
    res.status(204).send("user not found!");
  } else {
    res.status(200).send({
      data: user,
      message: "data get success!",
    });
  }
  })



  app.delete('/users/:id', async (req, res) => {
    const id = req.params.id;
  const user = await UserModel.findByIdAndDelete(id);
  if (user === undefined) {
    res.status(404).send("user not found");
  } else {
    res.status(203).send({
      data: user,
      message: "user deleted successfully",
    });
  }
  })
  


  app.post('/users', async (req, res) => {
    const { name, surname, imageUrl, age} = req.body;
  const newUser = new UserModel({ 
    // id: crypto.randomUUID(),
    name: name,
    surname: surname,
    imageUrl: imageUrl,
    age: age

  });
  await newUser.save();
  res.status(201).send("created");
    
    
  })



app.put("/users/:id", async(req, res) => {
  const id = req.params.id;
  const { name, surname ,imageUrl, age} = req.body;
  const existedUser = await UserModel.findByIdAndUpdate(id,{
    name: name,
    surname: surname,
    imageUrl: imageUrl,
    age: age
  });
  if(existedUser == undefined){
    res.status(404).send("user not found");
  }else{
    res.status(200).send(`${name} updated succesfully`)
  }
  });
  

  app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`)
  })