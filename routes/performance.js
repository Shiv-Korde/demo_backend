const express = require("express");
const router = express.Router();
const Systeminfo = require("../models/Systeminfo");

//creating fuelstation instance POST "/api/performance/". Doesn't require any authentication
router.post("/", async(req, res) => {
  // Check if the document with the specified fs_id already exists in the collection
  const filter = { fs_id: req.body.fs_id };
  const existingDocument = await Systeminfo.findOne(filter);

  // If the document with the specified fs_id exists, then overwrite the document with the new data
  if (existingDocument) {
    await Systeminfo.replaceOne(filter, req.body);
  } else {
    // If the document with the specified fs_id does not exist, then insert a new document with the new data
    const systeminfo = new Systeminfo(req.body);
    await systeminfo.save();
  }

  // Send a success response
  res.send({ message: "Data saved successfully" });
});

module.exports = router;