const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const { Schema } = mongoose;

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    minLength: 8,
    maxlength: 20,
    required: true,
    match: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{5,50}$/,
  },
  email: {
    type: String,
    unique: true,
    required: true,
    match: /\S+@\S+\.\S+/,
    lowercase: true,
  },

  gender: {
    type: String,
    required: true,
    enum: ["male", "female", "other"],
  },
  role: {
    type: String,
    require: true,
    enum: ["user", "admin"],
  },
  DateofBirth: {
    type: Date,
    require: true,
  },
  userName: {
    type: String,
    required: true,
    unique: true,
  },

  createdAt: {
    type: Date,
    immutable: true,
    default: () => {
      return Date.now();
    },
  },
  updatedAt: {
    type: Date,
    default: () => {
      return Date.now();
    },
  },
});

userSchema.pre("save", function (next) {
  const hashedPassword = bcrypt.hashSync(this.password, 10);
  this.password = hashedPassword;
  next();
});

const userModel = mongoose.model("User", userSchema);
module.exports = userModel;
