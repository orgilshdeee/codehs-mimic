import { Controller, Post, Get, Delete, Put } from "@nestjs/common"
import { UserService } from "./user.service";
import { Request, Response } from "express";

@Controller("user")

export class UserController{
    constructor(private userService:UserService){}

    @Post("signup")
    signup(req:Request, res: Response){
        console.log(req)
        console.log(res)
        return this.userService.createUser()
    }

    @Get("allUser")
    getAllUser(){
        return this.userService.getAllUser()
    }


    @Get("byId")
    getById(req:Request){
        console.log(req)
        return this.userService.getUserById(req)
    }


    @Delete("delete")
    delete(req:Request){
        return this.userService.deleteUser(req)
    }

    @Put("update")
    update(req:Request){
        return this.userService.updateUser(req);
    }

}