const mongoose = require("mongoose");
// import mongoose from "mongoose";
import { DB_NAME } from "./constants";

const express = require("express");

async function main() {
    await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);
}

main()
    .then(() => console.log("Connection Done."))
    .catch((err) => console.log(err));