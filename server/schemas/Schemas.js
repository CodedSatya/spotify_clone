import { Schema } from "mongoose";


export const userSchema = new Schema({
  Username: String,
  Password: String,
  Email: String,
  DOB: String,
  Gender: String,
  receiveMessage: Boolean,
  shareData: Boolean
})