const express = require("express");
const router = express.Router();
const Userinfo = require("../models/Userinfo.js");
const cors = require("cors")
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

//creating fuelstation instance POST "/api/performance/". Doesn't require any authentication
// router.post("/", async(req, res) => {
//   // Check if the document with the specified fs_id already exists in the collection
//   const filter = { fs_id: req.body.fs_id };
//   const existingDocument = await Systeminfo.findOne(filter);

//   // If the document with the specified fs_id exists, then overwrite the document with the new data
//   if (existingDocument) {
//     await Systeminfo.replaceOne(filter, req.body);
//   } else {
//     // If the document with the specified fs_id does not exist, then insert a new document with the new data
//     const systeminfo = new Systeminfo(req.body);
//     await systeminfo.save();
//   }

//   // Send a success response
//   res.send({ message: "Data saved successfully" });
// });

router.post("/", async (req, res) => {
    const { emailInput, passwordInput, remeberMe } = req.body

    try {
        console.log(emailInput + " " + passwordInput)
        // const check = await Userinfo.findOne({ email: "Shivhari.korde@innotronixlabs.com" })
        const filter = { email: emailInput , password: passwordInput };
        const check = await Userinfo.findOne(filter);
         console.log("check", check);
        if (check) {
            obj = { company: check.company, exist: true, user_id: check.user_id};
            res.json({obj});
            console.log("exist");
        }
        else {
            res.json({ exist: false });
            console.log("not exist");
        }

    }
    catch (e) {
        res.json("fail")
    }

})

module.exports = router;