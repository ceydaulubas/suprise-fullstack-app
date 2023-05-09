const { Schema, model } = require('mongoose');

const surpriseSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      match: /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/
    },
    name: {
      type: String,
      required: true,
    },
    relative: {
      type: String,
      required: true,
    },
    theme: {
      type: String,
      required: true,
    }
  },
  {
    timestamps: true,
  }
);

module.exports.Surprise = model('Suprise', surpriseSchema);
