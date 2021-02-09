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

app.use('/CIDT', express.static('CIDT.md'))

app.use('/users', users);

app.listen(port, () => console.log(`The api is listening on port localhost:${port}!`));

/**
 * @function mongoose_close
 * @description closes connection to mongo on shutdown of the api to prevent the number of connection to explode
 */
process.on('SIGINT', function() {
  mongoose.connection.close(() => {
    console.log('Mongoose disconnected on app termination');
    process.exit(0);
  });
});

export default app;