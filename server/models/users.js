const mongoose = require("mongoose");
const schema = mongoose.Schema;

const userSchema = new schema({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  password: {
    type: String,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
  answer: [
    {
      que_id: {
        type: String,
      },
      answer: {
        type: String,
      },
    },
  ],
});

module.exports = mongoose.model("user", userSchema);
