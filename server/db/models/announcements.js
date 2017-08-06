
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AnnouncementSchema = new Schema({
  title: {
    type: String
  },
  content: {
    type: String
  },
  datetime: {
    type: Date,
    default: Date.now,
  },
  active: {
      type: Number,
      default: 1
  }
});

const Announcement = mongoose.model('Announcement', AnnouncementSchema);
module.exports = Announcement;