import dbConfig from "../config/db.config";
import mongoose from "mongoose";
import User from "./user.model";
import Resume from "./resume.model";

mongoose.Promise = global.Promise;
const db = { url: dbConfig.url, user: User, resume: Resume };
export default db;
