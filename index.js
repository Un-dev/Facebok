import express from 'express'
import helmet from 'helmet'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'

import auth from './routes/auth.js'
import users from './routes/users.js'
import client from './mongo/connect.js'

client()
const app = express()
const port = 8000

app.use(bodyParser.json())
app.use(helmet())

app.use('/', express.static('out'))

app.use('/CIDT', express.static('CIDT.md'))

app.use('/users', users)

app.use('', auth)

app.listen(port, () => console.log(`The api is listening on port localhost:${port}!`));

/**
 * @function closes connection to mongo on shutdown of the api to prevent the number of connection to explode
 */
process.on('SIGINT', function() {
  mongoose.connection.close(() => {
    console.log('Mongoose disconnected on app termination')
    process.exit(0)
  });
});

export default app;