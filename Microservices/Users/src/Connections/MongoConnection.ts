import { IConnection } from "./Interfaces/IConnection";
import * as mongoose from "mongoose";

export class MongoConnection implements IConnection {
  async createConnect(): Promise<any> {
    try {
      return await mongoose.connect("mongodb://localhost/my_database", {
        useNewUrlParser: true
      });
    } catch (error) {
      console.error(error);
    }
  }
}
