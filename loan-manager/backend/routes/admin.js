// routes/admin.js

const express = require('express');
const router = express.Router();
const User = require('../models/User');

// Get all admins
router.get('/', async (req, res) => {
  try {
    const admins = await User.find({ role: 'Admin' });
    res.json(admins);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Add a new admin
router.post('/', async (req, res) => {
  const { fullName } = req.body;
  if (!fullName) return res.status(400).json({ message: 'Name is required' });

  try {
    const existingUser = await User.findOne({ fullName });

    if (existingUser) {
      // Update role if user exists
      existingUser.role = 'Admin';
      await existingUser.save();
      return res.status(200).json(existingUser);
    }

    const newAdmin = new User({ fullName, role: 'Admin' });
    await newAdmin.save();
    res.status(201).json(newAdmin);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Delete an admin
router.delete('/:name', async (req, res) => {
  try {
    const name = req.params.name;
    const deleted = await User.findOneAndDelete({ fullName: name, role: 'Admin' });

    if (!deleted) return res.status(404).json({ message: 'Admin not found' });

    res.json({ message: 'Admin deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
