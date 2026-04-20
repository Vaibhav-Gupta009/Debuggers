const express = require('express');
const { protect } = require('../middleware/auth');
const router = express.Router();

router.get('/', protect, async (req, res) => {
  return res.json({
    success: true,
    profile: {
      username: req.user.name,
      email: req.user.email,
      role: req.user.role,
      phone: req.user.phone || '',
      rollNo: req.user.rollNo || '',
      className: req.user.className || '',
      programme: req.user.programme || '',
      department: req.user.department || '',
      designation: req.user.designation || ''
    }
  });
});

router.put('/', protect, async (req, res) => {
  const updates = {};
  const fields = ['phone', 'rollNo', 'className', 'programme', 'department', 'designation'];
  fields.forEach(field => {
    if (req.body[field] !== undefined) updates[field] = req.body[field];
  });

  const updatedUser = await req.user.constructor.findByIdAndUpdate(req.user._id, updates, {
    new: true,
    runValidators: true
  }).select('-password');

  res.json({
    success: true,
    profile: {
      username: updatedUser.name,
      email: updatedUser.email,
      role: updatedUser.role,
      phone: updatedUser.phone || '',
      rollNo: updatedUser.rollNo || '',
      className: updatedUser.className || '',
      programme: updatedUser.programme || '',
      department: updatedUser.department || '',
      designation: updatedUser.designation || ''
    }
  });
});

module.exports = router;
