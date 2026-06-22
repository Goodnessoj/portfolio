# Portfolio Website

A modern, fast, and responsive personal portfolio website built with Astro and Tailwind CSS, and deployed free through GitHub Pages.

## Tech Stack

- **Framework**: [Astro](https://astro.build/) (Static Site Generation)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Hosting**: GitHub Pages
- **CI/CD**: GitHub Actions
- **Node.js**: 22+

## Project Structure

```
├── .github/workflows/     # CI/CD pipelines
├── public/                # Static assets
├── src/
│   ├── components/        # Reusable components
│   │   ├── sections/      # Page sections (Hero, About, etc.)
│   │   └── ui/            # UI components
│   ├── data/              # Content data (projects, articles)
│   ├── layouts/           # Page layouts
│   ├── pages/             # Route pages
│   └── styles/            # Global styles
├── terraform/             # Legacy AWS IaC reference; not used by deployment
└── portfolio-website-requirements.txt
```

## Pages

| Page | Route | Description |
|------|-------|-------------|
| Home | `/` | Hero, About, Skills, Featured Projects, Blog, Contact |
| About | `/about` | Extended biography, certifications |
| Projects | `/projects` | Curated projects and engineering case studies |
| Certifications | `/certifications` | Verified AWS credentials |
| Blog | `/blog` | Dev.to and Medium articles |
| Contact | `/contact` | Contact form and social links |
| 404 | `/404` | Not found page |

## Getting Started

### Prerequisites

- Node.js 22+ (use [fnm](https://github.com/Schniz/fnm) or [nvm](https://github.com/nvm-sh/nvm))
- npm 10+

### Install Dependencies

```bash
npm install
```

### Development Server

```bash
npm run dev
```
Visit `http://localhost:4321`

### Build for Production

```bash
npm run build
```

Output is in the `dist/` directory.

## Deployment

The GitHub Actions workflow at `.github/workflows/deploy-pages.yml` builds and deploys the site whenever changes reach `main`. It can also be started manually from the Actions tab.

### First-time GitHub setup

1. Open the repository's **Settings → Pages**.
2. Select **GitHub Actions** as the deployment source.
3. Set the custom domain to `goodnessoj.site`.
4. Configure the domain's DNS records for GitHub Pages.
5. Enable **Enforce HTTPS** after GitHub validates the DNS records.

No AWS credentials or repository secrets are required.

> The `terraform/` directory is retained only as a legacy infrastructure reference. It is not executed by CI. Running `terraform apply` manually may create chargeable AWS resources.

## Features

- ✅ Dark/Light mode toggle
- ✅ Mobile-first responsive design
- ✅ SEO optimized with structured data (JSON-LD)
- ✅ Open Graph / Twitter Cards
- ✅ Custom 404 page
- ✅ Contact form (Formspree integration)
- ✅ Dark mode persistence (localStorage)
- ✅ Smooth scroll navigation
- ✅ Hover animations and transitions

## License

MIT

---

Built with ❤️ by Goodness Ojonuba
