# CONTEXT.md — AI Assistant Guide

> This file provides context about the project for AI coding assistants.
> Last updated: April 2026

---

## Project Overview

**Name:** Majd Dayoub — Personal Portfolio  
**Live URL:** [https://www.mdayoub.ca](https://www.mdayoub.ca)  
**Purpose:** A single-page portfolio website showcasing Majd Dayoub's professional experience, technical skills, and personal projects. The site is designed to feel premium, modern, and visually rich — not a standard template.

---

## Tech Stack

| Layer          | Technology                                         |
| -------------- | -------------------------------------------------- |
| Framework      | **React 18** (SPA, no router)                      |
| Build Tool     | **Vite 6** with `@vitejs/plugin-react-swc`         |
| Styling        | **Tailwind CSS 3** (class-based dark mode)          |
| Animations     | **Motion** (formerly Framer Motion) via `motion/react` |
| Icons          | **react-icons** (Boxicons, Feather, Font Awesome)  |
| Fonts          | Google Fonts — **Inter** (sans), **Outfit** (display), **Ovo** (serif) |
| Deployment     | **GitHub Pages** via `gh-pages` package             |
| Base Path      | `"/"` (configured in `vite.config.js`)              |

---

## Project Structure

```
mdayoubPortfolio/
├── public/                     # Static assets (images, logos)
│   ├── majd-pic.png            # Hero profile photo
│   ├── mdayoub-logo.png        # Personal logo / favicon
│   ├── cooperators-logo.png    # Co-operators company logo
│   ├── purolator.png           # Purolator company logo
│   ├── mhica-logo.png          # Mitsubishi Heavy Industries logo
│   ├── Premierbet-image.png    # Premier Bets project screenshot
│   ├── tripbuddyLogo.png       # Trip Buddy project logo
│   ├── pool-image.png          # Pool Simulator project screenshot
│   ├── mancala-image.png       # (unused or future project)
│   ├── sorting-image.png       # (unused or future project)
│   └── mhw-logo.png            # (unused or future project)
│
├── src/
│   ├── main.jsx                # React DOM entry point
│   ├── App.jsx                 # Root component — layout, theme state, all sections
│   ├── index.css               # Global styles, CSS variables, Tailwind directives
│   ├── output.css              # Generated Tailwind output (do not edit manually)
│   └── components/
│       ├── Navbar.jsx           # Fixed floating navbar with nav links, socials, theme toggle, mobile menu
│       ├── Hero.jsx             # Full-screen hero with name, title, CTA buttons, 3D flip photo card
│       ├── Tech.jsx             # Tech skills grid organized by category (Languages, Cloud, Database)
│       ├── Experience.jsx       # Work experience section with sticky stacking card effect
│       ├── Projects.jsx         # Featured projects with screenshots, tech badges, and links
│       ├── Contact.jsx          # CTA contact card with email link and social icons
│       └── MouseBackground.jsx  # Fixed background layer with gradient + SVG noise texture
│
├── index.html                  # HTML shell
├── vite.config.js              # Vite configuration (base path, React SWC plugin)
├── tailwind.config.js          # Tailwind config (custom colors, fonts, dark mode)
├── postcss.config.js           # PostCSS config for Tailwind
├── eslint.config.js            # ESLint configuration
├── package.json                # Dependencies and scripts
└── CONTEXT.md                  # ← You are here
```

---

## Design System

### Theme Architecture

The site uses **HSL CSS custom properties** for full theming support. All colors are defined in `index.css` under `:root` (light) and `.dark` (dark) selectors. Tailwind is configured to consume these via `hsl(var(--token))`.

**Light theme** — warm, earthy, organic tones (cream backgrounds, brown primaries, olive accents).  
**Dark theme** — charcoal backgrounds with warm gold/amber primaries and lighter olive accents.

### Key Design Tokens

| Token        | Light Mode Purpose              | Dark Mode Purpose                |
| ------------ | ------------------------------- | -------------------------------- |
| `background` | Warm cream `#DFD3B5`-like       | Charcoal `hsl(0 2% 16%)`        |
| `foreground` | Near-black `#3E3B3B`            | Off-white earthy                 |
| `primary`    | Warm brown `#675647`            | Gold/amber `#E3BD98`            |
| `secondary`  | Muted beige `#C8BDB0`          | Brown `#675647`                  |
| `accent`     | Olive green `#6C6E36`          | Lighter olive                    |
| `card`       | Slightly darker cream           | Dark slate `#3E3B3B`             |
| `muted`      | Soft neutral                    | Dark neutral                     |
| `border`     | Light beige border              | Dark subtle border               |

### Typography

| Class / Token   | Font     | Usage                              |
| --------------- | -------- | ---------------------------------- |
| `font-sans`     | Inter    | Body text, UI elements             |
| `font-display`  | Outfit   | Headings, brand name, emphasis     |
| `font-serif`    | Ovo      | Subtitles, role descriptions       |

### Border Radius

Uses `--radius: 1.5rem` as the base. Component cards use `rounded-[2.5rem]` to `rounded-[3rem]` for a soft, premium feel.

### Custom Utilities

- **`premium-shadow`** — Subtle box shadow with different intensity for light/dark modes.
- **`soft-noise`** — Class used by `MouseBackground` for the grain texture overlay.

---

## Component Guide

### `App.jsx`
- Manages **light/dark theme state** via `useState` and toggles the `.dark` class on `<html>`.
- Passes `theme` and `toggleTheme` to `Navbar` and `MouseBackground`.
- Wraps all sections in a centered `<main>` container.

### `Navbar.jsx`
- **Fixed, floating pill-shaped navbar** with glassmorphism (`backdrop-blur-xl`).
- Desktop: horizontal nav links + social icons + theme toggle.
- Mobile: hamburger menu that expands into a rounded overlay card with `AnimatePresence`.
- Active link underline animation on hover.

### `Hero.jsx`
- Full-viewport hero section.
- **3D card flip** on hover — front face shows the profile photo, back face shows the logo.
- Offset colored shadow blocks behind the card for a layered, organic feel.
- Staggered entrance animations via Motion.

### `Tech.jsx`
- **Bento-grid layout** (`grid-cols-3`) of technology categories.
- Each category card has an icon, title, description, and pill-shaped tech badges.
- Badges have spring-based hover animations (`whileHover: { y: -4, scale: 1.05 }`).

### `Experience.jsx`
- **Sticky stacking card effect** — each experience card uses `position: sticky` with incrementing `top` offsets, creating a deck-of-cards scrolling effect.
- Cards include company logo, role, period, location, and bullet-point responsibilities.
- Data is stored in a local `experienceData` array.

### `Projects.jsx`
- Side-by-side layout: image on the left, description on the right.
- Each project has tech badges with icons and links to GitHub repos.
- Data is stored in a local `projectsData` array.

### `Contact.jsx`
- Single large CTA card with frosted decorative glow blobs.
- Email link button and social icons (LinkedIn, GitHub).

### `MouseBackground.jsx`
- Fixed, full-viewport background layer at `z-index: -50`.
- Renders a subtle radial gradient for depth and an SVG-based noise/grain texture overlay.
- Accepts `theme` prop for theme-aware styling.

---

## Scripts

| Command           | Purpose                                |
| ----------------- | -------------------------------------- |
| `npm run dev`     | Start Vite dev server                  |
| `npm run build`   | Production build to `dist/`            |
| `npm run preview` | Preview production build locally       |
| `npm run deploy`  | Build + deploy to GitHub Pages         |
| `npm run lint`    | Run ESLint                             |

---

## Key Conventions & Patterns

1. **No React Router** — This is a single-page app using anchor links (`#home`, `#tech`, etc.) for navigation with smooth scrolling.
2. **Data is co-located** — Experience and project data live as arrays inside their respective component files, not in separate data files.
3. **Motion for animations** — All entrance animations use `motion/react` with `whileInView` and custom easing `[0.16, 1, 0.3, 1]`. Spring physics are used for interactive hover effects.
4. **Tailwind-first styling** — Nearly all styling is done via Tailwind utility classes. Vanilla CSS is only used in `index.css` for global resets, CSS variables, and scrollbar styling.
5. **Dark mode via class strategy** — Tailwind's `darkMode: "class"` is used. The `.dark` class is toggled on `document.documentElement` via React state in `App.jsx`.
6. **Image imports** — Public directory images are imported as paths (e.g., `import logo from "/mdayoub-logo.png"`).
7. **Responsive design** — Mobile-first with `md:` breakpoint variants. The navbar switches between desktop and mobile layouts at the `md` breakpoint.

---

## Contact & Links

- **Email:** majd.dayoub04@gmail.com
- **LinkedIn:** [linkedin.com/in/majddayoub](https://www.linkedin.com/in/majddayoub)
- **GitHub:** [github.com/Majd-Dayoub](https://github.com/Majd-Dayoub)
