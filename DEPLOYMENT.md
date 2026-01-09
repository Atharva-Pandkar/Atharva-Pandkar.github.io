# GitHub Pages Deployment Guide

This guide explains how to deploy your Vite + React portfolio to GitHub Pages.

## Quick Setup

### Option 1: Automatic Deployment (Recommended)

1. **Enable GitHub Pages:**
   - Go to your repository settings
   - Navigate to "Pages" in the left sidebar
   - Under "Source", select "GitHub Actions"

2. **Push to main branch:**
   - The GitHub Actions workflow (`.github/workflows/deploy.yml`) will automatically build and deploy your site
   - Every push to `main` will trigger a new deployment

3. **Your site will be live at:**
   - `https://atharva-pandkar.github.io`

### Option 2: Manual Deployment

1. **Build the project:**
   ```bash
   npm run build
   ```

2. **Copy 404.html to dist:**
   ```bash
   cp public/404.html dist/404.html
   ```

3. **Enable GitHub Pages:**
   - Go to repository settings → Pages
   - Select "Deploy from a branch"
   - Choose branch: `main` or `gh-pages`
   - Choose folder: `/dist` or `/ (root)`

4. **If deploying from `/dist` folder:**
   - You'll need to push the `dist` folder contents to a `gh-pages` branch
   - Or use a tool like `gh-pages` npm package

## Important Notes

### Client-Side Routing
- The `404.html` file is essential for React Router to work on GitHub Pages
- It redirects all routes to `index.html` so your app can handle routing
- This file is automatically copied during build via the Vite plugin

### Asset Paths
- All asset paths use relative paths (`./`) to work correctly on GitHub Pages
- The `base: './'` in `vite.config.ts` ensures this

### Troubleshooting

**Issue: Routes show 404**
- Make sure `404.html` is in your `dist` folder
- Check that GitHub Pages is serving from the correct branch/folder

**Issue: Assets not loading**
- Verify `base: './'` in `vite.config.ts`
- Check that asset paths use relative paths

**Issue: Build fails**
- Run `npm install` to ensure all dependencies are installed
- Check for TypeScript errors: `npm run build`

## Testing Locally

Before deploying, test the production build locally:

```bash
npm run build
npm run preview
```

This will serve your built site at `http://localhost:4173` so you can verify everything works.

