import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from "@nestjs/mongoose"
import { UsersModule } from './users/user.module';

@Module({
  imports: [
    MongooseModule.forRoot("mongodb+srv://orgilshdeee:Blacklist12345@cluster0.rdjpop9.mongodb.net/nest-test"),
    UsersModule],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {}