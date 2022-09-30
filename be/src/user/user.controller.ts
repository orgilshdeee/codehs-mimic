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
        return "i am signup"
    }

    @Get("allUser")
    getAllUser(){
        return "i am alluser"
    }


    @Get("byId")
    getById(req:Request){
        console.log(req)
        return "i am byid"
    }


    @Delete("delete")
    delete(req:Request){
        return "i am delete"
    }

    @Put("update")
    update(req:Request){
        return "i am update"
    }

}