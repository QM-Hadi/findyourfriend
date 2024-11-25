
import mongoose from 'mongoose';
const { Schema } = mongoose;


const userSchema = new Schema({
    fullName :string,
    email :string,
    passsward :string,
    location :{
        lat :string,
        long :string,
    },
    profileImg :string,
    adress :string,
    bio :string,

});

export const UserModal =mongoose.model.users || mongoose.model('Users', userSchema);
