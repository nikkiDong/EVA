# EVA Smart Systems — Walkthrough Video Script

**Domain:** EVASmartSystems.com | **GitHub:** github.com/nikkiDong/EVA | **Video Length:** ~7 minutes

---

## INTRO (0:00 – 0:20)

> **[On screen: EVA homepage preview]**

"Hi Troy! This video walks you through getting your EVA Smart Systems website live — from buying a domain to deploying the site. There are six steps, and I'll walk you through each one."

---

## Step 1: Buy Your Domain (0:20 – 1:20)

> **[On screen: Show the Setup Guide HTML — Step 1]**

"First, you need a domain — that's your website's address. You can pick any of these three registrars: **Namecheap**, **GoDaddy**, or **Cloudflare**. They're all solid — Namecheap is the most affordable at about $10/year, GoDaddy has 24/7 phone support, and Cloudflare has at-cost pricing with the best DNS."

"Whichever one you choose, search for **EVASmartSystems.com** — or any domain name you like — add it to your cart, and check out. Just make sure **privacy protection** is turned on so your personal info stays hidden."

"Keep this tab open — we'll come back for DNS settings later."

---

## Step 2: Download the Code (1:20 – 2:00)

> **[On screen: Show the Setup Guide HTML — Step 2, then switch to github.com/nikkiDong/EVA]**

"All the website code is on GitHub. Go to **github.com/nikkiDong/EVA**, click the green **Code** button, then **Download ZIP**. Unzip the file and you'll have the entire website in a folder."

---

## Step 3: Build the Site (2:00 – 3:30)

> **[On screen: Show the Setup Guide HTML — Step 3]**

"Before we can deploy, we need to build the site. First, install **Node.js** — go to **nodejs.org** and download the LTS version. It's a free tool that lets your computer run the build."

> **[On screen: Terminal / Command Prompt]**

"Then open **Terminal** on Mac or **Command Prompt** on Windows, navigate to the project folder, and run two commands:"

```
npm install
npm run build
```

"The first one downloads everything the site needs. The second one builds it. When it's done, you'll see a `dist` folder — that's the ready-to-deploy version of your website."

---

## Step 4: Deploy to Netlify (3:30 – 5:00)

> **[On screen: Show the Setup Guide HTML — Step 4, then switch to netlify.com]**

"Now the fun part. You might be wondering — why Netlify? **React** is the tool we used to *build* the website, but you still need somewhere to *host* it online. That's what Netlify does. It's free, gives you automatic security, and deploying is literally drag-and-drop."

1. "Go to **netlify.com** and create a free account"
2. "On your dashboard, you'll see a drag-and-drop area"
3. "**Drag your `dist` folder** onto it"
4. "In a few seconds, you'll get a live URL like `random-name.netlify.app` — click it to make sure your site works!"

"Your site is now live on the internet — but on a temporary Netlify URL. Let's connect your real domain."

---

## Step 5: Connect Your Domain (5:00 – 6:15)

> **[On screen: Show the Setup Guide HTML — Step 5, then switch to Netlify dashboard]**

"In Netlify, go to **Site settings → Domain management → Add a domain**, and enter **EVASmartSystems.com**. Netlify will give you some DNS records."

"Now go back to your registrar — Namecheap, GoDaddy, or wherever you bought the domain. Go to **Advanced DNS** and add the records Netlify gave you. Usually that's an **A record** and a **CNAME for www**. Save it, and wait a few minutes — sometimes up to an hour — for it to take effect."

---

## Step 6: Enable HTTPS (6:15 – 6:30)

> **[On screen: Show the Setup Guide HTML — Step 6]**

"Last step — back in Netlify, go to **Domain management → HTTPS** and click **Provision certificate**. Netlify sets up a free SSL certificate automatically. You'll see the secure lock icon in the browser — that's how visitors know your site is safe."

---

## Verify & Wrap Up (6:30 – 7:00)

> **[On screen: Live site at EVASmartSystems.com]**

"Let's do a quick check: visit **EVASmartSystems.com**, click through all the pages, try it on your phone, and confirm the lock icon is showing."

"And that's it — six steps, and your site is live. If you ever need updates, a developer can push changes to GitHub and Netlify will auto-deploy them. Thanks for watching!"

---

## Quick Reference

| What | Where |
|------|-------|
| Buy domain | namecheap.com / godaddy.com / cloudflare.com |
| Download code | github.com/nikkiDong/EVA → Code → Download ZIP |
| Install Node.js | nodejs.org |
| Host the site | netlify.com (free) |
| Check DNS status | dnschecker.org |
