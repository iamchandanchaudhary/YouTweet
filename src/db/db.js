const mongoose = require("mongoose");
import { DB_NAME } from "../constants";

async function main() {
    const connectionInstance = await mongoose.connect(`${process.env.MONGODB}/${DB_NAME}`);
}

main()
    .then(() => {
        console.log(`MongoDB Connection Done !! ${connectionInstance.connection.host}`);
        // console.log(`MongoDb Connected !! ${connectionInstance}`);
    })
    .catch((err) => {
        console.log("MongoDB connection Error:", err);
        process.exit(1); // it is a reference of our current application
    });