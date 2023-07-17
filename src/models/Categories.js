import mongoose, { Schema } from 'mongoose'

const categoriesSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    img: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
)

const Categories =
  mongoose.models.Categories || mongoose.model('Categories', categoriesSchema)

export default Categories
