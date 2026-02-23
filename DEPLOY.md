# Deploy to Vercel

## Quick Deployment Guide

### Option 1: Deploy via Vercel CLI (Recommended)

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy from project directory**
   ```bash
   cd c:\hariharan-portfolio
   vercel
   ```

4. **Follow the prompts:**
   - Set up and deploy? **Yes**
   - Link to existing project? **No** (first time)
   - Project name? **hariharan-portfolio** (or your preferred name)

### Option 2: Deploy via GitHub Integration

1. **Push your code to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio setup"
   git remote add origin https://github.com/YOUR_USERNAME/hariharan-portfolio.git
   git push -u origin main
   ```

2. **Import on Vercel:**
   - Go to [vercel.com/new](https://vercel.com/new)
   - Import your GitHub repository
   - Vercel will auto-detect Vite framework
   - Click **Deploy**

### Option 3: Deploy via Vercel Dashboard (Drag & Drop)

1. **Build locally**
   ```bash
   npm run build
   ```

2. **Go to [vercel.com](https://vercel.com)**

3. **Drag and drop** the `dist` folder onto the dashboard

## Configuration Details

The following files have been set up for Vercel:

- `vercel.json` - Vercel deployment configuration
- `vite.config.ts` - Build configuration optimized for production

## Environment Variables (if needed)

If you need environment variables, create a `.env.local` file:

```env
VITE_API_URL=your_api_url
```

And add them in Vercel Dashboard:
Settings → Environment Variables

## Custom Domain (Optional)

1. Go to your project on Vercel Dashboard
2. Click **Settings** → **Domains**
3. Add your custom domain
4. Follow DNS configuration instructions

## Troubleshooting

### Build Errors
```bash
# Clear cache and rebuild
rm -rf node_modules dist
npm install
npm run build
```

### 404 Errors on Refresh
- Already configured in `vercel.json` with SPA rewrite rules
- All routes redirect to `index.html`

### Images Not Loading
- Ensure images are in `public` folder
- Use absolute paths: `/Hari_image.jpg`

## Post-Deployment Checklist

- [ ] Test all navigation links
- [ ] Verify contact form works
- [ ] Check responsive design on mobile
- [ ] Test dark/light mode toggle
- [ ] Verify all projects display correctly
- [ ] Check social media links
- [ ] Test resume download (if applicable)

## Useful Commands

```bash
# Preview production build locally
npm run build
npm run preview

# Deploy with production flag
vercel --prod

# Update deployment
vercel --force
```

## Support

- [Vercel Documentation](https://vercel.com/docs)
- [Vite Deployment Guide](https://vitejs.dev/guide/static-deploy.html#vercel)
