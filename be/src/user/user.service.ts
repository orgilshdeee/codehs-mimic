import { Injectable } from "@nestjs/common"
import { Request, Response } from "express"

@Injectable({})

export class UserService{
    createUser(){
        return {msg:"user created"}
    }
    getAllUser(){
        return {msg:"got all user"}
    }
    getUserById(req:Request){
        // console.log(req)
        return {msg:"got user by id"}
    }
    updateUser(req:Request){
        return {msg: "user updated"}
    }
    deleteUser(req:Request){
        return {msg: "user deleted"}
    }
}