const express = require('express');
const Class = require('../models/Class');
const router = express.Router();

router.get('/', async (req, res) => {
  const classes = await Class.find().sort({ day: 1, schedule_time: 1 });
  res.json({ success: true, count: classes.length, classes });
});

router.get('/:id', async (req, res) => {
  const cls = await Class.findById(req.params.id);
  if (!cls) {
    return res.status(404).json({ success: false, message: 'Class not found.' });
  }
  res.json({ success: true, class: cls });
});

module.exports = router;
