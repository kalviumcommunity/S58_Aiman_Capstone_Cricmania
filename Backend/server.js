const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

app.get('/ping', (req, res) => {
  res.send('pong');
});

app.post('/post', (req, res) => {
  const { email, password } = req.body;

  if (typeof email !== 'string' || typeof password !== 'string') {
    return res.status(400).json({ error: 'Invalid Email or Password' });
  }

  if (!email.trim() || !password.trim()) {
    return res.status(400).json({ error: 'Email and password are required' });
  }

  res.status(200).json({ message: 'Registered successfully' });
});

app.put('/update', (req, res) => {
  const { email, password } = req.body;

  if (typeof email !== 'string' || typeof password !== 'string') {
    return res.status(400).json({ error: 'Invalid Email or Password' });
  }

  if (!email.trim() || !password.trim()) {
    return res.status(400).json({ error: 'Email and password are required' });
  }

 
  res.status(200).json({ message: 'Updated successfully' });
});

const server = app.listen(PORT, () => {
  console.log(`Server is running on port ${server.address().port}`);
});
