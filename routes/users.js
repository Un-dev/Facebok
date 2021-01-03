import express from 'express'
import User from '../models/user.model.js'
import mongoose from 'mongoose'



const users = express.Router();

//shows raw password
users.get('/', (req, res, err) => {
  User.find()
      .then(docs => {
        console.log(`users found : \n${docs}`)
        res.status(200).json({
          count: docs.length,
          users: docs
        })
      })
});

users.get('/:id', (req, res, erre) => {
  User.findById(new mongoose.mongo.ObjectId(req.params.id))
  .then(user => {
    res.status(200).json(user)
  })
});

//can have same password/username etc as others
users.post('/', async(req, res, err) => {
  try{
    const{username, password} = req.body;
    console.log(req.body)

    const id = new mongoose.mongo.ObjectId()

    let user = {
      _id: id,
      username: username,
      password: password
    }
    let userModel = new User(user)
    await userModel.save()
    User.findById(id)
        .then(createdUser => {
          res.status(201).json(createdUser)
        })
  }catch(err){
    console.log(err)
  }
})

users.delete('/:id', (req, res, err)=>{

})


export default users;