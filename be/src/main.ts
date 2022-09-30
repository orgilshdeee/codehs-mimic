import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv'

dotenv.config();

const PORT = process.env.PORT || 4000;
let server:any;

bootstrap(server);

async function bootstrap(server:any) {
  const app = await NestFactory.create(AppModule);
  server = await app.listen(PORT,()=>{
    console.log(`Server is runnon on : ${PORT}`)
  });
}