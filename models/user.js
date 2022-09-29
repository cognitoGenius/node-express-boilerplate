import mongoose from "mongoose";
import validator from 'validator';

//Defining user schema
const userSchema = mongoose.Schema({

})

const User = mongoose.model('User', userSchema)

export default User