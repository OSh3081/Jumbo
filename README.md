# Jumbo Lifting Solutions

Jumbo is a website for a crane rental and lifting solutions business. The current application is a React single-page frontend built with Vite. No backend application is implemented yet.

## Prerequisites

- Node.js 22 or newer
- pnpm (the frontend dependencies are pinned by `frontend/pnpm-lock.yaml`)

## Local development

```bash
cd frontend
pnpm install --frozen-lockfile
pnpm dev
```

Vite prints the local development URL after startup.

## Checks and production build

Run these from `frontend/`:

```bash
pnpm lint
pnpm build
```

To preview the production build locally, run `pnpm preview` after building.

## Environment configuration

The current frontend does not require environment variables. Do not commit credentials or local `.env` files. If environment configuration is introduced, document required variable names in a safe `.env.example` and provide real values through local environment configuration or the hosting provider's secret manager. Production values must be configured separately from local development.

## Project layout

- `frontend/` — React application, Vite configuration, assets, and pnpm lockfile
- `.github/workflows/` — continuous integration checks
- `CHANGELOG.md` — significant project milestones

## Git workflow

- `main` is the stable branch.
- Create a short-lived branch for substantial features, fixes, or improvements.
- Use Conventional Commit messages, for example `feat(frontend): add contact form` or `docs: update setup instructions`.
- Keep commits focused, run the relevant lint/build/tests, and review `git diff` before committing.
- Push feature branches and use pull requests for review before merging into `main`.
- Never force-push, rewrite shared history, or commit secrets.

The public GitHub repository is [OSh3081/Jumbo](https://github.com/OSh3081/Jumbo), with `origin/main` tracking the local `main` branch.
