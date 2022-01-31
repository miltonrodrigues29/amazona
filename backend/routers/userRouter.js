import express from "express";
import User from "../models/userModel.js";
import data from "../data.js";
import expressAsyncHandler from "express-async-handler";
import bcrypt from "bcryptjs";
import { generateToken } from "./utils.js";


const userRouter = express.Router();

//wrapping the async function using expressAsyncHandler to avoid loading of page when a error occurs or during multiple same emails
userRouter.get('/seed', expressAsyncHandler(async (req,res)=>
{
   // await User.remove({}); //removes all of the users in mongo
   const createdUsers = await User.insertMany(data.users);
   res.send({createdUsers});
}))

userRouter.post('/signin', expressAsyncHandler(async (req,res)=>
{
   const user = await User.findOne({email:req.body.email});
   if((user))
   {
      if(bcrypt.compareSync(req.body.password,user.password)){
         res.send({
            _id:user.id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
            token: generateToken(user),
         });
         return;
      }
   }
   {
      res.status(401).send({message:'Invalid email or password'});
   }
}))

export default userRouter;