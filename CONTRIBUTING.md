# Contributing to EVA

Thanks for contributing! This guide covers our Git workflow, branch naming, commit conventions, and code review process.

## Git Workflow: GitHub Flow

We use **GitHub Flow** — a simple, branch-based workflow built around `main` always being deployable.

### How it works

1. **Create a branch** from `main` with a descriptive name (see naming conventions below).
2. **Make your changes** in small, focused commits.
3. **Open a pull request** as soon as you have something to discuss — even if the work isn't finished yet (use Draft PRs for work-in-progress).
4. **Request a review** from at least one teammate.
5. **Merge to `main`** once approved and CI passes. Use "Squash and merge" for feature branches.
6. **Delete the branch** after merging.

### Golden rules

- `main` is always deployable. Never push directly to it.
- Keep branches short-lived — aim to merge within a few days.
- Pull from `main` frequently to avoid painful merge conflicts.

---

## Branch Naming

Use this format: `<type>/<short-description>`

| Type | Purpose | Example |
|------|---------|---------|
| `feature/` | New functionality | `feature/user-avatar-upload` |
| `fix/` | Bug fixes | `fix/login-redirect-loop` |
| `refactor/` | Code restructuring | `refactor/extract-auth-hook` |
| `docs/` | Documentation changes | `docs/api-usage-guide` |
| `chore/` | Build, CI, dependencies | `chore/upgrade-vite-7` |
| `hotfix/` | Urgent production fix | `hotfix/crash-on-empty-cart` |

Guidelines: use lowercase, separate words with hyphens, keep it under 50 characters, and include a ticket number if your team uses one (e.g., `feature/EVA-42-user-avatars`).

---

## Commit Messages

We follow the **Conventional Commits** format:

```
<type>(<scope>): <short summary>

<optional body — explain *why*, not *what*>
```

### Types

| Type | When to use |
|------|-------------|
| `feat` | A new feature |
| `fix` | A bug fix |
| `docs` | Documentation only |
| `style` | Formatting, missing semicolons (no logic change) |
| `refactor` | Code change that neither fixes a bug nor adds a feature |
| `test` | Adding or updating tests |
| `chore` | Build process, dependencies, CI |

### Examples

```
feat(auth): add Google OAuth login

fix(cart): prevent duplicate items when clicking rapidly

refactor(hooks): extract useDebounce into shared utils

chore(deps): upgrade React to 19.2
```

### Rules

- Keep the summary line under 72 characters.
- Use the imperative mood ("add", not "added" or "adds").
- Reference issue numbers in the body: `Closes #42`.

---

## Pull Requests

- Fill out the PR template completely.
- Keep PRs focused — one feature or fix per PR.
- Add screenshots for any visual changes.
- Aim for under 400 lines changed. If it's bigger, consider splitting it up.

### Review expectations

- Reviewers should respond within **1 business day**.
- Be constructive. Prefix suggestions with "nit:" for non-blocking comments.
- Approve once you're confident the code works, reads well, and has adequate tests.
- The PR author merges after approval (so they can address final comments first).

---

## Code Quality

Before pushing, make sure your code passes:

```bash
npm run lint      # ESLint checks
npm run build     # TypeScript compilation + build
```

Pre-commit hooks will run these automatically (via Husky), but it's good practice to run them yourself first.

---

## Getting Started

```bash
# Clone the repo
git clone <repo-url>
cd EVA

# Install dependencies (this also sets up Git hooks)
npm install

# Create your branch
git checkout -b feature/your-feature-name

# Make changes, commit, push
git add .
git commit -m "feat(scope): your change"
git push -u origin feature/your-feature-name

# Open a PR on GitHub
```

Questions? Open an issue or ask in the team chat.
