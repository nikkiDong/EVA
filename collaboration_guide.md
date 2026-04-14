# EVA Team Collaboration Guide

## Branch Structure

- `main` — source code (React + Vite + TypeScript)
- GitHub Actions auto-deploys to GitHub Pages whenever code is merged into `main`

## Page Assignments

| Teammate | Branch Name | Pages |
|----------|------------|-------|
| Nikki | `nikki/homepage` | Homepage |
| Ishan | `ishan/smart-solutions` | Smart Solutions |
| Derek | `derek/coaching-speaking-about` | Coaching, Speaking, About + Questionnaires |
| Shah | `shah/blog-events-pricing-contact` | Blog, Events, Pricing, Contact + Questionnaires |

## Daily Workflow

### 1. First time setup (do once)

```bash
git clone https://github.com/nikkiDong/EVA.git
cd EVA
npm install
git checkout -b your-branch-name   # e.g. ishan/smart-solutions
git push -u origin your-branch-name
```

### 2. Before you start working each day

Sync the latest changes from `main` into your branch:

```bash
git checkout your-branch-name
git pull origin main
```

If there are merge conflicts, resolve them and commit.

### 3. While working

Commit and push to your own branch as often as you like:

```bash
git add .
git commit -m "describe what you changed"
git push
```

### 4. When your feature is ready

1. Go to https://github.com/nikkiDong/EVA
2. Click **"Compare & pull request"** (or create a new PR manually)
3. Set **base: `main`** ← **compare: `your-branch-name`**
4. Write a short description of what you changed
5. Click **"Create pull request"**
6. Wait for at least one teammate to review, then merge

Once merged, GitHub Actions will automatically build and deploy the site.

### 5. After your PR is merged

Update your local branch:

```bash
git checkout main
git pull
git checkout your-branch-name
git pull origin main
```

## Rules

1. **Never push directly to `main`** — always use Pull Requests
2. **Never run `npm run deploy` manually** — GitHub Actions handles deployment
3. **Pull from `main` daily** to stay in sync and avoid big merge conflicts
4. **Keep your commits small and focused** — easier to review and less likely to conflict

## Local Development

To preview the site locally:

```bash
npm run dev
```

This starts a local dev server (usually at http://localhost:5173).