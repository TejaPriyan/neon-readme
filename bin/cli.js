#!/usr/bin/env node
import prompts from "prompts";
import pc from "picocolors";
import fs from "fs";
import path from "path";
import { pathToFileURL } from "url";

// ---------------------------------------------------------------------------
// Known-good tech -> skillicons.dev slug map.
// Anything NOT in here falls back to a plain shields.io badge instead of a
// broken icon — this is the whole point of this generator.
// ---------------------------------------------------------------------------
const SKILLICON_MAP = {
  java: "java", cpp: "cpp", "c++": "cpp", c: "c", python: "py", py: "py",
  javascript: "js", js: "js", typescript: "ts", ts: "ts",
  html: "html", css: "css", react: "react", nextjs: "nextjs", "next.js": "nextjs",
  vue: "vue", angular: "angular", svelte: "svelte",
  nodejs: "nodejs", "node.js": "nodejs", node: "nodejs", express: "express",
  tailwind: "tailwind", "tailwindcss": "tailwind", threejs: "threejs", "three.js": "threejs",
  opencv: "opencv", tensorflow: "tensorflow", pytorch: "pytorch",
  mysql: "mysql", postgres: "postgres", postgresql: "postgres", mongodb: "mongodb",
  redis: "redis", docker: "docker", kubernetes: "kubernetes", git: "git", github: "github",
  vscode: "vscode", figma: "figma", php: "php", laravel: "laravel", django: "django",
  flask: "flask", rust: "rust", go: "go", golang: "go", kotlin: "kotlin", swift: "swift",
  dart: "dart", flutter: "flutter", graphql: "graphql", firebase: "firebase",
  aws: "aws", gcp: "gcp", azure: "azure", linux: "linux", bash: "bash",
  sass: "sass", bootstrap: "bootstrap", npm: "npm", yarn: "yarn", vite: "vite",
  webpack: "webpack", jest: "jest", postman: "postman", blender: "blender",
  unity: "unity", r: "r", scala: "scala", ruby: "ruby", rails: "rails",
};

// Widgets don't all spell theme names the same way — this table hides that.
const THEME_TABLE = {
  tokyonight: { stats: "tokyonight", streak: "tokyonight", activity: "tokyo-night", accent: "0:0f172a,50:7c3aed,100:06b6d4" },
  radical: { stats: "radical", streak: "radical", activity: "radical", accent: "0:141321,50:fe428e,100:f8d866" },
  dracula: { stats: "dracula", streak: "dracula", activity: "dracula", accent: "0:282a36,50:ff79c6,100:8be9fd" },
};

function techBadges(techList) {
  const known = [];
  const fallback = [];
  techList.forEach((raw) => {
    const key = raw.trim().toLowerCase();
    if (!key) return;
    if (SKILLICON_MAP[key]) known.push(SKILLICON_MAP[key]);
    else fallback.push(raw.trim());
  });
  let out = "";
  if (known.length) {
    out += `<img src="https://skillicons.dev/icons?i=${known.join(",")}&theme=dark" alt="Tech stack"/>\n\n`;
  }
  if (fallback.length) {
    out += fallback
      .map(
        (t) =>
          `<img src="https://img.shields.io/badge/${encodeURIComponent(
            t
          )}-111111?style=flat-square" alt="${t}"/>`
      )
      .join(" ") + "\n";
  }
  return out;
}

function projectCard(p) {
  const links = [];
  if (p.live) links.push(`**🔗 Live Demo:** [${p.live.replace(/^https?:\/\//, "")}](${p.live})`);
  if (p.repo) links.push(`**Repository:** [View on GitHub](${p.repo})`);
  const linkLine = links.length ? links.join("  \n") : "**Repository:** _add your repo link here_";

  return `<table>
<tr>
<td width="65%" valign="top">

### ${p.name}
${p.desc}

${linkLine}

</td>
<td width="35%" valign="top">

${techBadges(p.tech.split(","))}
</td>
</tr>
</table>
`;
}

