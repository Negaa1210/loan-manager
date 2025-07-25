const express = require('express');
const router = express.Router();
const Application = require('../models/Application');

router.post('/apply', async (req, res) => {
  try {
    const { fullName } = req.body;

    let role = 'User';
    if (fullName.toLowerCase().includes('admin')) role = 'Admin';
    else if (fullName.toLowerCase().includes('verifier')) role = 'Verifier';

    const newApp = new Application({ ...req.body, role });
    await newApp.save();
    res.status(201).json({ message: 'Application saved successfully', role });
  } catch (err) {
    res.status(500).json({ error: 'Something went wrong' });
  }
});

module.exports = router;
