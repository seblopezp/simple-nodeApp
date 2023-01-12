const mongoose = require("mongoose");
const Schema = mongoose.Schema;
 
const SensorSchema = new Schema({
  title: String,
  temperature: Number,
  humidity: Number,
  soilHumidity: Number,
  light:Number,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});
 
module.exports = mongoose.model("Sensor", SensorSchema);