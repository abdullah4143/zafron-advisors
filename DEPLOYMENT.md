# Deployment Guide for Zafron Advisors

## Environment Variables Required

For the contact form to work properly, you need to set the following environment variables on your deployment platform:

### Gmail Configuration
- `GMAIL_USER`: Your Gmail address (e.g., `your-email@gmail.com`)
- `GMAIL_APP_PASSWORD`: Your Gmail app-specific password

### How to get Gmail App Password:
1. Go to your Google Account settings
2. Navigate to Security > 2-Step Verification
3. At the bottom, click "App passwords"
4. Select "Mail" and your device
5. Copy the generated 16-character password

### Next.js Configuration
- `NEXTAUTH_URL`: Your deployment URL (e.g., `https://your-app.vercel.app`)
- `NEXTAUTH_SECRET`: A random secret key for security

## Vercel Deployment

### Method 1: Using Vercel Dashboard
1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Click "Import Project"
3. Import from GitHub: `https://github.com/abdullah4143/zafron-advisors.git`
4. In the deployment settings, add environment variables:
   - `GMAIL_USER` = `abdullah.ashraf4143@gmail.com`
   - `GMAIL_APP_PASSWORD` = `eessgkqcirkpuhuf`
   - `NEXTAUTH_URL` = `https://your-deployed-url.vercel.app`
   - `NEXTAUTH_SECRET` = `your-random-secret-key`
5. Click "Deploy"

### Method 2: Using Vercel CLI
```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy
vercel

# Add environment variables
vercel env add GMAIL_USER
vercel env add GMAIL_APP_PASSWORD
vercel env add NEXTAUTH_URL
vercel env add NEXTAUTH_SECRET

# Redeploy with environment variables
vercel --prod
```

## Other Platforms

### Netlify
1. Connect GitHub repository
2. Set build command: `npm run build`
3. Set publish directory: `.next`
4. Add environment variables in site settings

### Railway/Render
1. Connect GitHub repository
2. Add environment variables in dashboard
3. Deploy

## Important Notes
- Never commit actual credentials to Git
- Use the `.env.example` file as a template
- Create a local `.env.local` file for development (this is gitignored)