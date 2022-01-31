import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name: {type:String, required:true},
    email: {type:String, required:true,unique:true},
    password: {type:String,required:true},
    name: {type:String , required:true},
    isAdmin: {type:Boolean,default:false,required:true}
},{
    timestamps:true
    //adds a new field beside the above fields , updated at and added at
})
//its a skeleton

const User = mongoose.model('User',userSchema);
export default User;