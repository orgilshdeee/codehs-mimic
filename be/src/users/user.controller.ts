import { Controller, Post, Body, Get, Param, Patch, Delete, Put } from "@nestjs/common";
import { UsersService } from "./user.service";

@Controller("users")
export class UsersController{
    constructor(private readonly usersService: UsersService) {}

    @Post("add")
     async addUser(
        @Body("name") userName: string,
        @Body("age") userAge: number,
        @Body("gender") userGender: string,
    ) {
        const generateId = await this.usersService.insertUser(
            userName,
            userAge,
            userGender
        ); 
        return { id: generateId }
    }

    @Get("all")
    async getAllUsers(){
        const result = await this.usersService.getUsers();
        return result
    }

    @Get(":id")
    async getUser(@Param("id") userId: string){
        console.log(userId)
        const user = await this.usersService.getUserById(userId)
        return user
    }

    @Patch(":id")
    async updateUser(
        @Param("id") userId: string,
        @Body("name") userName: string,
        @Body("age") userAge: number,
        @Body("gender") userGender: string,
        ){
        // console.log(userId)
        const user = await this.usersService.updateUser(userId, userName, userAge, userGender)
        return "user updated"
    }

    @Delete(":id")
    async deleteUser(
        @Param("id") userId: string){
        const user = await this.usersService.deleteUser(userId)
        return "user deleted"
    }
}