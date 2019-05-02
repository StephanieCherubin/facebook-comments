import mongoose from 'mongoose';
const Schema = mongoose.Schema;

// create a new instance of the mongoose.schema The schema takes an object that shows the shape of your database entries
const CommentsSchema = new Schema({
  author: String,
  text: String,
}, { timestamps: true });

// export module in server.js
export default mongoose.model('Comment', CommentsSchema);