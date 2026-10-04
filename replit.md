# Personal Jekyll Portfolio

This repository is the complete static Jekyll site for `nolives.github.io`. Keep the website files at the repository root so GitHub Pages can publish from `main` and `/`.

## Run and preview

- `jekyll serve` — preview locally at `http://127.0.0.1:4000`
- `jekyll build` — build the static site into `_site/`
- GitHub Pages publishes the source directly; it does not need a separate build workflow.

## Project rules

- Keep page content in root-level Markdown files with YAML front matter; use reusable Jekyll layouts and includes for shared design.
- Keep the project static: no nested application, backend, database, Node app, `package.json`, or framework.
- Use `relative_url` for internal links and asset paths. Keep `baseurl` empty for the GitHub user site.
- Do not invent biographical details, employers, achievements, metrics, clients, or projects. Keep missing résumé content visibly marked as placeholders; do not fetch personal information from URLs.
- Do not add a public email link. Use only contact methods the user has supplied.
- Preserve semantic HTML, responsive behavior, accessible color contrast, and keyboard access.

## User preferences

- Use karpathy.ai as the sole structural inspiration; do not copy its design or content.
- Light and dark themes.
- Clean, modern typography.
- The résumé will be provided later.
