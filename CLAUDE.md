# Kācima — Development Workflow

## Git & Versioning

### Branch Strategy
- `main` — production-ready code
- Feature branches: `feat/<short-description>` (e.g. `feat/mobile-palette-fix`)

### Commit Convention
Use conventional commits:
- `feat:` — new feature
- `fix:` — bug fix
- `refactor:` — code restructuring
- `style:` — styling changes
- `docs:` — documentation

### Versioning
Use semantic versioning: `v<major>.<minor>.<patch>`
- Tag each merged PR with the next version number

## Workflow

### When user says "git push"
1. Check `git status` for modified files
2. `git pull origin main --rebase` (pull latest remote changes)
3. Resolve any conflicts if they arise
4. `git add <files>` — stage all relevant changes
5. `git commit -m "<type>: <description>"` — commit with descriptive message
6. `git push origin main` — push to main remote
7. Confirm to user: "Pushed to origin/main as `<commit-hash>`"

### Creating PRs (for larger features)
1. Create a feature branch: `git checkout -b feat/<description>`
2. Commit changes on the branch
3. Push: `git push origin feat/<description>`
4. Create PR via GitHub CLI: `gh pr create --title "<title>" --body "<description>"`
5. After merge, tag the release: `git tag v<version> && git push origin v<version>`
