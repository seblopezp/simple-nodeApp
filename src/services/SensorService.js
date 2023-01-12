const SensorModel = require("../models/Sensor");
 
exports.getAllData = async () => {
  return await SensorModel.find();
};
 
exports.createData = async (blog) => {
  return await SensorModel.create(blog);
};

exports.getSensorById = async(id) => {
    return await SensorModel.findById(id);
}

exports.updateData = async (id, blog) => {
  return await SensorModel.findByIdAndUpdate(id, blog);
};
 
exports.deleteData = async (id) => {
  return await SensorModel.findByIdAndDelete(id);
};

