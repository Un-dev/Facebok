import mongoose from 'mongoose'

/**
 * @vulnerabilty : db uri shows dbuser and dbpwd in raw string
 */
const uri = "mongodb+srv://toto:toto@cluster0.q6ogu.mongodb.net/facebok?retryWrites=true&w=majority"

const client = async () => {
  await mongoose.connect(uri, {useUnifiedTopology: true, useNewUrlParser: true})
  console.log('mongo is connected !')
}

export default client
