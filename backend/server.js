import express from 'express';
import mongoose from 'mongoose';

import userRouter from './routers/userRouter.js';
import productRouter from './routers/productRouter.js'


const app = express();

mongoose.connect(process.env.MONGODB_URL ||  'mongodb://localhost/amazona')

//last amazona represents the database name

// app.get('/api/products/:id', (req, res) => {
//   const product = data.products.find((x) => x._id === req.params.id);
//   if (product) {
//     res.send(product);
//   } else {
//     res.status(404).send({ message: 'Product Not Found' });
//   }
// });

// app.get('/api/products', (req, res) => {
//   res.send(data.products);
// });

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
