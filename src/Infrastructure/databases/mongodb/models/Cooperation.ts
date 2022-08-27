import mongoose from 'mongoose'
import uniqueValidator from 'mongoose-unique-validator'

const stringRequiredSchema = { type: String, required: true }
const cooperationSchema = new mongoose.Schema({
  id: {
    ...stringRequiredSchema,
    unique: true
  },
  name: { type: String, required: true },
  address: {
    type: {
      street: { type: String, required: true },
      latitude: { type: String, required: true },
      longitude: { type: String, required: true },
      village: { type: String, required: true },
      district: { type: String, required: true },
      city: { type: String, required: true },
      province: { type: String, required: true }
    },
    required: true
  },
  memberUid: { type: String, required: true }
}, {
  timestamps: { createdAt: 'createdAt', updatedAt: 'lastUpdated' }
})

cooperationSchema.pre('save', (next) => {
  (cooperationSchema as any).createdAt = Date.now();
  (cooperationSchema as any).lastUpdated = Date.now()
  next()
})

cooperationSchema.pre('updateOne', (next) => {
  (cooperationSchema as any).lastUpdated = Date.now()
  next()
})

cooperationSchema.plugin(uniqueValidator)

export default mongoose.model('Cooperation', cooperationSchema)
