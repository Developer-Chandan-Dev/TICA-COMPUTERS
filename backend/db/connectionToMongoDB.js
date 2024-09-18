const mongoose = require("mongoose");

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on("connected", () => {
  console.log("Connected to MongoDB");
});

db.on("disconnected", () => {
  console.log("Disconnected to MongoDB");
});

db.on("error", (error) => {
  console.error("MongoDB connection error", error);
});

module.exports = db;
