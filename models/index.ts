import dbConfig from "../config/db.config.js";
import mongoose from "mongoose";
import User from "./user.model.js";

mongoose.Promise = global.Promise;
const db = { url: dbConfig.url, user: User };
export default db;
