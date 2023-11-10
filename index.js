const connectToMongo = require("./db");
const express = require('express');
const Systeminfo = require("./models/Systeminfo")
const cors = require("cors");
const {authCompany} = require("./middlewares")
// const SocketIO = require('socket.io');
// const io = require("socket.io");

connectToMongo();

const app = express()
const port = 5000
// const server = io.listen(5000);
app.use(cors());

app.use(express.json());

app.use("/api/performance",require("./routes/performance"))

app.use("/api/login", require("./routes/user_login"))



// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })
// app.get("/sys_info", async (req, res) => {
//   try {
//       const systeminfo = await Systeminfo.find(); // Retrieve all fuel stations from MongoDB
//       res.json(systeminfo);
//   } catch (error) {
//       console.error("Error fetching fuel stations: " + error);
//       res.status(500).json({ error: "Unable to retrieve fuel stations" });
//   }
// });
app.get("/Innotronixlabs/:user_id",authCompany, async (req, res) => {
  try {
      // console.log(req.query.company);
      const systeminfo = await Systeminfo.find(); // Retrieve all fuel stations from MongoDB
      res.json(systeminfo);
  } catch (error) {
      console.error("Error fetching fuel stations: " + error);
      res.status(500).json({ error: "Unable to retrieve fuel stations" });
  }
});

app.get("/HPCL/:user_id",authCompany, async (req, res) => {
  try {
      const systeminfo = await Systeminfo.find({ company: "HPCL" }); // Retrieve all fuel stations from MongoDB
      res.json(systeminfo);
  } catch (error) {
      console.error("Error fetching fuel stations: " + error);
      res.status(500).json({ error: "Unable to retrieve fuel stations" });
  }
});
app.get("/BPCL/:user_id",authCompany, async (req, res) => {
  try {
      const systeminfo = await Systeminfo.find({ company: "BPCL" }); // Retrieve all fuel stations from MongoDB
      res.json(systeminfo);
  } catch (error) {
      console.error("Error fetching fuel stations: " + error);
      res.status(500).json({ error: "Unable to retrieve fuel stations" });
  }
});
app.get("/IOCL/:user_id",authCompany, async (req, res) => {
  try {
      const systeminfo = await Systeminfo.find({ company: "IOCL" }); // Retrieve all fuel stations from MongoDB
      res.json(systeminfo);
  } catch (error) {
      console.error("Error fetching fuel stations: " + error);
      res.status(500).json({ error: "Unable to retrieve fuel stations" });
  }
});
app.get("/JIOBP/:user_id",authCompany, async (req, res) => {
  try {
      const systeminfo = await Systeminfo.find({ company: "JIOBP" }); // Retrieve all fuel stations from MongoDB
      res.json(systeminfo);
  } catch (error) {
      console.error("Error fetching fuel stations: " + error);
      res.status(500).json({ error: "Unable to retrieve fuel stations" });
  }
});
app.get("/Nayara/:user_id",authCompany, async (req, res) => {
  try {
      const systeminfo = await Systeminfo.find({ company: "Nayara" }); // Retrieve all fuel stations from MongoDB
      res.json(systeminfo);
  } catch (error) {
      console.error("Error fetching fuel stations: " + error);
      res.status(500).json({ error: "Unable to retrieve fuel stations" });
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})