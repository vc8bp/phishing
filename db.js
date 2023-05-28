const dotenv = require("dotenv");
dotenv.config();
const mongoose = require("mongoose");
const mongoURI = process.env.MONGODB_URL;
mongoose.set('strictQuery', false);

const connectToMongo = () => {
    mongoose
    .connect(mongoURI, {autoIndex: true})
    .then(() => {
      console.log("successfully db connected");
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = connectToMongo;
