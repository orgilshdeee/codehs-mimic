import { Injectable } from "@nestjs/common"
import { Request, Response } from "express"
import { InjectModel } from "@nestjs/mongoose"
import { User, UserDocument } from "./user.schema"
import { Model } from "mongoose"
import { CreateUserDto } from "./dto/create-user.dto"
 
@Injectable({})

export class UserService{
    constructor(@InjectModel(User.name) private catModel: Model<UserDocument>) {}
    
    async create(createUser)
}