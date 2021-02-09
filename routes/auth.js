import express from 'express'
import User from '../models/user.model.js'
import mongoose from 'mongoose'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import dotenv from 'dotenv'

const config = dotenv.config().parsed
const auth = express.Router();

/**
 * @namespace auth
 * @description POST /signup creates a user with encrypted password
 */
auth.post('/signup', (req, res, err) => {
    const{username, password, age} = req.body;
  
    if (username && password ) {
      bcrypt.hash(password, 10)
      .then((hash) => {
        const id = new mongoose.mongo.ObjectId()
        const newUser = new User({
          _id: id,
          username: username,
          password: hash,
          age: age ? age : '-1',
        })
        console.log(newUser)
        newUser.save()
        .then(() => res.status(201).json({ message: `Welcome ${username}, you are now a member of Facebok !`}))
        .catch(err => res.status(400).json({err}))
      })
      .catch(err => res.status(500).json({error}))
    }      
})

/**
 * @namespace auth
 * @description POST /signin returns an authentification token if the right usernam and pwd are passed
 */
auth.post('/signin', (req, res, err) => {
    User.findOne({ username: req.body.username })
        .then((user) => {
          if (!user) {
            return res.status(401).json({error: 'User not found!'})
          }
          bcrypt.compare(req.body.password, user.password).then((valid) => {
            if(!valid) {
              return res.status(401).json({
                error: 'Incorrect password!'
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

export default auth;
