import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { MongooseModule } from "@nestjs/mongoose"
import { User, UserSchema } from './user.schema';

@Module({
    imports: [MongooseModule.forRoot("mongodb+srv://orgilshdeee:Blacklist12345@cluster0.rdjpop9.mongodb.net/test"),
            MongooseModule.forFeature([{ name: User.name, schema: UserSchema}])],
    controllers:[UserController],
    providers:[UserService]
})

export class UserModule {}
