import mongoose, { Schema } from "mongoose";
import { IUser } from "./user.interfaces";

const userSchema = new Schema<IUser>({
    firstName:{
        type: String,
        required:true,
    },
    lastName:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
        minlength:8
    },
    phone:{
        type:Number,
        required:true
    },
    registerId:{
        type:String,
        required:true,
        minlength:10,
        maxlength:10,
    }
})

const User = mongoose.model("User", userSchema);

export default User;