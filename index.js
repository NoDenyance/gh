const express = require('express');
const path = require('path');
const app = express();

// Serve everything inside /public
app.use(express.static(path.join(__dirname, 'public')));

// Default route
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

module.exports = app; // Required for Vercel
