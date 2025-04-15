import mongoose, { Schema } from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const userSchema = new Schema({

    username: {
        type: String,
        required: [true, "username is required."],
        unique: true,
        lowercase: true,
        trim: true,
        index: true,
    },

    email: {
        type: String,
        required: [true, "email is required."],
        unique: true,
        lowercase: true,
        trim: true,
    },

    fullName: {
        type: String,
        required: [true, "fullName is required."],
        index: true,
    },

    avtar: {
        type: String, // cloudinary url used
        required: [true, "avtar is required."],
    },

    coverImage: {
        type: String,
    },

    watchHistory: [
        {
            type: Schema.Types.ObjectId,
            ref: "Video",
        }
    ],

    password: {
        type: String,
        required: [true, "Password is required."],
    },

    refreshTockens: {
        type: String,
    }

}, {timestapms: true});


// Using Middleware ==> To encrypt password
userSchema.pre("save", async function (next) {
    if(!this.isModified("password")) return next();

    this.password = bcrypt.hash(this.password, 10)
    next()
}

)

export const User = mongoose.model("User", userSchema);