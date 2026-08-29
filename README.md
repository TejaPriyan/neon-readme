# neon-readme

[![npm version](https://img.shields.io/npm/v/neon-readme.svg?color=7c3aed&style=flat-square)](https://www.npmjs.com/package/neon-readme)
[![License: MIT](https://img.shields.io/badge/License-MIT-06b6d4.svg?style=flat-square)](https://opensource.org/licenses/MIT)

Generate a premium, dark-neon-themed GitHub profile README in under a minute. The CLI validates widgets against working endpoints so badges and widgets don't break.

---

## ✨ Features

- **Interactive CLI**: Answer a few quick questions in your terminal to build a complete profile README.
- **Dark Neon Themes**: Built-in support for Tokyo Night, Radical, and Dracula aesthetics.
- **Smart Tech Stack Badges**: Integrates with [skillicons.dev](https://skillicons.dev) with automatic fallback to [shields.io](https://shields.io) for any custom technologies.
- **Dynamic Widgets**: Includes dynamic header banners, rotating typing SVG, GitHub stats, top languages, streak stats, and activity graphs.
- **Contribution Snake Animation**: Generates a GitHub Actions workflow to render an animated contribution snake.
- **Zero-Dependency Testing**: Uses Node.js's native test runner (`node --test`).

---

## 🚀 How to Use

### Option 1: Run instantly with `npx` (Recommended — No Install Needed)

```bash
npx neon-readme
```

---

### Option 2: Install Globally via `npm`

```bash
# Install globally
npm install -g neon-readme

# Run anytime from any directory
neon-readme
```

---

### Option 3: Clone and Run Locally

```bash
# Clone the repository
git clone https://github.com/TejaPriyan/neon-readme.git
cd neon-readme

# Install dependencies and start
npm install
npm start
```

---

## 📋 Step-by-Step Workflow

1. **Run the CLI** using one of the methods above.
2. **Follow the interactive prompts**:
   - Enter your Name, GitHub username, Role, and Tagline.
   - Enter your current focus areas and tech stack.
   - Pick a neon theme (`Tokyo Night`, `Radical`, or `Dracula`).
   - Add your social links (LinkedIn, Portfolio) and any featured projects.
3. **Publish your Profile README**:
   - The CLI will generate a `README.md` file (and optional `.github/workflows/snake.yml`).
   - Push this `README.md` to a public GitHub repository named `username/username` (e.g. `TejaPriyan/TejaPriyan`).

---

## 🛠️ Development & Testing

Run tests locally:
```bash
npm test
```

---

## 🤝 Contributing

Contributions are welcome! Check [CONTRIBUTING.md](file:///c:/Users/teja1/OneDrive/Desktop/neon-readme/CONTRIBUTING.md) for details.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](file:///c:/Users/teja1/OneDrive/Desktop/neon-readme/LICENSE) file for details.
