import mongoose from "mongoose";


const Schema = mongoose.Schema;

let Review = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  rating: { type: Number, required: true },
  image: { type: String, required: true },
  created_at: { type: Date, default: Date.now },
})


export default mongoose.model("review", Review);