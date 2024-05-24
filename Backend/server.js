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

  // Placeholder for actual registration logic
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

  // Mock user existence check (replace with actual database check)
  const userExists = mockUserExists(email);

  if (!userExists) {
    return res.status(404).json({ error: 'User not found' });
  }

  // Placeholder for actual update logic
  res.status(200).json({ message: 'Updated successfully' });
});

// Mock function to check if user exists
function mockUserExists(email) {
  // Simulate checking a database for the user's existence
  const mockDatabase = ['test@example.com', 'user@example.com'];
  return mockDatabase.includes(email);
}

const server = app.listen(PORT, () => {
  console.log(`Server is running on port ${server.address().port}`);
});
