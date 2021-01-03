import express from 'express'
import User from '../models/user.model.js'
import mongoose from 'mongoose'

const users = express.Router();

users.get('/', (req, res) => {
  res.send('hello world')
});

users.get('/:id', (req, res) => {

});

users.post('/', async(req, res, err) => {
  
  try{
    const{username} = req.body;
    // console.log(req.req.body)

    let user = {}
    user._id = new mongoose.mongo.ObjectId()
    user.username = username
    let userModel = new User(user)
    await userModel.save()
    res.send().json(userModel)
  }catch(err){
    console.log(err)
  }
})


export default users;