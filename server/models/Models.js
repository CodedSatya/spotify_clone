import mongoose from "mongoose";
import { userSchema } from "../schemas/Schemas.js";

export const User = mongoose.model('User', userSchema)