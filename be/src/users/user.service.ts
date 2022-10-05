import { Injectable } from "@nestjs/common";
import { User } from "./user.model";
import { InjectModel } from "@nestjs/mongoose"
import { Model } from "mongoose";

@Injectable()
export class UsersService {
    private users: User[] = [];

    constructor(@InjectModel("User") private userModel: Model<User>) {}

    async insertUser(name: string, age: number, gender: string){

        const newUser = new this.userModel({
            name,
            age, 
            gender
        });

        const result = await newUser.save();
        console.log(result)
        return result.id as string
    }

    async getUsers(){
        const users = await this.userModel.find();
        console.log(users)
        return users as User[];
    }

    async getUserById(userId: string){
        const user = await this.userModel.findById(userId)
        return user;
    }

    async updateUser(userId: string, name:string, age: number, gender: string){
        const user = await this.userModel.findByIdAndUpdate(userId, {name: name, age: age, gender: gender});
        console.log(name);
        console.log(age);
        console.log(gender);
        return user
    }

    async deleteUser(userId: string){
        const user = await this.userModel.findByIdAndDelete(userId);
        // console.log(user)
        return user;
    }

}