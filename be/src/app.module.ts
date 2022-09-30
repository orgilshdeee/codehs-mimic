import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { UserSchema } from './user/user.schema';
import { MongooseModule } from "@nestjs/mongoose"

@Module({
  imports: [AuthModule, UserModule, 
    MongooseModule.forRoot("mongodb+srv://orgilshdeee:Blacklist12345@cluster0.rdjpop9.mongodb.net/codehs-mimic"), 
    MongooseModule.forFeature([{name:"User",schema:UserSchema}])],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
