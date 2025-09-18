# Zafron Advisors - Financial Management Website

A modern, responsive Next.js 14 application for Zafron Advisors, a finance management company based in Islamabad, Pakistan.

## 🚀 Features

- **Modern Design**: Clean, professional UI with glassmorphic navigation and smooth animations
- **GSAP Animations**: Engaging micro-interactions and page transitions
- **Responsive**: Mobile-first design that works on all devices
- **Contact Form**: Functional contact form with email notifications using Nodemailer
- **SEO Optimized**: Comprehensive metadata and structured data
- **Performance**: Optimized for Core Web Vitals and fast loading

## 🛠 Tech Stack

- **Framework**: Next.js 14 with App Router
- **Styling**: TailwindCSS with custom animations
- **Animations**: GSAP (GreenSock Animation Platform)
- **Email**: Nodemailer with Gmail SMTP
- **Language**: TypeScript
- **Deployment**: Ready for Vercel/Netlify deployment

## 📂 Project Structure

```
zafron-advisors/
│
├── app/                    # Next.js App Router
│   ├── api/
│   │   └── contact/
│   │       └── route.ts    # Contact form API endpoint
│   ├── about/
│   │   └── page.tsx        # About page
│   ├── contact/
│   │   └── page.tsx        # Contact page
│   ├── process/
│   │   └── page.tsx        # Process page
│   ├── globals.css         # Global styles
│   ├── layout.tsx          # Root layout
│   └── page.tsx            # Home page
│
├── components/             # Reusable components
│   ├── AnimatedSection.tsx # GSAP animation wrapper
│   ├── Footer.tsx          # Site footer
│   ├── Navbar.tsx          # Navigation component
│   ├── ProcessStep.tsx     # Process step component
│   ├── RefundPolicy.tsx    # Refund policy accordion
│   └── ServiceCard.tsx     # Service card component
│
├── lib/
│   └── mailer.ts           # Email configuration and templates
│
├── public/                 # Static assets
├── .env.example            # Environment variables template
├── next.config.js          # Next.js configuration
├── tailwind.config.js      # TailwindCSS configuration
└── tsconfig.json           # TypeScript configuration
```

## 🎨 Pages

### Home Page (`/`)
- Hero section with compelling headline and CTA
- Services showcase with animated cards
- "Why Choose Us" section with company benefits
- Call-to-action section

### About Page (`/about`)
- Company story and mission
- Statistics and achievements
- Core values presentation
- Location information

### Process Page (`/process`)
- 6-step onboarding process
- Process benefits and features
- Refund policy with interactive accordions
- Project timeline expectations

### Contact Page (`/contact`)
- Contact form with validation and animations
- Company contact information
- Business hours and location
- Success/error handling with GSAP animations

## ⚙️ Setup Instructions

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd zafron-advisors
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables:**
   ```bash
   cp .env.example .env.local
   ```
   
   Fill in your email configuration:
   ```env
   GMAIL_USER=your-email@gmail.com
   GMAIL_APP_PASSWORD=your-app-password
   ```

4. **Run the development server:**
   ```bash
   npm run dev
   ```

5. **Open [http://localhost:3000](http://localhost:3000) in your browser**

## 📧 Email Configuration

The contact form uses Gmail SMTP for sending emails. To set this up:

1. Enable 2-factor authentication on your Gmail account
2. Generate an App Password: [Google Account Settings](https://myaccount.google.com/apppasswords)
3. Add the credentials to your `.env.local` file

## 🎨 Customization

### Colors
The design uses a blue color scheme defined in `tailwind.config.js`. You can customize the primary colors:

```javascript
colors: {
  primary: {
    50: '#f0f9ff',
    500: '#0ea5e9',
    600: '#0284c7',
    // ... more shades
  }
}
```

### Animations
GSAP animations are configured in individual components. Main animation types:
- `fadeIn`: Opacity transition
- `slideUp`: Slide up with fade
- `scaleIn`: Scale and fade transition
- `stagger`: Sequential animation of multiple elements

### Content
Update company information in:
- `app/layout.tsx` - SEO metadata
- Component text content
- Contact information in `app/contact/page.tsx`

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy automatically

### Environment Variables for Production
```env
GMAIL_USER=your-email@gmail.com
GMAIL_APP_PASSWORD=your-app-password
NEXTAUTH_URL=https://your-domain.com
NEXTAUTH_SECRET=your-secret-key
```

## 📱 Responsive Design

The application is fully responsive with breakpoints:
- Mobile: `< 768px`
- Tablet: `768px - 1024px`
- Desktop: `> 1024px`

## 🔍 SEO Features

- Comprehensive meta tags
- Open Graph and Twitter Card support
- Structured data for better search visibility
- Optimized images and performance
- Sitemap ready

## 🛡 Security Features

- Rate limiting on contact form
- Input validation and sanitization
- CORS handling
- Environment variable protection

## 📈 Performance

- Optimized bundle size
- Image optimization
- Lazy loading components
- Efficient animations with GSAP
- Core Web Vitals optimized

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is proprietary to Zafron Advisors. All rights reserved.

## 🆘 Support

For support or questions about this application:
- Email: info@zafronadvisors.com
- Location: Islamabad, Pakistan

---

Built with ❤️ by Zafron Advisors Team