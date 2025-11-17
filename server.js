const express = require('express');
const path = require('path');
const app = express();
require('dotenv').config();

// Middleware
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// View engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Data
const projects = require('./data/projects.json');

// Routes
app.get('/', (req, res) => {
  res.render('index', { title: 'Home' });
});

app.get('/about', (req, res) => {
  res.render('about', { title: 'About Me' });
});

app.get('/projects', (req, res) => {
  res.render('projects', { title: 'Projects', projects });
});

app.get('/skills', (req, res) => {
  res.render('skills', { title: 'Skills' });
});

app.get('/contact', (req, res) => {
  res.render('contact', { title: 'Contact' });
});

// Contact form submission
app.post('/contact', (req, res) => {
  const { name, email, message } = req.body;
  
  // Basic validation
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  // TODO: Implement Nodemailer to send email
  console.log('Contact form submission:', { name, email, message });
  
  res.json({ success: true, message: 'Thank you for your message! I will get back to you soon.' });
});

// 404 handler
app.use((req, res) => {
  res.status(404).render('404', { title: '404 - Page Not Found' });
});

// Error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).render('500', { title: '500 - Server Error', error: err.message });
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Portfolio website running on http://localhost:${PORT}`);
});
