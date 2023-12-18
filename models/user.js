import { models, Schema, model } from "mongoose";

const userSchema = new Schema({
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: [true, "Email already exists"],
  },
  username: {
    type: String,
    required: [true, "Email is required"],
    unique: [true, "Email already exists"],
  },
  image: { type: String },
});

const User = models.User || model("User", userSchema);
export default User;
