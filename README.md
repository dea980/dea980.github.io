# Daeyeop Kim's Research Portfolio 🚀

This is the source for [dea980.io](https://dea980.io), a bilingual (EN/KR) research portfolio showcasing publications, projects, and professional experience.

## Features 📋

- **Modern, responsive React single-page application** with smooth animations
- **Research-focused sections** for experience, publications, and projects
- **Light/dark theming** with React Context state management
- **Bilingual support (EN/KR)** with language toggle backed by centralized translations
- **GitHub Pages deployment** via `gh-pages` package
- **SEO optimized** with React Helmet
- **Splash screen** option for enhanced user experience

## Tech Stack 🛠️

- **[React](https://reactjs.org/)** (CRA) v16.10.2 with React-Router v5
- **[react-reveal](https://www.react-reveal.com/)** for smooth page transitions and animations
- **[styled-components](https://styled-components.com/)** v5 + custom CSS modules for styling
- **[react-bootstrap](https://react-bootstrap.github.io/)** for responsive UI components
- **[Chart.js](https://www.chartjs.org/)** with react-chartjs-2 for data visualization
- **[gh-pages](https://www.npmjs.com/package/gh-pages)** for static hosting on GitHub Pages

## Project Structure 📁

```
src/
├── components/          # Reusable UI components
│   ├── achievementCard/
│   ├── blogCard/
│   ├── certificationCard/
│   ├── degreeCard/
│   ├── experienceCard/
│   ├── githubRepoCard/
│   └── ...
├── containers/          # Main page sections
│   ├── greeting/       # Hero section
│   ├── skills/         # Skills showcase
│   ├── experience/     # Work experience
│   ├── education/      # Education history
│   ├── projects/       # Project portfolio
│   └── contact/        # Contact form
├── pages/              # Route pages
├── context/            # React Context (Language, Theme)
├── assets/             # Images, fonts, icons
├── shared/             # Shared data files
├── portfolio.js        # Main data source (personalize this!)
├── translations.js     # EN/KR translation strings
└── theme.js            # Theme configuration
```

## Getting Started 🧑‍💻

### Prerequisites

- Node.js (v14 or higher recommended)
- npm or yarn package manager

### Installation & Running Locally

1. **Clone the repository**

   ```bash
   git clone https://github.com/dea980/Webportfolio.git
   cd Webportfolio
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

   This will install all required packages listed in `package.json`.

3. **Start the development server**

   ```bash
   npm start
   ```

   The app will automatically open in your browser at `http://localhost:3000` with hot reload enabled.

4. **Make changes**
   - Edit `src/portfolio.js` to customize your personal information
   - Modify `src/translations.js` to update bilingual content
   - Update `src/theme.js` to change color schemes and styling

### Environment Variables (Optional)

If you want to fetch GitHub data dynamically, create a `.env` file:

```bash
cp env.example .env
```

Then edit `.env` with your GitHub credentials:

```
GITHUB_TOKEN=your_github_token
GITHUB_USERNAME=your_username
```

## Customization 🎨

### Personalizing Your Portfolio

1. **Update Personal Information** (`src/portfolio.js`)

   - `greeting`: Name, subtitle, resume link, GitHub profile
   - `socialMediaLinks`: Social media accounts
   - `skills`: Technical skills and proficiency levels
   - `experience`: Work experience and projects
   - `education`: Academic background
   - `projects`: Portfolio projects

2. **Modify Translations** (`src/translations.js`)

   - Update both `en` and `kr` objects for bilingual content
   - Keep keys consistent between languages

3. **Customize Theme** (`src/theme.js`)

   - Adjust colors, fonts, and styling
   - Modify light/dark theme variants

4. **Add/Remove Sections**
   - Enable/disable sections in `src/containers/Main.js`
   - Toggle splash screen: `settings.isSplash` in `portfolio.js`

## Building & Deploying 🚢

### Build for Production

```bash
npm run build
```

This creates optimized production assets in the `/build` directory.

### Deploy to GitHub Pages

```bash
npm run deploy
```

This command:

1. Runs `npm run build` automatically (via `predeploy` hook)
2. Pushes the `/build` directory to the `gh-pages` branch
3. Your site will be live at `https://yourusername.github.io/repository-name`

**Note:** Ensure you are authenticated with GitHub (SSH or HTTPS + Personal Access Token) before running the deploy command.

### Manual Deployment

If you prefer manual deployment:

```bash
npm run build
# Then manually push the /build directory to gh-pages branch
```

## Custom Domain: `dea980.io` 🌐

This portfolio uses a custom domain `dea980.io`. Configuration:

- **CNAME files**: Exist at repo root **and** under `public/` so every build includes the custom domain
- **DNS Configuration**:
  - Apex `dea980.io` → four A records:
    - `185.199.108.153`
    - `185.199.109.153`
    - `185.199.110.153`
    - `185.199.111.153`
  - Optional IPv6 (AAAA records):
    - `2606:50c0:8000::153`
    - `2606:50c0:8001::153`
    - `2606:50c0:8002::153`
    - `2606:50c0:8003::153`
  - `www.dea980.io` (if used) → CNAME to `dea980.github.io`
- **GitHub Settings**: After DNS propagates, set custom domain in **GitHub → Settings → Pages** and enable "Enforce HTTPS"

## Content Structure 🧱

- **`src/portfolio.js`**: Single source of truth for all portfolio data

  - Personal info, skills, experience, education, projects, contact
  - SEO settings and splash screen configuration

- **`src/translations.js`**: Centralized bilingual (EN/KR) strings

  - Used by language toggle component
  - Keep keys synchronized between languages

- **`public/skills/`**: Skill logos and icons (SVG/PNG)
- **`src/assets/images/`**: Custom illustrations and images
- **`src/shared/`**: JSON data files for experience, contact, etc.

## Development Tips 💡

- **Hot Reload**: Changes to code automatically refresh the browser
- **Linting**: ESLint is configured via `react-app` preset
- **Formatting**: Prettier runs automatically on commit (via Husky/lint-staged)
- **OpenSSL Legacy**: Uses `--openssl-legacy-provider` flag for Node.js compatibility

## Troubleshooting 🔧

### Port Already in Use

If port 3000 is busy:

```bash
# Kill process on port 3000 (macOS/Linux)
lsof -ti:3000 | xargs kill -9

# Or specify a different port
PORT=3001 npm start
```

### Build Errors

If you encounter build errors:

```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
npm start
```

### OpenSSL Legacy Provider

If you see OpenSSL errors, ensure Node.js version compatibility or use:

```bash
export NODE_OPTIONS=--openssl-legacy-provider
npm start
```

## Illustrations 🍥

- [UnDraw](https://undraw.co/illustrations) - Open-source illustrations

## License 📄

MIT License – see [LICENSE](./LICENSE) file for details.

## Acknowledgments 🙏

- Original template from [ashutosh1919/masterPortfolio](https://github.com/ashutosh1919/masterPortfolio)
- Design inspiration from many community portfolios
- Built with ❤️ using React and modern web technologies

---

**Maintained by:** [Daeyeop Kim](https://github.com/dea980)  
**Live Site:** [dea980.io](https://dea980.io)  
**Issues & Contributions:** Welcome! Please feel free to open issues or submit pull requests.
