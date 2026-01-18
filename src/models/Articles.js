import mongoose, { Schema, model, models } from 'mongoose';

const ArticleSchema = new Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  slug: { type: String, required: true, unique: true },
}, {timestamps: true})

export default mongoose.models.Articles || mongoose.model('Articles', ArticleSchema);