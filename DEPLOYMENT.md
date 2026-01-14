# Deployment Guide for Coolify

This guide covers deploying the Colors of Joy Template Gallery to Coolify.

## 📦 Pre-deployment Checklist

- [x] All templates moved to `/templates` directory
- [x] Image pool paths updated to `../image-pool.js`
- [x] Back navigation added to all templates
- [x] `index.html` master gallery created
- [x] `templates-config.js` configuration file ready
- [x] All navigation tested locally

## 🚀 Coolify Deployment Steps

### 1. Repository Setup

Ensure your git repository is ready:

```bash
git status
git add .
git commit -m "feat: add template gallery navigation system"
git push origin main
```

### 2. Coolify Configuration

In your Coolify dashboard:

1. **Create New Resource** → Select "Static Site" or "HTML"
2. **Connect Repository**: Link your git repository
3. **Configure Build Settings**:
   - Build Command: *(leave empty - no build needed)*
   - Install Command: *(leave empty)*
   - Start Command: *(leave empty)*
   - Publish Directory: `.` (root directory)

### 3. Environment Settings

- **Port**: Default (usually 80 or 3000)
- **Entry Point**: `index.html`
- **Branch**: `main` (or your default branch)

### 4. Custom Domain (Optional)

Add your custom domain in Coolify:
- Example: `templates.colorsofjoy.dk`
- Coolify will automatically handle SSL certificates

### 5. Deploy

Click "Deploy" and Coolify will:
1. Clone your repository
2. Serve static files from the root
3. Make `index.html` available at your domain

## 🔧 Configuration for Different Hosting

### For Nginx

```nginx
server {
    listen 80;
    server_name templates.colorsofjoy.dk;

    root /var/www/colors-of-joy-redesign;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }

    # Cache static assets
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
}
```

### For Apache

Create `.htaccess` in root:

```apache
<IfModule mod_rewrite.c>
    RewriteEngine On
    RewriteBase /
    RewriteRule ^index\.html$ - [L]
    RewriteCond %{REQUEST_FILENAME} !-f
    RewriteCond %{REQUEST_FILENAME} !-d
    RewriteRule . /index.html [L]
</IfModule>

# Cache static assets
<IfModule mod_expires.c>
    ExpiresActive On
    ExpiresByType image/jpeg "access plus 1 year"
    ExpiresByType image/png "access plus 1 year"
    ExpiresByType text/css "access plus 1 month"
    ExpiresByType application/javascript "access plus 1 month"
</IfModule>
```

### For Vercel

Create `vercel.json`:

```json
{
  "routes": [
    { "src": "/(.*)", "dest": "/$1" }
  ]
}
```

Then deploy:
```bash
npx vercel --prod
```

### For Netlify

Create `netlify.toml`:

```toml
[build]
  publish = "."

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

Then deploy:
```bash
netlify deploy --prod --dir=.
```

## 🧪 Testing After Deployment

After deployment, verify:

1. **Gallery loads**: Visit your domain
2. **Search works**: Try searching for "editorial" or "organic"
3. **Filters work**: Click style filter buttons
4. **Template links**: Click "View Templates" on any card
5. **Template navigation**: Verify dropdown switcher works
6. **Back navigation**: Click "Back to Gallery" button
7. **Images load**: Verify all product images from image pool display
8. **Responsive**: Test on mobile, tablet, desktop

### Quick Test Checklist

```
✓ Gallery homepage loads
✓ Shows 7 template collections
✓ Search bar filters results
✓ Style filters work
✓ Template cards display correctly
✓ "View Templates" links work
✓ Templates display with dropdown navigation
✓ "Back to Gallery" returns to index
✓ All images load from image pool
✓ Responsive on mobile
✓ No console errors
```

## 🐛 Troubleshooting

### Images not loading

**Problem**: Product images from colorsofjoy.dk not showing

**Solution**: Check CORS policy. Images are loaded from `https://colorsofjoy.dk/webshopmedia/`. If blocked:
1. Download images to `/assets` folder
2. Update `image-pool.js` with local paths
3. Redeploy

### Templates not found (404)

**Problem**: Clicking "View Templates" gives 404

**Solution**:
1. Verify `/templates` directory exists
2. Check file paths in `templates-config.js`
3. Ensure file names match exactly (case-sensitive)

### Back navigation broken

**Problem**: "Back to Gallery" button doesn't work

**Solution**:
1. Check `href="../index.html"` in template files
2. Verify index.html is in root directory
3. Test relative path from templates directory

### Styles not applying

**Problem**: Gallery looks unstyled

**Solution**:
1. Verify inline styles in `index.html`
2. Check browser console for errors
3. Clear browser cache

### Search not working

**Problem**: Search bar doesn't filter results

**Solution**:
1. Check browser console for JavaScript errors
2. Verify `templates-config.js` is loaded
3. Check that all helper functions are defined

## 📊 Performance Optimization

### Optional Enhancements

1. **Image Optimization**:
   - Compress images from image pool
   - Use WebP format with fallbacks
   - Add lazy loading: `<img loading="lazy">`

2. **Minification** (optional):
   ```bash
   # Minify HTML
   npx html-minifier-terser --collapse-whitespace --remove-comments index.html -o index.min.html

   # Minify JS
   npx terser templates-config.js -o templates-config.min.js
   ```

3. **CDN**: Upload images to CDN for faster loading

## 🔄 Updating Templates

To add new templates after deployment:

1. Create new template file in `/templates`
2. Add entry to `templates-config.js`
3. Commit and push:
   ```bash
   git add templates/your-new-template.html
   git add templates-config.js
   git commit -m "feat: add new template collection"
   git push origin main
   ```
4. Coolify will auto-deploy (if configured)

## 📝 Deployment Commands

```bash
# Verify structure before deploying
tree -L 2 -I '.git'

# Check all files are committed
git status

# Deploy
git add .
git commit -m "feat: template gallery system"
git push origin main
```

## ✅ Post-Deployment

After successful deployment:

1. Share the URL with stakeholders
2. Document the URL in your project notes
3. Test on multiple devices
4. Monitor for any errors in Coolify logs
5. Set up monitoring/analytics (optional)

---

**Deployment Complete!** 🎉

Your template gallery is now live and easily extendable.
