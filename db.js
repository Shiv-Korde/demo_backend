const mongoose = require("mongoose");

const mongoURI = "mongodb+srv://shiv:shiv05@cluster0.fn70xtj.mongodb.net/?retryWrites=true&w=majority"

const connectToMongo = () =>{
    mongoose.connect(mongoURI)
    .then(console.log("Connected to MongoDB!"))
}

module.exports=connectToMongo;