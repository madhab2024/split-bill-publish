const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Support messages storage (saved to a local JSON file)
const MESSAGES_FILE = path.join(__dirname, 'support-messages.json');
if (!fs.existsSync(MESSAGES_FILE)) {
  fs.writeFileSync(MESSAGES_FILE, JSON.stringify([], null, 2));
}

// API: Submit support message
app.post('/api/support', (req, res) => {
  try {
    const { name, email, topic, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ success: false, error: 'All fields are required.' });
    }

    const messages = JSON.parse(fs.readFileSync(MESSAGES_FILE, 'utf-8'));
    messages.push({
      id: Date.now(),
      name,
      email,
      topic: topic || 'General',
      message,
      date: new Date().toISOString(),
    });
    fs.writeFileSync(MESSAGES_FILE, JSON.stringify(messages, null, 2));

    console.log(`✅ New support message from: ${name} <${email}> [${topic}]`);
    res.json({ success: true, message: "Your message has been received! We'll get back to you soon." });
  } catch (err) {
    console.error('Support form error:', err);
    res.status(500).json({ success: false, error: 'Something went wrong. Please try again.' });
  }
});

// In production: serve the built React app
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'client', 'dist')));
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client', 'dist', 'index.html'));
  });
}

app.listen(PORT, () => {
  console.log(`🚀 Split Bill website running at http://localhost:${PORT}`);
});
