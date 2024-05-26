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
  // In a real application, you would add the user to the database here
  res.status(200).json({ message: 'Registered successfully' });
});

app.put('/update', (req, res) => {
  const { email, password, newEmail } = req.body;

  if (typeof email !== 'string' || typeof password !== 'string' || typeof newEmail !== 'string') {
    return res.status(400).json({ error: 'Invalid Email, Password, or New Email' });
  }

  if (!email.trim() || !password.trim() || !newEmail.trim()) {
    return res.status(400).json({ error: 'Email, password, and new email are required' });
  }

  const userExists = mockUserExists(email, password);

  if (!userExists) {
    return res.status(404).json({ error: 'User not found' });
  }

  // Placeholder for actual update logic
  // In a real application, you would update the user's email and password in the database
  res.status(200).json({ message: 'Updated successfully', updatedEmail: newEmail });
});

// Mock function to check if user exists
function mockUserExists(email, password) {
  const mockDatabase = [
    { email: 'test@example.com', password: 'securepassword' },
    { email: 'user@example.com', password: 'anotherpassword' }
  ];

  return mockDatabase.some(user => user.email === email && user.password === password);
}

const server = app.listen(PORT, () => {
  console.log(`Server is running on port ${server.address().port}`);
});
