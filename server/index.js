import dotenv from 'dotenv';
import connectToDatabase from './db.js';
import express from 'express';
import productRouter from './routes/productRoute.js'


dotenv.config();

connectToDatabase();
const app = express();

app.use(express.json());
app.use('/api/products',productRouter)



const port =  5000;


app.listen(port, () => {
  console.log(`Server runs on port ${port}.`);
});