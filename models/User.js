const { Schema, model } = require('mongoose');

const userSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      match: /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/
    },
    username: {
      type: String,
      required: true,
    },
    created: {
      type: String,
      default: new Date().toISOString(),
    },
    password: {
      type: String,
      required: true,
    },
    surprises: [{
      type: Schema.Types.ObjectId,
      ref: 'Surprise'
    }],
    token: {
      type: String
    }
  },
  {
    timestamps: true,
  }
);

module.exports.User = model('User', userSchema);
