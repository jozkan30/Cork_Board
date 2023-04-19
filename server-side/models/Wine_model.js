import mongoose from "mongoose";


const Schema = mongoose.Schema;

let Comment = new Schema({
  user: { type: String, required: true },
  content: { type: String, required: true },
  created_at: { type: Date, default: Date.now },
});

let Review = new Schema({
  winery: { type: String, required: true },
  grapes: { type: String, required: true },
  vintage: { type: Number, required: true },
  region: { type: String, required: true },
  country: { type: String, required: true },
  description: { type: String, required: true },
  rating: { type: Number, required: true },
  image: { type: String, required: true },
  comments: [Comment],
  created_at: { type: Date, default: Date.now },
})


export default mongoose.model("review", Review);