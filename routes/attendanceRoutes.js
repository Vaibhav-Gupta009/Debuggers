const express = require('express');
const { protect } = require('../middleware/auth');
const Attendance = require('../models/Attendance');
const User = require('../models/User');
const router = express.Router();

router.get('/', protect, async (req, res) => {
  const filter = req.user.role === 'student' ? { student: req.user._id } : {};
  const records = await Attendance.find(filter)
    .populate('student', 'name email rollNo')
    .populate('markedBy', 'name email');
  res.json({ success: true, count: records.length, records });
});

router.post('/mark', protect, async (req, res) => {
  const { studentId, subject, date, status } = req.body;
  if (!studentId || !subject || !date || !status) {
    return res.status(400).json({ success: false, message: 'Missing attendance parameters.' });
  }

  const attendance = await Attendance.create({
    student: studentId,
    subject,
    date: new Date(date),
    status,
    markedBy: req.user._id
  });

  res.status(201).json({ success: true, attendance });
});

module.exports = router;
