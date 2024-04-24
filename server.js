// server.js
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

let sharedData = ''; // Initialize shared data

// Endpoint to receive data from the client
app.post('/save', (req, res) => {
  sharedData = req.body.data;
  res.status(200).send('Data saved successfully!');
});

// Endpoint to retrieve shared data
app.get('/get', (req, res) => {
  res.status(200).json({ data: sharedData });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
