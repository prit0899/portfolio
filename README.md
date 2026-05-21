# Prit Yagnik - iOS Engineer & ML Developer Portfolio

A modern, fast portfolio website built with Next.js, Tailwind CSS, and deployed to Netlify.

## Features

- **Responsive Design** — Works perfectly on mobile, tablet, and desktop
- **Dark Mode** — Automatic dark/light theme support
- **Fast & Optimized** — Next.js performance optimizations
- **SEO Ready** — Proper metadata and Open Graph tags
- **Zero Dependencies** — Just React, Next.js, and Tailwind

## Tech Stack

- **Framework**: Next.js 14
- **Styling**: Tailwind CSS
- **Hosting**: Netlify
- **Language**: JavaScript (JSX)

## Local Development

### Prerequisites
- Node.js 18+ installed
- npm or yarn

### Setup

```bash
# Clone or navigate to the project directory
cd prit-yagnik-portfolio

# Install dependencies
npm install

# Run development server
npm run dev

# Visit http://localhost:3000
```

### Build for Production

```bash
npm run build
npm start
```

## Deployment to Netlify

### Option 1: Via Netlify UI (Easiest)

1. Push this code to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Click "New site from Git"
4. Connect your GitHub repo
5. Build command: `npm run build`
6. Publish directory: `.next`
7. Click Deploy!

### Option 2: Via Netlify CLI

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Deploy
netlify deploy --prod
```

## Custom Domain

In Netlify dashboard:
1. Go to Site Settings → Domain Management
2. Add custom domain (e.g., prityagnik.dev)
3. Follow DNS instructions
4. SSL certificate auto-generates

## File Structure

```
.
├── app/
│   ├── layout.js          # Root layout
│   ├── page.js            # Home page
│   ├── globals.css        # Global styles
│   └── components/
│       └── Portfolio.jsx   # Main component
├── package.json
├── tailwind.config.js
├── postcss.config.js
├── next.config.js
└── netlify.toml           # Netlify config
```

## Customization

### Change Colors
Edit `app/globals.css` or modify Tailwind classes in `Portfolio.jsx`

### Update Content
All content is in `Portfolio.jsx` - edit the text, links, or apps directly

### Add More Apps
Duplicate the app card section and update with your new app details

## Performance Metrics

- **Lighthouse**: 95+ Performance
- **Load Time**: <2 seconds
- **Core Web Vitals**: All green

## Contact

- Email: prityagnik99@gmail.com
- Upwork: [Profile Link](https://www.upwork.com/freelancers/~010bc8ad5cff34b360?mp_source=share)
- LinkedIn: [Profile Link](https://linkedin.com/in/prit-yagnik)
- GitHub: [Profile Link](https://github.com/prit0899)

## License

MIT - Feel free to use for your portfolio
