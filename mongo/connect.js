import mongoose from 'mongoose'
import dotenv from 'dotenv'

const config = dotenv.config().parsed

/**
 * @constant uri to connect to the db
 * @description raw string uri has been replaced with dotenv variable (contained in a .env file that will not appear on the repo), I have willingly pushed the .env file to simplify things but normally I wouldnt have pushed it, also to test this I could console.log the uri in a web script
 */
const uri = config.MONGO_URI


const client = async () => {
  await mongoose.connect(uri, {useUnifiedTopology: true, useNewUrlParser: true})
  console.log('mongo is connected !')
}

export default client
