# neon-readme

Generate a premium, dark-neon-themed GitHub profile README in under a minute. The CLI validates widgets against working endpoints so badges and widgets don't break.

## ✨ Features

- **Interactive CLI**: Answer a few quick questions in your terminal to build a complete profile README.
- **Dark Neon Themes**: Built-in support for Tokyo Night, Radical, and Dracula aesthetics.
- **Smart Tech Stack Badges**: Integrates with [skillicons.dev](https://skillicons.dev) with automatic fallback to [shields.io](https://shields.io) for any custom technologies.
- **Dynamic Widgets**: Includes dynamic header banners, rotating typing SVG, GitHub stats, top languages, streak stats, and activity graphs.
- **Contribution Snake Animation**: Generates a GitHub Actions workflow to render an animated contribution snake.
- **Zero-Dependency Testing**: Uses Node.js's native test runner (`node --test`).

## 🚀 Quick Start

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run the generator**:
   ```bash
   npm start
   # or
   node ./bin/cli.js
   ```

3. **Follow the prompts**:
   Enter your name, GitHub username, role, focus areas, tech stack, theme, and optional projects/socials.

4. **Publish your Profile README**:
   - The CLI will generate a `README.md` file.
   - Push this `README.md` to a public repository named `username/username` on GitHub to display it on your profile.

## 🛠️ Development & Testing

Run the test suite:
```bash
npm test
```

## 🤝 Contributing

Contributions are welcome! Check [CONTRIBUTING.md](file:///c:/Users/teja1/OneDrive/Desktop/neon-readme/CONTRIBUTING.md) for details.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](file:///c:/Users/teja1/OneDrive/Desktop/neon-readme/LICENSE) file for details.
