# Deployment Guide - Tea Break Cafe Website

## Pre-Deployment Checklist

- [x] All pages created and functional
- [x] SEO metadata added to all pages
- [x] Schema markup implemented
- [x] Sitemap generated
- [x] Robots.txt configured
- [x] Mobile responsive design verified
- [x] Image placeholders in place
- [ ] Replace image placeholders with actual images
- [ ] Add logo files to `/public/` or `/logos/`
- [ ] Add video files to `/videos/` directory
- [ ] Update favicon.ico with actual logo

## GitHub Deployment Steps

### 1. Initialize Git Repository (if not already done)

```bash
git init
git add .
git commit -m "Initial commit: Tea Break Cafe website"
```

### 2. Connect to GitHub Repository

```bash
# Add your GitHub repository as remote
git remote add origin <your-github-repo-url>
git branch -M main
git push -u origin main
```

### 3. Deploy to Vercel (Recommended)

Vercel is the recommended hosting platform for Next.js applications:

1. Go to [vercel.com](https://vercel.com)
2. Sign up/Login with GitHub
3. Click "New Project"
4. Import your GitHub repository
5. Vercel will auto-detect Next.js settings
6. Click "Deploy"

**Vercel will automatically:**
- Build your Next.js app
- Set up HTTPS
- Configure custom domains
- Enable automatic deployments on git push

### 4. Alternative: Deploy to Other Platforms

#### Netlify
1. Connect GitHub repository
2. Build command: `npm run build`
3. Publish directory: `.next`
4. Deploy!

#### Self-Hosted
```bash
npm run build
npm start
```

## Post-Deployment Tasks

### 1. Update Domain Settings

- Add custom domain in Vercel/Netlify settings
- Update DNS records as instructed
- Update `baseUrl` in `app/sitemap.ts` with actual domain

### 2. Update Environment Variables (if needed)

If you need Google Maps API or other services:
- Add in Vercel dashboard: Settings → Environment Variables
- Or create `.env.local` file (not committed to git)

### 3. Verify SEO

- Submit sitemap to Google Search Console
- Test with Google Rich Results Test
- Verify meta tags with social media debuggers

### 4. Performance Optimization

- Run Lighthouse audit
- Optimize images (use Next.js Image component)
- Enable compression
- Set up CDN (automatic with Vercel)

## Image Replacement Guide

### Product Images
Replace placeholders in `/public/images/placeholders/`:
- `cheetos-burger.jpg`
- `saffron-tea.jpg`
- `dynamite-shrimp.jpg`
- `sweet-potato-smoothie.jpg`

### Logo
- Add logo to `/public/logo.png` or `/public/logo.svg`
- Update favicon: `/public/favicon.ico`

### Videos
- Add hero video to `/videos/landscape/`
- Update video references in homepage if needed

## Monitoring & Analytics

Consider adding:
- Google Analytics
- Vercel Analytics (built-in)
- Error tracking (Sentry, etc.)

## Support

For issues or questions:
- Check Next.js documentation
- Review Vercel deployment logs
- Contact: info@teabreakcafe.com

---

**Ready to deploy!** 🚀
