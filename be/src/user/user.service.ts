import { Injectable } from "@nestjs/common"
import { Request, Response } from "express"
import { InjectModel } from "@nestjs/mongoose"
import { User } from "./user.schema"
import { Model } from "mongoose"
 
@Injectable({})

export class UserService{
}