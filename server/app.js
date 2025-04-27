import express from 'express';
import { config } from 'dotenv';
import {connectDB} from './config/database.js'
import msgRoutes from './routes/msgroute.js'
import cors from "cors";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    methods: ['POST', 'GET', 'PUT', 'DELETE'],
    origin: '*',
  }))
  app.set('trust proxy', true);
  
  config();
  connectDB();
  
  
  app.use('/api/msg', msgRoutes)


const PORT = process.env.PORT || 3000;


app.listen(PORT, () => {
  console.log(`🌐 Server is running on port http://localhost:${PORT}`);
}
)