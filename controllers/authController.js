const jwt = require('jsonwebtoken');

module.exports.login = async (req, res) => {
  const { username, password } = req.body;

  // Simple validation (replace with actual logic)
  if (username === 'admin' && password === 'password') {
    const token = jwt.sign({ username }, process.env.JWT_SECRET, { expiresIn: '1h' });
    return res.json({ token });
  }
  return res.status(401).json({ message: 'Invalid credentials' });
};
