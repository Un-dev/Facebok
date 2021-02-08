import express from 'express'
import User from '../models/user.model.js'
import mongoose from 'mongoose'

const users = express.Router();

/** 
 * @namespace users
 * @todo Shows raw password of users
 * @description GET / 
 * Returns every users found in the database
*/
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

/**
 * @namespace users
 * @todo anyone can see any user's information, also shows raw password of users 
 * @description GET /id
 * Returns the user whose ID is id
 */
users.get('/:id', (req, res, erre) => {
  User.findById(new mongoose.mongo.ObjectId(req.params.id))
  .then(user => {
    res.status(200).json(user)
  })
});

/**
 * @namespace users
 * @todo the function allows new users to have the same password/username as other users, also allows sql injection and passwords are not encrypted
 * @description POST /
 * Adds a user in the users db collection
 */
users.post('/', async(req, res, err) => {
  try{
    const{username, password} = req.body;
    // console.log(req.body)

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

/**
 * @namespace users
 * @todo anyone can delete any user
 * @description DELETE /id
 * Deletes the user whose ID is id
 */
users.delete('/:id', (req, res, err)=>{
  User.findByIdAndDelete(new mongoose.mongo.ObjectId(req.params.id))
      .then(deletedUser => {
        res.status(200).json(deletedUser)
      })
})


export default users;