import mongoose from "mongoose";
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true
  },
  password: {
    type: String,
    required: true
  },
},
{timestamps: true },
);

export default mongoose.model('User', UserSchema);
