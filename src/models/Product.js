import mongoose, { Schema } from 'mongoose'
const reviewSchema = new mongoose.Schema({
  review: { type: String, required: true },
  rating: { type: Number, required: true, min: 1, max: 5 },
})
const productsSchema = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String },
    shortDescription: { type: String },
    additional: { type: String },
    price: { type: Number, required: true },
    discount: { type: Number, required: true },
    category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category' },
    images: [{ type: String }],
    size: [{ type: String }],
    color: [{ type: String }],
    SKU: { type: String },
    tags: [{ type: String }],
    reviews: [reviewSchema],
  },
  { timestamps: true }
)

const Products =
  mongoose.models.Products || mongoose.model('Products', productsSchema)

export default Products
