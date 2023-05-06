const { Schema, model } = require('mongoose');

const userSchema = new Schema(
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
    surname: {
      type: String,
      required: false,
    },
    created: {
      type: String,
      default: new Date().toISOString(),
    },
    password: {
      type: String,
      required: true,
    }
  },
  {
    timestamps: true,
  }
);

module.exports.User = model('User', userSchema);
