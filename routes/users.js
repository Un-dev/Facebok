import express from 'express';

const users = express.Router();

users.get('/', (req, res) => {
  res.send('Hello World');
});

users.get('/:id', (req, res) => {

});

users.post('/', (req, res) => {

});

export default users;