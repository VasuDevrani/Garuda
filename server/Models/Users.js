const mongoose = require("mongoose");
const { Schema } = mongoose;

const UserSchema = new Schema({
  name: { type: String, require: true },
  password: { type: String, require: true },
  college: { type: String, require: true },
  date: { required: true, type: Date, default: Date.now },
  poster_path: {
    type: String,
    default:
      "https://www.pngitem.com/pimgs/m/150-1503945_transparent-user-png-default-user-image-png-png.png",
  },
  email: { type: String, require: true },
  location: { type: String, trim: true },
  bio: { type: String, trim: true },
  isStudent: { type: Boolean, required: true, default: true },
  isOrganizer: { type: Boolean, required: false, default: false},
  isSponsor: { type: Boolean, required: false, default: false },
});

const User = mongoose.model("User", UserSchema)
module.exports = User;
