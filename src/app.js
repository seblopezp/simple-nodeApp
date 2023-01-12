const express = require("express");
const app = express();
const sensorRouter = require("./routes/SensorRoutes");
//middleware
app.use(express.json());
 
app.listen(3001, () => {
  console.log("Server is running on port 3001");
});

app.use("/api/sensors", sensorRouter
);
const mongoose = require("mongoose");
//configure mongoose
mongoose.set("strictQuery", false);
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/CRUD",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Connected to MongoDB");
    }
  }
);

 
module.exports = app;