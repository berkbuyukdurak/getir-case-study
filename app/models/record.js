const Mongoose = require("mongoose");

const recordSchema = new Mongoose.Schema(
    {
      key: String,
      value: String,
      counts: [Number],
    },
    { timestamps: true, versionKey: false }
  );
  
  module.exports = Mongoose.model("Record", recordSchema);