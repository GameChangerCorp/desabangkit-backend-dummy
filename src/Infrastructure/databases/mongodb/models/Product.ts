import mongoose from 'mongoose'
import uniqueValidator from 'mongoose-unique-validator'

const productSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
    unique: true
  },
  sku: {
    type: String,
    required: true
  },
  category: {
    type: {
      id: {
        type: String,
        required: true
      },
      name: {
        type: String,
        required: true
      }
    },
    required: true
  },
  name: {
    type: String,
    required: true
  },
  unit: {
    type: String,
    required: true
  },
  price: {
    type: String,
    required: true
  }
}, {
  timestamps: { createdAt: 'createdAt', updatedAt: 'lastUpdated' }
})

productSchema.pre('save', (next) => {
  (productSchema as any).createdAt = Date.now();
  (productSchema as any).lastUpdated = Date.now()
  next()
})

productSchema.pre('updateOne', (next) => {
  (productSchema as any).lastUpdated = Date.now()
  next()
})

productSchema.plugin(uniqueValidator)

export default mongoose.model('Product', productSchema)
