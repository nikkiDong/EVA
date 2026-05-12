# EVA Smart Systems — Website Handoff Walkthrough Video Script

**Domain:** EVASmartSystems.com | **GitHub:** github.com/nikkiDong/EVA | **Video Length:** ~8 minutes

---

## INTRO (0:00 – 0:20)

> **[On screen: EVA homepage preview]**

"Hi Troy! This video walks you through getting your EVA Smart Systems website live — buying your domain, downloading the code, and deploying it. I'll keep it simple."

---

## SECTION 1: Buy Your Domain (0:20 – 1:30)

> **[On screen: namecheap.com]**

"A domain is your website's address — EVASmartSystems.com. You buy it from a domain registrar. I recommend **GoDaddy** or **Namecheap** (namecheap.com) or **Cloudflare** — they are affordable at about $10/year and the interface is straightforward.

---

## SECTION 2: Download the Code from GitHub (1:30 – 2:30)

> **[On screen: github.com/nikkiDong/EVA]**

"All the website code lives on GitHub. To download it:"

1. "Go to **github.com/nikkiDong/EVA**"
2. "Click the green **Code** button → **Download ZIP**"
3. "Unzip the downloaded file — you'll get a folder with the entire website"

> "That's it. 

---

## SECTION 3: Why Netlify? (React vs. Hosting) (2:30 – 3:15)

> **[On screen: Simple diagram — React builds the site, Netlify hosts it]**

Netlifyis  free for sites like ours, gives you automatic HTTPS (the security lock icon), and deploying is literally drag-and-drop. No server management needed."

---

## SECTION 4: Build & Deploy (3:15 – 6:00)



### 4a. Build the Site

> **[On screen: Terminal]**

"Open Terminal (Mac) or Command Prompt (Windows), go to the project folder, and run:"

```bash
npm install        # one-time setup
npm run build      # creates the deployable 'dist' folder
```

> "If `npm` isn't recognized, install **Node.js** first from **nodejs.org** (download the LTS version)."

### 4c. Deploy to Netlify

1. "Go to **netlify.com**, sign up for a free account"
2. "On your dashboard, find the drag-and-drop area"
3. "**Drag your `dist` folder** onto it"
4. "In seconds, you'll get a live URL like `random-name.netlify.app` — click it to preview your site!"

---

## SECTION 5: Connect Your Domain (6:00 – 7:30)

### In Netlify:

1. "Go to **Site settings → Domain management → Add a domain**"
2. "Enter **EVASmartSystems.com** — Netlify will show you DNS records to add"

### In Your Registrar (e.g. Namecheap):

1. "Go to your domain → **Advanced DNS**"
2. "Add the records Netlify gave you (typically an **A record** and a **CNAME for www**)"
3. "Save — it takes a few minutes to an hour to take effect"

### Enable HTTPS:

"Back in Netlify → Domain management → HTTPS → **Provision certificate**. That's it — free automatic SSL."

---

## SECTION 6: Verify & Wrap Up (7:30 – 8:00)

> **[On screen: Live site on EVASmartSystems.com]**

"Do a quick check: visit EVASmartSystems.com, click through all pages, check it on your phone, and make sure the lock icon shows up."

"To recap — you bought a domain, downloaded the code, built it, dragged it onto Netlify, and pointed your domain there. Your site is live!"

"If you need updates down the road, a developer can push changes to GitHub and Netlify can auto-deploy them. Thanks for watching!"

---

## Quick Reference

| What | Where |
|------|-------|
| Buy domain | namecheap.com (or godaddy.com, cloudflare.com) |
| Download code | github.com/nikkiDong/EVA → Code → Download ZIP |
| Install Node.js | nodejs.org |
| Host the site | netlify.com (free) |
| Check DNS status | dnschecker.org |
