const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

app.get('/ping', (req, res) => {
  res.send('pong');
});

app.post('/register', (req, res) => {
  const { email, password } = req.body;

  if (typeof email !== 'string' || typeof password !== 'string') {
    return res.status(400).json({ error: 'Email and password must be strings' });
  }

  if (!email.trim() || !password.trim()) {
    return res.status(400).json({ error: 'Email and password are required' });
  }

  res.status(200).json({ message: 'Registered successfully',  });
});

const server = app.listen(PORT, () => {
  console.log(`Server is running on port ${server.address().port}`);
});
