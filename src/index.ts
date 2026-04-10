import express from 'express';
import { authRoutes } from './routes';
import dotenv from 'dotenv';

dotenv.config()

const app = express();

app.use(express.json());
app.use('/api/auth',authRoutes)

app.listen(process.env.PORT,()=>{
    console.log(`App running in http://localhost:${process.env.PORT}`); 
})
