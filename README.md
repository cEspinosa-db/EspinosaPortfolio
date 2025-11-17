# Carlos Espinosa Portfolio Website

A modern, professional portfolio website for a Database Programming & Administration student at Bergen Community College. This project showcases SQL expertise, backend development skills, and data management projects.

## 📋 Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Usage](#usage)
- [Deployment](#deployment)
- [Configuration](#configuration)
- [Contributing](#contributing)
- [License](#license)

---

## ✨ Features

### Fully Responsive Design
- Mobile-first approach with Tailwind CSS
- Optimized for all screen sizes (mobile, tablet, desktop)
- Smooth navigation and intuitive user experience

### Multiple Sections
- **Home** - Hero section with quick overview
- **About** - Personal background, education, and philosophy
- **Projects** - Portfolio of database and backend projects with filtering
- **Skills** - Comprehensive technical and professional skills overview
- **Contact** - Contact form with validation and professional contact information

### Interactive Elements
- Project filtering by category
- Smooth scrolling navigation
- Responsive contact form with feedback messages
- Clean, modern UI with professional styling

### SEO & Performance
- Meta tags for better search engine visibility
- Fast loading times with optimized assets
- Semantic HTML structure
- Google Analytics ready (configuration included)

---

## 🛠 Tech Stack

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web application framework
- **EJS** - Template engine for server-side rendering

### Frontend
- **HTML5** - Semantic markup
- **CSS3** - Styling with Tailwind CSS
- **JavaScript (ES6+)** - Interactive features
- **Tailwind CSS** - Utility-first CSS framework

### Development
- **npm** - Package manager
- **Git** - Version control
- **Nodemon** - Development server auto-restart

### Optional Integrations
- **Nodemailer** - Email functionality (pre-configured)
- **dotenv** - Environment variable management

---

## 📁 Project Structure

```
portfolio-website/
├── public/                 # Static files
│   ├── css/
│   │   └── style.css      # Custom styles
│   └── js/
│       └── main.js        # Client-side JavaScript
├── views/                 # EJS templates
│   ├── index.ejs          # Home page
│   ├── about.ejs          # About page
│   ├── projects.ejs       # Projects page
│   ├── skills.ejs         # Skills page
│   ├── contact.ejs        # Contact page
│   ├── layout.ejs         # Layout template
│   ├── 404.ejs            # 404 error page
│   └── 500.ejs            # 500 error page
├── data/
│   └── projects.json      # Projects database
├── server.js              # Express server setup
├── package.json           # Project dependencies
├── .env.example           # Environment variables template
├── .gitignore             # Git ignore file
└── README.md              # This file
```

---

## 🚀 Installation

### Prerequisites
- Node.js 14.0 or higher
- npm 6.0 or higher
- Git

### Steps

1. **Clone or navigate to the project directory**
   ```powershell
   cd "c:\Users\riesp\OneDrive\Desktop\AI Literacy\portfolio-website"
   ```

2. **Install dependencies**
   ```powershell
   npm install
   ```

3. **Create environment file**
   ```powershell
   Copy-Item .env.example .env
   ```

4. **Configure environment variables** (optional for basic usage)
   - Edit `.env` with your preferred settings
   - Configure email settings if using contact form email feature

5. **Start the development server**
   ```powershell
   npm run dev
   ```

6. **Access the website**
   - Open your browser and navigate to `http://localhost:3000`

---

## 💻 Usage

### Development Mode
Run the application with auto-restart on file changes:
```powershell
npm run dev
```

### Production Mode
Start the application normally:
```powershell
npm start
```

### Adding New Projects
Edit `data/projects.json` to add new projects:
```json
{
  "id": 5,
  "title": "Project Name",
  "description": "Brief description",
  "tools": ["SQL", "PostgreSQL", "Node.js"],
  "image": "/images/project.png",
  "link": "https://github.com/yourlink",
  "category": "Database Design"
}
```

### Customizing Content
- Update text in EJS files in the `views/` directory
- Modify styling in `public/css/style.css`
- Update profile links in footer and contact sections

---

## 🌐 Deployment

### Option 1: Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Set environment variables in Vercel dashboard
4. Deploy with one click

**Benefits:**
- Free tier available
- Fast, automatic deployments
- Great performance
- Easy rollback

### Option 2: Render
1. Push your code to GitHub
2. Connect repository to Render
3. Create a new Web Service
4. Configure environment variables
5. Deploy

**Benefits:**
- Easy GitHub integration
- Affordable pricing
- Good uptime

### Option 3: Railway
1. Push your code to GitHub
2. Connect to Railway.app
3. Create new project
4. Link your repository
5. Deploy

**Benefits:**
- Simple deployment
- Good documentation
- Reasonable pricing

### Option 4: Heroku (Legacy)
1. Install Heroku CLI
2. Run `heroku create`
3. Deploy: `git push heroku main`

---

## ⚙️ Configuration

### Environment Variables
Create a `.env` file based on `.env.example`:

```env
# Server
PORT=3000
NODE_ENV=development

# Email Configuration (Optional - for contact form)
EMAIL_SERVICE=gmail
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-app-password
EMAIL_TO=recipient@example.com

# Analytics (Optional)
GOOGLE_ANALYTICS_ID=your-ga-id
```

### Contact Form Setup
To enable email notifications:
1. Set up a Gmail account or use another email service
2. Generate an app-specific password (if using Gmail)
3. Update `.env` with credentials
4. Modify `server.js` contact route to use Nodemailer

Example Nodemailer setup:
```javascript
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: process.env.EMAIL_SERVICE,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD
  }
});

// In contact route:
await transporter.sendMail({
  from: email,
  to: process.env.EMAIL_TO,
  subject: subject,
  text: message
});
```

---

## 📚 Dependencies

### Production
- **express** (^4.18.2) - Web framework
- **ejs** (^3.1.9) - Template engine
- **nodemailer** (^6.9.7) - Email sender
- **dotenv** (^16.3.1) - Environment variables

### Development
- **nodemon** (^3.0.2) - Development server

---

## 🔒 Security Best Practices

1. **Never commit `.env` file** - Keep sensitive data in environment variables
2. **Use HTTPS** - Enable SSL/TLS on production deployment
3. **Validate input** - Always validate and sanitize user input
4. **Rate limiting** - Consider adding rate limiting to contact form
5. **CORS** - Configure CORS appropriately if adding API endpoints
6. **Security headers** - Consider adding helmet.js for security headers

---

## 🐛 Troubleshooting

### Port Already in Use
```powershell
# Find process using port 3000
netstat -ano | findstr :3000

# Kill process (replace PID)
taskkill /PID <PID> /F
```

### Module Not Found
```powershell
# Clear node_modules and reinstall
Remove-Item node_modules -Force -Recurse
npm install
```

### Contact Form Not Working
- Check browser console for errors
- Verify server is running
- Check that all form fields are filled
- Review server logs for backend errors

---

## 📈 Future Enhancements

- [ ] Add blog section with SQL tutorials
- [ ] Implement admin panel for content management
- [ ] Add authentication for portfolio updates
- [ ] Integrate with database to store projects dynamically
- [ ] Add dark mode toggle
- [ ] Implement service worker for offline support
- [ ] Add project filtering and search functionality
- [ ] Integration with GitHub API for real-time project updates

---

## 📞 Contact & Social

- **Email:** carlos@example.com
- **LinkedIn:** [Carlos Espinosa](https://www.linkedin.com/in/carlos-espinosa-871339286/)
- **GitHub:** [carlosespinosa](https://github.com/carlosespinosa)
- **Location:** New Jersey, USA

---

## 📄 License

This project is open source and available under the MIT License.

```
MIT License

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.
```

---

## 🤝 Contributing

Contributions are welcome! Feel free to submit issues or pull requests.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📝 Notes

- The portfolio is designed to be easily customizable
- Update profile information throughout the site as needed
- Keep projects.json updated with your latest work
- Test on multiple devices before deployment
- Monitor analytics to track visitor engagement

---

**Created for:** Bergen Community College - Database Programming & Administration  
**Author:** Carlos Espinosa  
**Last Updated:** 2025
