import mongoose from "mongoose";

let isConnected = false;

export const connect_to_db = async () => {
    mongoose.set("strictQuery", true);

    if(isConnected) {
        console.log("MongoDB is already connected");
        return;
    }

    try {
        await mongoose.connect(process.env.MONGODB_URI!, {
            dbName: "smarttrash-db",
            // useNewUrlParser: true,
        })

        isConnected = true;

        console.log("MongoDB connected");
    } catch (error) {
        console.log(error);
    }
}