function buildReadme(answers) {
  const themeKey = answers.theme && THEME_TABLE[answers.theme] ? answers.theme : "dracula";
  const t = THEME_TABLE[themeKey];
  const focusRows = [];
  for (let i = 0; i < answers.focus.length; i += 2) {
    const a = answers.focus[i] || "";
    const b = answers.focus[i + 1] || "";
    focusRows.push(`| ${a ? "**" + a + "**" : ""} | ${b ? "**" + b + "**" : ""} |`);
  }

  const socialBadges = [];
  socialBadges.push(
    `<a href="https://github.com/${answers.username}" target="_blank"><img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white&labelColor=0d1117" alt="GitHub"/></a>`
  );

  if (answers.linkedin) {
    socialBadges.push(
      `<a href="${answers.linkedin}" target="_blank"><img src="https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white&labelColor=0d1117" alt="LinkedIn"/></a>`
    );
  }
  if (answers.portfolio) {
    socialBadges.push(
      `<a href="${answers.portfolio}" target="_blank"><img src="https://img.shields.io/badge/Portfolio-06b6d4?style=for-the-badge&logoColor=white&labelColor=0d1117" alt="Portfolio"/></a>`
    );
  }

  return `<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=${t.accent}&height=220&section=header&text=${encodeURIComponent(
    answers.name
  )}&fontSize=54&fontColor=ffffff&animation=fadeIn&fontAlignY=38&desc=${encodeURIComponent(
    answers.tagline
  )}&descAlignY=58&descSize=18" width="100%"/>

<br>

<img src="https://readme-typing-svg.demolab.com/?font=Fira+Code&weight=600&size=24&duration=3000&pause=1000&color=A78BFA&center=true&vCenter=true&width=650&lines=${answers.focus
    .map((f) => encodeURIComponent(f))
    .join(";")}" alt="Typing SVG"/>

<br><br>

<img src="https://komarev.com/ghpvc/?username=${answers.username}&label=PROFILE%20VIEWS&color=06b6d4&style=for-the-badge&labelColor=0d1117" alt="Profile Views"/>

</div>

---

<h2 align="center">👨‍💻 About Me</h2>

${answers.bio}

---

<h2 align="center">🎯 Current Focus</h2>

<div align="center">

| | |
|:---:|:---:|
${focusRows.join("\n")}

</div>

---

<h2 align="center">🛠️ Tech Stack</h2>

<div align="center">

${techBadges(answers.tech)}

</div>

---

<h2 align="center">🚀 Featured Projects</h2>

${answers.projects.map(projectCard).join("\n")}

---

<h2 align="center">📊 GitHub Statistics</h2>

<div align="center">

<table>
<tr>
<td width="50%">
<img src="https://github-stats-extended.vercel.app/api?username=${answers.username}&show_icons=true&theme=${t.stats}&hide_border=true" width="100%" alt="GitHub Stats"/>
</td>
<td width="50%">
<img src="https://github-stats-extended.vercel.app/api/top-langs/?username=${answers.username}&layout=compact&theme=${t.stats}&hide_border=true" width="100%" alt="Top Languages"/>
</td>
</tr>
</table>

<img src="https://streak-stats.demolab.com/?user=${answers.username}&theme=${t.streak}&hide_border=true" alt="GitHub Streak Stats"/>

<img src="https://github-readme-activity-graph.vercel.app/graph?username=${answers.username}&theme=${t.activity}&hide_border=true" width="95%" alt="Contribution Activity Graph"/>

</div>

---

<h2 align="center">🤝 Connect With Me</h2>

<div align="center">

${socialBadges.join("\n")}

</div>

---

<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=${t.accent}&height=120&section=footer&text=Thanks%20for%20visiting!%20%F0%9F%9A%80&fontSize=20&fontColor=ffffff&animation=fadeIn&fontAlignY=75" width="100%"/>

</div>
`;
}

