"use strict";

const express = require('express');
const app = express();
const PORT = 3000;

// POST route
app.post('/', (req, res) => {
  console.log(req.body); // Log the request body
  // Send a response back to the client
  res.send('Data received successfully'); // Sending a simple string response
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

