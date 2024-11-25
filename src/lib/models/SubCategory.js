





import { Type } from 'lucide-react';
import mongoose from 'mongoose';
const { Schema } = mongoose;


const subCategorSchema = new Schema({
    title: { type: string, required: true },
    description: { type: string, required: true },
    category: { type: mongoose.types.ObjectId, ref: "Categories" },

});

export const subcategoryModal =mongoose.model.Subcategory || mongoose.model('Users', subCategorSchema);
