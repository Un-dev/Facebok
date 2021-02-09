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

/**
 * @function helmet
 * @description sets the use of helmet, a package that sets various http header to prevent some type of attack such as :
 * XSS (code injection), 
 * clickjacking attack (baiting the user by forcing him to click on hidden link above actual link of a site), 
 * also prevents DNS prefetch, whiwch is not really an attack but it gives your IP to DNs servers you havant visited
 */
app.use(helmet())

app.use('/', express.static('out'))

app.use('/CIDT', express.static('CIDT.md'))

app.use('/users', users)

app.use('', auth)

app.listen(port, () => console.log(`The api is listening on port localhost:${port}!`));

/**
 * @function mongoose_close
 * @description closes connection to mongo on shutdown of the api to prevent the number of connection to explode
 */
process.on('SIGINT', function() {
  mongoose.connection.close(() => {
    console.log('Mongoose disconnected on app termination')
    process.exit(0)
  });
});

export default app;