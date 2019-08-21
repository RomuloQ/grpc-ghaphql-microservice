import * as mongoose from "mongoose"

export interface IUser extends mongoose.Document {
    _id: string;
    nome: string;
    email: string;
}
