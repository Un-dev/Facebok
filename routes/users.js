import express from 'express'
import User from '../models/user.model.js'
import mongoose from 'mongoose'
import jwt from 'jsonwebtoken'
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
 * @description DELETE /token Deletes the currently logged in user
 */
users.delete('/:token', (req, res, err)=>{
  const token = req.params.token

  jwt.verify(token, config.JWT_TOKEN, (err, decoded) => {
    if(err) res.status(400).json(err)
    User.findByIdAndDelete(decoded.userId)
        .then(deletedUser => {
          res.status(200).json(deletedUser)
        })
  })
})

/**
 * @namespace users
 * @description GET /me/token gives every information about a user but only if he is logged in
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