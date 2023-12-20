const mongoose = require("mongoose");

DB_URI='mongodb://0.0.0.0/Octa';

const connectDB = async () => {
  return mongoose
    .connect(DB_URI)
    .then(() => console.log(`connection to database established...`))
    .catch((err) => console.log(err));
};

module.exports = connectDB;