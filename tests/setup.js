import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config({ path: ".env.test" });

beforeAll(async () => {
  await mongoose.connect(process.env.MONGO_URI);
});

afterAll(async () => {
  await mongoose.connection.db.dropDatabase();
  await mongoose.disconnect();
});
