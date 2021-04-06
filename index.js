const express = require('express');

const app = express();

app.use(express.json());

app.get('/api', (req, res) => {
  res.json({message: 'Hello world'});
});

app.post('/api/login', (req, res) => {
  console.log(req.body);
  res.json({message: 'Hello ' + req.body.user});
});

app.listen(3001, () => {
  console.log('server started on port 3001');
});
