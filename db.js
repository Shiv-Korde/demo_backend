const mongoose = require("mongoose");

// const mongoURI = "mongodb://localhost:27017/"
// const mongoURI = "mongodb+srv://shiv:shiv05@cluster0.fn70xtj.mongodb.net/Demo_First"
const mongoURI = "mongodb+srv://shiv:shiv05@cluster0.fn70xtj.mongodb.net/System_info"

const connectToMongo = () =>{
    mongoose.connect(mongoURI)
    .then(console.log("Connected to MongoDB!"))
}

module.exports=connectToMongo;