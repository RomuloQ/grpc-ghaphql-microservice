import * as mongoose from "mongoose";
import {Query, Schema} from "mongoose";
import { IUser } from "./Interfaces/IUser";

const UserSchema = new mongoose.Schema({
    nome: {type: String, required: true},
    email: {type: String, unique: true, required: true},
})


export const User = mongoose.model<IUser>('usuarios', UserSchema);
