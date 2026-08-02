# Portfolio Project

## Overview
Personal portfolio website styled as a Cursor IDE interface. Vanilla HTML/CSS/JS, deployed on Vercel at marcusclementportfolio.vercel.app.

## Tech Stack
- No build system or framework — pure static HTML/CSS/JS
- Deployment: Vercel

## File Structure
- `index.html` — Main HTML, three-column grid layout (sidebar, editor, AI chat)
- `app.js` — Core logic: FILES data object, tab/file management, drag & drop, mock AI chat
- `styles.css` — Dark theme, CSS grid, responsive at 900px breakpoint
- `portfolio/` — Archive/backup subdirectory

## Key Patterns
- All page content is defined in the `FILES` object in `app.js` as HTML strings
- "Files" (about.md, experience.md, projects.md, etc.) are rendered in an editor pane with a tab system
- The AI chat sidebar is decorative — responses cycle from a static pool
- Easter egg: typing "big data" in the AI chat triggers a fullscreen video

## Assets
- Company logos, tech stack icons, and personal media are stored at the project root (no assets/ directory)
- Images are referenced directly in the HTML strings within the FILES object

## Development
- No install or build steps — open `index.html` or use a local server
- No tests
