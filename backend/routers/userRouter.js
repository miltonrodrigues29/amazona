import express from "express";
import User from "../models/userModel.js";
import data from "../data.js";
import expressAsyncHandler from "express-async-handler";


const userRouter = express.Router();


//wrapping the async function using expressAsyncHandler to avoid loading of page when a error occurs or during multiple same emails
userRouter.get('/seed', expressAsyncHandler(async (req,res)=>
{
   // await User.remove({}); //removes all of the users in mongo
   const createdUsers = await User.insertMany(data.users);
   res.send({createdUsers});
}))

export default userRouter;