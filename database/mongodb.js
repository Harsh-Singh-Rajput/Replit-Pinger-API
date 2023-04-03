import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

async function Connect() {
  const username = process.env.MONGO_DB_USERNAME;
  const password = process.env.MONGO_DB_PASSWORD;
  const url = process.env.MONGO_DB_URL;
  try {
    await mongoose.connect(
      `mongodb+srv://${username}:${password}@${url}/?retryWrites=true&w=majority`
    );
    console.log("MongoDB connection is successfull");
  } catch (error) {
    console.log(error);
  }
}

export default Connect;