const SNAKE_WORKFLOW = `name: Generate Snake Animation

on:
  schedule:
    - cron: "0 0 * * *"
  workflow_dispatch:
  push:
    branches:
      - main

jobs:
  generate:
    permissions:
      contents: write
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Generate snake animation
        uses: Platane/snk@v3
        with:
          github_user_name: \${{ github.repository_owner }}
          outputs: |
            dist/github-contribution-grid-snake.svg
            dist/github-contribution-grid-snake-dark.svg?palette=github-dark

      - name: Push snake animation to the output branch
        uses: crazy-max/ghaction-github-pages@v4
        with:
          target_branch: output
          build_dir: dist
        env:
          GITHUB_TOKEN: \${{ secrets.GITHUB_TOKEN }}
`;

export { techBadges, projectCard, buildReadme, SKILLICON_MAP, THEME_TABLE };

async function main() {
  console.log("");
  console.log(pc.bold(pc.cyan("  ▲ neon-readme")) + pc.dim("  — premium GitHub profile README generator"));
  console.log(pc.dim("  Every widget below is checked against a currently-working endpoint.\n"));

  const answers = await prompts(
    [
      { type: "text", name: "name", message: "Your name", validate: (v) => (v ? true : "Required") },
      { type: "text", name: "username", message: "GitHub username", validate: (v) => (v ? true : "Required") },
      { type: "text", name: "tagline", message: "One-line tagline (e.g. AI Engineer • Full-Stack Developer)" },
      { type: "text", name: "bio", message: "Short bio (1-3 sentences)" },
      {
        type: "list",
        name: "focus",
        message: "Current focus areas (comma-separated, e.g. AI, Full-Stack, Next.js)",
        separator: ",",
      },
      {
        type: "list",
        name: "tech",
        message: "Your tech stack (comma-separated)",
        separator: ",",
      },
      {
        type: "select",
        name: "theme",
        message: "Pick a theme",
        choices: [
          { title: "Tokyo Night (cyan / purple)", value: "tokyonight" },
          { title: "Radical (pink / gold)", value: "radical" },
          { title: "Dracula (purple / cyan)", value: "dracula" },
        ],
        initial: 2,
      },
      { type: "text", name: "linkedin", message: "LinkedIn URL (optional, press enter to skip)" },
      { type: "text", name: "portfolio", message: "Portfolio URL (optional, press enter to skip)" },
    ],
    { onCancel: () => process.exit(1) }
  );

  answers.projects = [];
  let addMore = true;
  while (addMore) {
    console.log(pc.dim(`\n  — Project ${answers.projects.length + 1} —`));
    const project = await prompts(
      [
        { type: "text", name: "name", message: "Project name" },
        { type: "text", name: "desc", message: "One-line description" },
        { type: "text", name: "tech", message: "Tech used (comma-separated)" },
        { type: "text", name: "live", message: "Live demo URL (optional)" },
        { type: "text", name: "repo", message: "Repo URL (optional)" },
      ],
      { onCancel: () => process.exit(1) }
    );
    answers.projects.push(project);

    const { more } = await prompts({
      type: "confirm",
      name: "more",
      message: "Add another project?",
      initial: false,
    });
    addMore = more;
  }

  const { wantSnake } = await prompts({
    type: "confirm",
    name: "wantSnake",
    message: "Also generate the contribution-snake GitHub Actions workflow?",
    initial: true,
  });

  const readme = buildReadme(answers);
  const outDir = process.cwd();
  fs.writeFileSync(path.join(outDir, "README.md"), readme);
  console.log(pc.green(`\n  ✓ README.md written to ${outDir}`));

  if (wantSnake) {
    const workflowDir = path.join(outDir, ".github", "workflows");
    fs.mkdirSync(workflowDir, { recursive: true });
    fs.writeFileSync(path.join(workflowDir, "snake.yml"), SNAKE_WORKFLOW);
    console.log(pc.green("  ✓ .github/workflows/snake.yml written"));
  }

  console.log(pc.dim("\n  Next steps:"));
  console.log(pc.dim(`  1. Commit and push README.md to ${answers.username}/${answers.username}`));
  if (wantSnake) {
    console.log(pc.dim("  2. Run the 'Generate Snake Animation' workflow once from the Actions tab"));
  }
  console.log(pc.dim("  3. Make sure the repo is public — profile READMEs only render on public repos\n"));
}
if (import.meta.url === pathToFileURL(process.argv[1]).href) {
  main();
}

