import mongoose from 'mongoose'
import { MONGODB_URI } from '../../../Common/config'

export const CreateConnection = async (): Promise<void> => {
  await mongoose.connect(MONGODB_URI)
}
