import mongoose from 'mongoose'

const connectMongoDB = async () => {
  try {
    await mongoose.connect(
      'mongodb+srv://evgen3:FLn3PnqhOcX7eQ9R@cluster0.ovca4km.mongodb.net/gopota'
    )
    console.log('Connected to MongoDB.')
  } catch (error) {
    console.log(error)
  }
}

export default connectMongoDB
