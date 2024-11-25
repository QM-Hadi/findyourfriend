








import mongoose from 'mongoose';
const { Schema } = mongoose;


const categorySchema = new Schema({
    title: {type :string , required : true},
    description: {type :string , required : true},
    thumnail:{type :string , required : true},

});

export const CategoryModal = mongoose.models.category || mongoose.model('Categories', categorySchema);
