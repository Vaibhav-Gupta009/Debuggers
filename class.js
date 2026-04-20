const mongoose = require('mongoose');

const ClassSchema = new mongoose.Schema({
  course_name: { type: String, required: true },
  programme: { type: String, required: true },
  section: { type: String },
  day: { type: String, required: true },
  schedule_time: { type: String, required: true },
  faculty_name: { type: String },
  faculty_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
});

module.exports = mongoose.model('Class', ClassSchema);
