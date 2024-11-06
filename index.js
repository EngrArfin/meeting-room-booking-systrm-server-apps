const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;

//middleware
app.use(cors());
app.use(express.json());

// MongoDB connection URL
const uri = process.env.DATABASE_URL;

const client = new MongoClient(uri, {
  serverApi: ServerApiVersion.v1,
});

app.get("/", (req, res) => {
  req.send("attendance is sitting");
});
app.listen(port, () => {
  console.log(`Attendence is setting on the port ${port}`);
});
