import mongoose, { Schema } from "mongoose";

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

export const User = mongoose.model("User", userSchema);