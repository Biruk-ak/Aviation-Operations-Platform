# Contributing to Aviation Operations Platform

Thank you for your interest in contributing. This guide explains how to clone, run, and submit changes to this repository.

## Code of Conduct

Be respectful in issues and pull requests. Focus feedback on the code and operational impact. Do not share credentials, passenger PII, or production secrets in public discussions.

## Getting Started

### 1. Fork and clone

```bash
git clone git@github.com:Biruk-ak/Aviation-Operations-Platform.git
cd Aviation-Operations-Platform
```

If you are contributing from a fork:

```bash
git clone git@github.com:<your-username>/Aviation-Operations-Platform.git
cd Aviation-Operations-Platform
git remote add upstream git@github.com:Biruk-ak/Aviation-Operations-Platform.git
```

### 2. Install dependencies

```bash
cd backend && npm install && cd ..
cd frontend && npm install && cd ..
```

### 3. Run locally

Terminal A — API:

```bash
cd backend
npm run dev
```

Terminal B — Web:

```bash
cd frontend
npm run dev
```

- API: `http://localhost:4000`
- Web: `http://localhost:5173`
- Health: `GET http://localhost:4000/health`

### 4. Optional checks

```bash
cd backend && npm test
```

## Development Workflow

1. Create an issue (bug or feature) using the templates in `.github/ISSUE_TEMPLATE/`.
2. Create a branch from `main`:
   - Features: `feature/<short-description>`
   - Fixes: `fix/<short-description>`
   - Docs: `docs/<short-description>`
3. Implement the change with focused commits.
4. Push your branch and open a pull request using the PR template.
5. Address review feedback and keep the branch up to date with `main`.

```bash
git checkout main
git pull origin main
git checkout -b feature/airport-delay-board
# ... make changes ...
git add -A
git commit -m "Add delay board filters to airport dashboard"
git push -u origin feature/airport-delay-board
```

## Commit Messages

Prefer clear, imperative subjects:

- `Add fuel uplift validation for international sectors`
- `Fix crew legality check for overnight pairings`
- `Document weather briefing API usage examples`

Avoid vague messages such as `update` or `fix stuff`.

## Pull Requests

Every PR should:

- Link related issue(s) (`Closes #123` when applicable)
- Describe what changed and why
- Note how you tested (API curl, UI path, unit tests)
- Keep scope focused — prefer small PRs over large mixed changes

Use [`.github/pull_request_template.md`](./.github/pull_request_template.md).

## Project Conventions

| Area | Convention |
| --- | --- |
| Backend modules | `backend/src/modules/<slug>/` with model, service, controller, routes, validator |
| Frontend modules | `frontend/src/modules/<slug>/` with pages, components, hooks, api, types |
| API paths | `/api/v1/<slug>` |
| Auth | Middleware in `backend/src/middleware/auth.js` — do not bypass in production paths |
| Secrets | Use `.env` locally; never commit keys (see `.gitignore`) |

## Reporting Bugs

Use the **Bug report** issue template and include:

- Steps to reproduce
- Expected vs actual behavior
- Environment (OS, Node version, browser)
- Logs or screenshots when safe to share

## Suggesting Features

Use the **Feature request** issue template and describe:

- Problem / operational need
- Proposed solution
- Alternatives considered
- Affected modules (Aircraft, Crew, Cargo, etc.)

## Security

Do not open public issues for sensitive vulnerabilities. Email **birukaklilu0110@gmail.com** with details and reproduction steps.

## License

Contributions are submitted under the same terms as the project (UNLICENSED / proprietary unless otherwise agreed with the maintainer).

## Questions

Open a GitHub Discussion or issue with the `question` label, or contact **Biruk-ak** at [birukaklilu0110@gmail.com](mailto:birukaklilu0110@gmail.com).
