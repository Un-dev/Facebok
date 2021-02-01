import express from 'express'
import bodyParser from 'body-parser'
import users from './routes/users.js'
import client from './mongo/connect.js'
import mongoose from 'mongoose'

client()
const app = express();
const port = 8000;

app.use(bodyParser.json())

app.use('/', express.static('out'))

app.use('/users', users);

app.listen(port, () => console.log(`The api is listening on port localhost:${port}!`));

//closes mongo connection on process stop (that's one of the security stuff I had to add to the project as it may just break the api during a normal use)
process.on('SIGINT', function() {
    mongoose.connection.close(() => {
      console.log('Mongoose disconnected on app termination');
      process.exit(0);
    });
  });

export default app;