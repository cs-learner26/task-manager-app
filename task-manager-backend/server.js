const mongoose = require("mongoose");
require("dotenv").config();

const app = require("./app");

const PORT = process.env.PORT || 5000;

if (process.env.NODE_ENV !== "test") {
  mongoose.connect(process.env.MONGO_URI)
    .then(() => {
      console.log("MongoDB connected successfully");

      app.listen(PORT, () => {
        console.log(`Server running on ${PORT}`);
      });
    })
    .catch(err => console.log("MongoDB connection error:", err));
}