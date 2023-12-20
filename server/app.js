require("dotenv").config({ path: "./config/config.env" });
const express = require("express");
const morgan = require("morgan");

const connectDB = require("./config/db");

const auth = require("./middlewares/auth");

const app = express();

// middlewares
app.use(express.json()); //it will help us to send the response back in json format and it will also help us parse the body data
app.use(morgan("tiny")); //if we hot any api endpoint it will log in our console
app.use(require("cors")());

// routes
app.use("/api", require("./routes/auth"));
app.use("/api", require("./routes/contact"));

// server configurations.
const PORT = process.env.PORT || 8000;
app.listen(PORT, async() => {
  try{
    await connectDB();
    console.log(`server listening on port: ${PORT}`);
  }
 catch(err){
    console.log(err);
 }
});