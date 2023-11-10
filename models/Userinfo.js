const mongoose = require("mongoose");
const { Schema } = mongoose;

const UserinfoSchema = new Schema({
  user_id:{
    type:String,
    status:true,
    unique:true
  },
  name:{
    type:String
  },
  email:{
    type:String
  },
  password:{
    type:String
  },
  company:{
    type:String
  },
  created_on:{
    type: Date,
    default: Date.now
  }
});

module.exports=mongoose.model('dt_users',UserinfoSchema);