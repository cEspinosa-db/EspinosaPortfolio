# Deployment Guide

## Quick Start Deployment Steps

### 1. Verify Project Structure
```powershell
Get-ChildItem "c:\Users\riesp\OneDrive\Desktop\AI Literacy\portfolio-website" -Recurse
```

### 2. Test Locally First
```powershell
cd "c:\Users\riesp\OneDrive\Desktop\AI Literacy\portfolio-website"
npm install
npm run dev
```

Visit `http://localhost:3000` to verify everything works.

---

## Deployment Platforms

### Vercel (Recommended - Free Tier Available)

**Step 1:** Create Vercel Account
- Go to https://vercel.com
- Sign up with GitHub account

**Step 2:** Push to GitHub
```powershell
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/your-username/portfolio-website.git
git push -u origin main
```

**Step 3:** Deploy on Vercel
1. Click "Add New..." → "Project"
2. Import your GitHub repository
3. Vercel auto-detects Node.js
4. Click "Deploy"

**Step 4:** Configure Domain (Optional)
- Go to Project Settings → Domains
- Add custom domain or use Vercel's default URL

---

### Render.com

**Step 1:** Prepare for Deployment
- Ensure `.env` is not in git (check `.gitignore`)
- Push code to GitHub

**Step 2:** Create Render Service
1. Go to https://render.com
2. Click "New +" → "Web Service"
3. Connect GitHub repository
4. Select branch to deploy

**Step 3:** Configure Service
- **Name:** portfolio-website
- **Runtime:** Node
- **Build Command:** `npm install`
- **Start Command:** `npm start`
- **Region:** Choose closest to you

**Step 4:** Add Environment Variables
- Go to Service Settings → Environment
- Add variables from `.env.example`:
  - `PORT=3000`
  - `NODE_ENV=production`
  - Email variables if needed

**Step 5:** Deploy
- Click "Create Web Service"
- Render will build and deploy automatically

---

### Railway.app

**Step 1:** Setup
1. Go to https://railway.app
2. Create account with GitHub
3. Create new project

**Step 2:** Connect Repository
- Select "Deploy from GitHub"
- Authorize Railway to access GitHub
- Select your repository

**Step 3:** Configure
- Railway auto-detects Node.js
- Port defaults to 3000
- Add environment variables in project settings

**Step 4:** Deploy
- Click "Deploy"
- Railway builds and starts the service

---

## Post-Deployment Checklist

- [ ] Test all pages load correctly
- [ ] Verify navigation works
- [ ] Test contact form
- [ ] Check project filtering
- [ ] Verify responsive design on mobile
- [ ] Check performance with PageSpeed Insights
- [ ] Enable HTTPS (most platforms do this automatically)
- [ ] Monitor application logs for errors
- [ ] Update social media links
- [ ] Add custom domain (if desired)

---

## Troubleshooting Deployments

### Build Fails
1. Check build logs on deployment platform
2. Verify all dependencies in `package.json`
3. Ensure `.env` variables are configured
4. Try building locally first

### Port Issues
- Most platforms auto-assign ports
- Set `process.env.PORT` in `server.js` (already done)
- Don't hardcode port number

### Static Files Not Loading
- Verify `public/` folder is included
- Check that Express serves static files correctly
- Ensure CSS/JS paths are relative

### Contact Form Not Working
1. Check console for errors (F12 in browser)
2. Verify server is running
3. Review form submission in network tab
4. Enable email feature if desired

---

## Environment Variables for Production

Create these on your deployment platform:

```
PORT=3000
NODE_ENV=production
EMAIL_SERVICE=gmail
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-app-password
EMAIL_TO=your-email@gmail.com
```

---

## Domain Configuration

### Using Custom Domain

**Option 1: Vercel**
1. Go to Project Settings → Domains
2. Enter your domain
3. Follow DNS configuration
4. Update domain registrar nameservers

**Option 2: Render**
1. Go to Service Settings → Custom Domains
2. Add domain
3. Update DNS records with Render's provided values

---

## Monitoring & Maintenance

### Check Application Health
- Monitor uptime
- Review error logs
- Check performance metrics
- Monitor resource usage

### Update Dependencies
```powershell
npm outdated
npm update
```

### Regular Backups
- Backup projects.json regularly
- Keep `.env` configuration safe
- Version control your code on GitHub

---

## Security for Production

1. **Enable HTTPS** (automatic on most platforms)
2. **Set secure environment variables** (don't commit .env)
3. **Update Node.js** regularly
4. **Monitor for vulnerabilities:**
   ```powershell
   npm audit
   npm audit fix
   ```
5. **Implement rate limiting** if needed
6. **Add CORS headers** if integrating with external APIs

---

## Cost Estimates

- **Vercel:** Free tier sufficient, pay as you grow
- **Render:** Free tier with limitations, ~$7/month for hobby tier
- **Railway:** Free tier, then usage-based pricing
- **Custom Domain:** ~$10-15/year

---

## Support & Resources

- Vercel Docs: https://vercel.com/docs
- Render Docs: https://render.com/docs
- Railway Docs: https://railway.app/reference
- Express.js: https://expressjs.com
- Node.js: https://nodejs.org/docs/

---

**Recommended Deployment:** Vercel (fastest setup, best free tier)
