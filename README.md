# nolives.github.io

A static Jekyll portfolio for GitHub Pages. The Jekyll source is in this repository's root and is intended to publish from the `main` branch and `/` (root).

## Update the site

- Edit `index.md` (introduction, background, and projects) and `contact.md` (LinkedIn and GitHub links) to update the page content. The biography lives on the home page; there is no separate About page.
- Keep page copy in Markdown with YAML front matter. Shared HTML belongs in `_layouts/` and `_includes/`; styling is in `assets/css/site.css`.
- Add or change details only with information supplied by the site owner. Do not add unverified roles, projects, clients, dates, or accomplishments.
- Change `url` in `_config.yml` if the GitHub Pages domain changes. Keep `baseurl: ""` for the GitHub user site.
- Contact options are LinkedIn and GitHub. Do not add a public email address unless the owner explicitly changes that choice.

## Preview locally

1. Install Ruby and Jekyll using the [Jekyll installation guide](https://jekyllrb.com/docs/installation/).
2. From the repository root, run:

   ```sh
   jekyll serve
   ```

3. Open `http://127.0.0.1:4000`. Jekyll rebuilds the site as files change.

To generate the static files without starting the preview server, run `jekyll build`. The output is written to `_site/`.

## Publish with GitHub Pages

In the repository settings, choose **Pages → Deploy from a branch → `main` → `/(root)`**. GitHub Pages builds the Jekyll site directly; no separate build workflow or application is needed. The repository should be named `nolives.github.io` for the configured user-site URL.

## Check responsive layout and Lighthouse

- Check the rendered pages at 375px and 1280px viewport widths.
- In Chrome, open the local preview, open Developer Tools, select **Lighthouse**, and run Performance, Accessibility, Best Practices, and SEO. Aim for at least 90 in each category.
- Repeat the Lighthouse run after publishing if production behavior differs from local preview.

## Technical choices

- Jekyll and GitHub Pages provide a static, Markdown-first publishing path with no server-side application.
- Shared layout, navigation, footer, and metadata are reusable Liquid includes; page-specific writing stays in Markdown.
- Internal paths use Jekyll URL filters, and `baseurl` is empty for a GitHub user site.
- SEO metadata, a generated sitemap, and an SVG favicon are included without external trackers, remote fonts, or runtime libraries.
- The design is editorial: system serif type (no web fonts to download), a warm paper background, a single oxblood accent, and ruled lists instead of cards. Colors are defined once as CSS custom properties with light and dark sets.
- A small theme script respects the system color preference, allows a manual light/dark switch, and remembers the visitor's choice locally.

## Assumptions

- The GitHub user-site URL is `https://nolives.github.io`.
- LinkedIn and the public GitHub profile are the contact links. No email address is displayed.
- Biographical content comes only from the summary the owner approved in `Change2.md`.
- The simple `n.` favicon is a temporary mark based on the supplied GitHub username and can be replaced if the owner provides a logo.