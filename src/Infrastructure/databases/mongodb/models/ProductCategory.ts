import mongoose from 'mongoose'
import uniqueValidator from 'mongoose-unique-validator'

const productCategorySchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
    unique: true
  },
  name: {
    type: String,
    required: true
  }
}, {
  timestamps: { createdAt: 'createdAt', updatedAt: 'lastUpdated' }
})

productCategorySchema.pre('save', (next) => {
  (productCategorySchema as any).createdAt = Date.now();
  (productCategorySchema as any).lastUpdated = Date.now()
  next()
})

productCategorySchema.pre('updateOne', (next) => {
  (productCategorySchema as any).lastUpdated = Date.now()
  next()
})

productCategorySchema.plugin(uniqueValidator)

export default mongoose.model('ProductCategory', productCategorySchema)
