const sensorService = require("../services/SensorService");

exports.getAllData = async (req, res) => {
  try {
    const sensor = await sensorService.getAllData();
    res.json({ data: sensor, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.createData = async (req, res) => {
  try {
    const sensor = await sensorService.createData(req.body);
    res.json({ data: sensor, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getSensorById = async (req, res) => {
  try {
    const sensor = await sensorService.getSensorById(req.params.id);
    res.json({ data: sensor, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateData = async (req, res) => {
  try {
    const sensor = await sensorService.updateData(req.params.id, req.body);
    res.json({ data: sensor, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteData = async (req, res) => {
  try {
    const sensor = await sensorService.deleteData(req.params.id);
    res.json({ data: sensor, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
