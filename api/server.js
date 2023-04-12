//? For express instilation
const express = require("express");

//? For MongoDB instilation
const mongoose = require("mongoose");

//? Hiding Appkey secret key etc.
const dotEnv = require("dotenv");

const app = express();
const cors=require("cors")

//? Listening port number
const port = 5000;

//* routes
const categoryRoute = require("./routes/categories.js");
const productRoute = require("./routes/products.js");
const billRoute = require("./routes/bills.js");
const authRoute = require("./routes/auth.js");

dotEnv.config();

const connect = async () => {
  try {
    //? MongoDB connection String
    await mongoose.connect(process.env.MONGO_URL);

    //? If connected
    console.log("Connected to mongoDB");
  } catch (error) {
    throw error;
  }
};

//* middle awares
app.use(express.json());
app.use(cors());

app.use("/api/categories", categoryRoute);
app.use("/api/products", productRoute);
app.use("/api/bills", billRoute);
app.use("/api/auth", authRoute);

// app.get("/", (req, res) => res.send("Hello world"));
app.listen(port, () => {
  connect();
  console.log(`Example app listening on port ${port}`);
});
