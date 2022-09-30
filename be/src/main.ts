import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv'
import mongoose from "mongoose";

dotenv.config();

const PORT = process.env.PORT || 4000;

bootstrap();
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(PORT,()=>{
    console.log(`Server is runnon on : ${PORT}`)
  });
}

