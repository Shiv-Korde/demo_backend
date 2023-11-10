const mongoose = require("mongoose");
const { Schema } = mongoose;

const SysteminfoSchema = new Schema({
  fs_id:{
    type:String,
    status:true,
    unique:true
  },
  status:{
    type:String
  },
  cpu_temp:{
    type:String
  },
  gpu_temp:{
    type:String
  },
  last_updated_timestamp:{
    type: String
  }
});

module.exports=mongoose.model('systeminfo',SysteminfoSchema);