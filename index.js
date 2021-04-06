const express = require('express');
const fetch = require('node-fetch');
const API_URL = 'https://www.philart.net/api';

const app = express();
app.use(express.json());

app.get('/api/artists', async (req, res) => {
  try {
    const response = await fetch(`${API_URL}/artists.json`);
    const json = await response.json();
    res.json(json.body);
  } catch (err) {
    res.status(500).send(err);
  }
});

app.get('/api/artist/:id', async (req, res) => {
  try {
    const response = await fetch(`${API_URL}/artists/${req.params.id}.json`);
    const json = await response.json();
    res.json({
      name: json.head.title,
      art: json.body.art
    });
  } catch (err) {
    res.status(500).send(err);
  }
});

app.listen(3001, () => {
  console.log('server started on port 3001');
});
