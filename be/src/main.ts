import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv'
import mongoose from "mongoose";

dotenv.config();

const PORT = process.env.PORT || 4000;
const ATLAS_MONGO_SERVER = process.env.ATLAS_MONGO_CONNECTION || "localhost";

let server:any;

mongoose.connect(ATLAS_MONGO_SERVER).then(()=>{
  console.log("Connected to the MongoDB");
  bootstrap(server);
})

async function bootstrap(server:any) {
  const app = await NestFactory.create(AppModule);
  server = await app.listen(PORT,()=>{
    console.log(`Server is runnon on : ${PORT}`)
  });
}

