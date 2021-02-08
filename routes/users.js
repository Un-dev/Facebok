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

users.get('/me', (req, res, err) => {

})

users.post('/signin', (req, res, err) => {
  User.findOne({ username: req.body.username })
      .then((user) => {
        if (!user) {
          return res.status(401).json({error: new Error('User not found!')})
        }
        bcrypt.compare(req.body.password, user.password).then((valid) => {
          if(!valid) {
            return res.status(401).json({
              error: new Error('Incorrect password!')
            })
          }
          const token = jwt.sign(
            {userId: user._id}, 
            config.JWT_SECRET, 
            {expiresIn: '2d'}
          )
          res.status(200).json({
            id: user._id,
            token: token
          })
        })
      })
})

user.post('/signup', (req, res, err) => {

})

export default users;