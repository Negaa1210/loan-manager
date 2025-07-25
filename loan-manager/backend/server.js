// server.js or index.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const appRoutes = require('./routes/applications');
const adminRoutes = require('./routes/admin'); // ✅ Add this

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

app.use('/api', appRoutes);
app.use('/api/admins', adminRoutes); // ✅ Add this

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('MongoDB connected');
    app.listen(process.env.PORT, () => {
      console.log(`Server running on http://localhost:${process.env.PORT}`);
    });
  })
  .catch(err => console.error(err));
