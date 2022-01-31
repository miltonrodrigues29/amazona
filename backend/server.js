import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routers/userRouter.js';
import productRouter from './routers/productRouter.js'

dotenv.config();
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}))

mongoose.connect(process.env.MONGODB_URL ||  'mongodb://localhost/amazona')

app.use('/api/users',userRouter); //for this prefic userRouter should respond, i.e if it is followed by /seed than it should call create user api
app.use('/api/products',productRouter); //productRouter is a responder

app.get('/', (req, res) => {
  res.send('Server is ready');
});


//error catcher, handles error occured in router functions wrapped in express-async-handler.
app.use((err,req,res,next)=>
{
  res.status(500).send({message:err.message})
})

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Serve at http://localhost:${port}`);
});
