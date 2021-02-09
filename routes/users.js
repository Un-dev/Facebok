import express from 'express'
import User from '../models/user.model.js'
import mongoose from 'mongoose'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import dotenv from 'dotenv'

const config = dotenv.config().parsed
const users = express.Router();

/** 
 * @namespace users
 * @description GET / : Returns every users found in the database, the method has been modified to not display passwords
*/
users.get('/', (req, res, err) => {
  User.find()
      .then(docs => {
        const formattedUsers = []
        docs.forEach((user) => {
          formattedUsers.push({
            id: user._id,
            username: user.username,
            age: user.age ? user.age : '-1',
          })
        })
        res.status(200).json({
          count: docs.length,
          users: formattedUsers
        })
      })
});

/**
 * @namespace users
 * @description GET /id : Returns the user whose ID is id, the method has been modified to not display passwords
 */
users.get('/:id', (req, res, erre) => {
  User.findById(new mongoose.mongo.ObjectId(req.params.id))
  .then(user => {
    res.status(200).json({
      id: user._id,
      username: user.username,
      age: user.age ? user.age : '-1',
    })
  })
});

/**
 * @namespace users
 * @todo the function allows new users to have the same password/username as other users, also allows sql injection
 * @description POST /
 * Adds a user in the users db collection
 */
users.post('/', async(req, res, err) => {
  try{
    const{username, password} = req.body;
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

/**
 * @namespace users
 * @description GET /me/:token gives every information about a user but only if he is logged in
 */
users.get('/me/:token', (req, res, err) => {
  const token = req.params.token
  jwt.verify(token, config.JWT_SECRET, (err, decoded) => {
    if(err) res.status(400).json(err)
    User.findById(decoded.userId)
        .then(user => res.status(200).json(user))
  })
})

export default users;