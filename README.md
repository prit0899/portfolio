# Prit Yagnik — Portfolio v2

A dark dev portfolio with terminal vibes, neon accents, and **real App Store data** fetched live via the iTunes Lookup API.

## What's different from v1

| v1 (broken) | v2 (this) |
|---|---|
| Emoji placeholders (✏️ 💪) | **Real app icons** fetched from iTunes API |
| Generic Bootstrap-y layout | Terminal-themed dev portfolio with code blocks |
| No animations | Framer Motion scroll animations + typewriter hero |
| Static text only | Live ratings/review counts from App Store |
| Light theme | Dark theme with neon teal/purple/green accents |

## What's actually working live

✅ **iTunes Lookup API** is public and works server-side via the `/api/app-data/[id]` route. It fetches:
- Real high-res app icon (`artworkUrl512`)
- Live rating (e.g. 4.3 stars)
- Live ratings count (e.g. 97K)
- App name, genre, version, description

✅ **Framer Motion** for smooth scroll-triggered animations
✅ **TypeAnimation** for the hero job-title cycle
✅ **Real App Store links** that open the actual listings

## Honesty notes (read this)

I checked your Drawing Pad listing live during build. Drawing Pad has **97K ratings** on the App Store — this is huge, but it's owned by Sunny Side Hurricane LLC, not by you directly. The site positions you as having "contributed to" these apps as part of the Greydesk dev team, which is accurate and defensible. **Do not claim sole ownership of these apps** — clients who Google the developer will see a different company name and you'll lose trust instantly.

If you want different positioning, edit `app/components/Apps.jsx` and adjust the `role` and `contribution` fields.

## Local dev

```bash
npm install
npm run dev
# open http://localhost:3000
```

## Deploy to Netlify

### Option 1: Push to GitHub, connect Netlify
1. `git init && git add . && git commit -m "v2"`
2. Create a GitHub repo, push
3. Go to netlify.com → New site from Git → pick the repo
4. Netlify auto-detects Next.js (the `@netlify/plugin-nextjs` plugin in `netlify.toml` handles this)
5. Hit Deploy

### Option 2: Netlify CLI
```bash
npm install -g netlify-cli
netlify deploy --prod
```

## File structure

```
.
├── app/
│   ├── api/app-data/[id]/route.js  ← iTunes API proxy (server-side)
│   ├── components/
│   │   ├── Navbar.jsx              ← sticky terminal-style nav
│   │   ├── Hero.jsx                ← terminal window + typewriter
│   │   ├── About.jsx               ← what I actually do
│   │   ├── Apps.jsx                ← LIVE app data from iTunes
│   │   ├── CodeShowcase.jsx        ← Swift + Python syntax-highlighted
│   │   ├── TechStack.jsx           ← skills with marquee
│   │   ├── Testimonial.jsx         ← Rodrigo Santos quote
│   │   ├── Contact.jsx             ← terminal-style contact card
│   │   └── Footer.jsx
│   ├── globals.css                 ← dark theme + grid + animations
│   ├── layout.js
│   └── page.js
├── tailwind.config.js              ← neon palette + animations
├── next.config.js                  ← image domains allow-list
├── netlify.toml
└── package.json
```

## Customizing

**Change accent colors:** edit `tailwind.config.js` → `colors.neon.*`

**Add more apps:** edit `app/components/Apps.jsx` → `APP_IDS` array, add the App Store ID.

**Change testimonial:** edit `app/components/Testimonial.jsx`

**Edit code samples:** edit `app/components/CodeShowcase.jsx` → `CODE_SAMPLES`

## Performance

- iTunes API responses cached 24h via Next.js `revalidate: 86400`
- Inter + JetBrains Mono via Google Fonts (already optimized)
- Framer Motion only loads animations when scrolled into view
- Expected Lighthouse: 90+ Performance

## Contact

Built for Prit Yagnik · iOS + ML Engineer · Ahmedabad, India
