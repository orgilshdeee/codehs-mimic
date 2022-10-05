import * as mongoose from "mongoose"

export const UserSchema = new mongoose.Schema({
    name: { type: String, required:true },
    age: { type: String, required: true },
    gender: { type: String, required: true }
})

export interface User {
    id: string;
    name: string;
    age: number;
    gender: string;
}