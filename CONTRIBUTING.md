# Contributing to neon-readme

Thank you for your interest in contributing to **neon-readme**! Whether it's a bug report, new theme, feature request, or code contribution — you're welcome here.

---

## 📋 Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [Development Workflow](#development-workflow)
- [Adding a New Theme](#adding-a-new-theme)
- [Testing](#testing)
- [Commit Conventions](#commit-conventions)
- [Submitting a Pull Request](#submitting-a-pull-request)
- [Reporting Bugs](#reporting-bugs)
- [Requesting Features](#requesting-features)

---

## Code of Conduct

By participating, you agree to uphold a welcoming, respectful, and inclusive environment. Be kind, constructive, and professional in all interactions.

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** ≥ 18
- **npm** ≥ 9

### Setup

1. **Fork** the repository on GitHub.
2. **Clone** your fork locally:
   ```bash
   git clone https://github.com/YOUR_USERNAME/neon-readme.git
   cd neon-readme
   ```
3. **Install** dependencies:
   ```bash
   npm install
   ```
4. **Link** the CLI locally for testing:
   ```bash
   npm link
   ```
5. **Verify** the CLI works:
   ```bash
   neon-readme --help
   ```

---

## 🛠️ Development Workflow

1. **Create a feature branch** from `main`:
   ```bash
   git checkout -b feature/your-feature-name
   # or
   git checkout -b fix/issue-description
   ```

2. **Make your changes** — keep them focused on a single feature or fix.

3. **Lint your code** before committing:
   ```bash
   npm run lint
   ```

4. **Run the test suite**:
   ```bash
   npm test
   ```

5. **Test the CLI manually** with various flags to ensure nothing breaks:
   ```bash
   neon-readme --theme cyber --name "Test User" --tagline "Hello World"
   ```

---

## 🎨 Adding a New Theme

Theme presets are one of the most valuable contributions! To add a new theme:

1. Locate the themes directory/config in the source code.
2. Follow the existing theme structure (colors, gradients, glow effects, font styles).
3. Add your theme with a descriptive, lowercase, hyphenated name (e.g., `solar-flare`, `arctic-frost`).
4. Add a **preview screenshot** of the generated output to the PR description.
5. Update the theme list in `README.md`.

> **Tip:** Run `neon-readme --list-themes` to see all existing themes for reference.

---

## 🧪 Testing

All new features and bug fixes must include tests.

```bash
# Run the full test suite
npm test

# Run tests in watch mode during development
npm test -- --watch
```

### What to test:
- **CLI flags** — ensure new flags parse correctly
- **Theme rendering** — verify output contains expected ANSI/SVG elements
- **Edge cases** — empty inputs, special characters, very long strings

---

## 📝 Commit Conventions

We follow [Conventional Commits](https://www.conventionalcommits.org/):

```
<type>(<scope>): <short description>

[optional body]
[optional footer]
```

### Types:

| Type | Description |
|:---|:---|
| `feat` | New feature or theme |
| `fix` | Bug fix |
| `docs` | Documentation changes only |
| `style` | Code formatting (no logic change) |
| `refactor` | Code restructuring (no feature/fix) |
| `test` | Adding or fixing tests |
| `chore` | Build, CI, dependency updates |

### Examples:
```bash
git commit -m "feat(themes): add solar-flare neon theme"
git commit -m "fix(cli): handle empty tagline input gracefully"
git commit -m "docs: update theme list in README"
```

---

## 📬 Submitting a Pull Request

1. **Push** your branch to your fork:
   ```bash
   git push origin feature/your-feature-name
   ```

2. **Open a Pull Request** against the `main` branch of `TejaPriyan/neon-readme`.

3. **In the PR description**, include:
   - What the change does and why
   - Screenshots/previews (especially for visual changes)
   - Related issue number (e.g., `Fixes #12`)

4. **Wait for review** — maintainers may request changes. Please respond promptly.

### PR Checklist:
- [ ] Code lints cleanly (`npm run lint`)
- [ ] All tests pass (`npm test`)
- [ ] New features have corresponding tests
- [ ] README updated if behavior changes
- [ ] Commit messages follow conventions

---

## 🐛 Reporting Bugs

Found a bug? Please [open an issue](https://github.com/TejaPriyan/neon-readme/issues/new) with:

- **Title**: Brief, descriptive summary
- **Environment**: Node.js version, OS, terminal emulator
- **Steps to reproduce**: Exact command(s) you ran
- **Expected behavior**: What should have happened
- **Actual behavior**: What actually happened (include error output if any)
- **Screenshots**: If the issue is visual, include terminal screenshots

---

## 💡 Requesting Features

Have an idea? [Open a feature request issue](https://github.com/TejaPriyan/neon-readme/issues/new) with:

- A clear description of the feature
- Why it would be useful
- Any reference examples or mockups

---

## 🙏 Thank You!

Every contribution — no matter how small — helps make `neon-readme` better. Whether you're fixing a typo, adding a theme, or building a major feature, **you're appreciated!**
