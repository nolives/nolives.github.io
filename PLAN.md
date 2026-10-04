# Portfolio Site Plan

## Assignment requirements

- Build a static Jekyll portfolio for the GitHub user site `nolives.github.io`, with page content in Markdown and YAML front matter, an empty `baseurl`, and Jekyll URL filters for working links.
- Keep the complete publish-ready site in the repository root, including `index.md`, `_config.yml`, `_layouts/`, `_includes/`, `assets/`, and all other site files. Publish from `main` and `/` (root); do not create a nested website or separate application.
- Create Home, About, Work Experience, and Contact pages with navigation and a footer.
- Use a responsive, single-column layout, semantic HTML, and accessible color contrast; check the site at 375px and 1280px.
- Use reusable Jekyll layouts and includes, and keep page content separate from design.
- Include SEO tags, a sitemap, and a favicon. Use plain HTML and CSS with only minimal JavaScript.
- Do not add a backend, database, blog, CMS, contact-form backend, animation system, complex framework, unnecessary libraries, or third-party trackers. Do not create a React/Vite project, Node application, monorepo, or `package.json`.
- Include a README explaining how to update the site, preview it locally, and run Lighthouse. Explain technical choices and list assumptions separately.
- Make sure the site builds on GitHub Pages without manual build steps.
- Do not fetch personal information from a URL or invent unsupplied achievements, employers, clients, metrics, or projects. Mark unsupplied content as placeholders.
- Verify navigation and the root publishing structure. Achieve Lighthouse scores of at least 90 in Performance, Accessibility, Best Practices, and SEO.
- Get approval of this plan before implementation.

## Your stated preferences

- Use karpathy.ai as the sole site inspiration, particularly for clear, text-first biography and career-history organization. Do not copy its layout, copy, or visual identity.
- Use light and dark themes.
- Use clean, modern typography.
- Do not show a public `mailto:` link.
- GitHub username: `nolives`.
- The résumé will be uploaded later.

## Proposed page content

These are content-organization suggestions, not extra assignment requirements:

- **Home:** short introduction and links to About, Experience, and Contact. A selected-work section may remain a placeholder until projects are supplied.
- **About:** biography and skills, with unsupplied details left as placeholders.
- **Work Experience:** a readable experience structure; do not invent employers or accomplishments.
- **Contact:** use the GitHub profile link if appropriate and leave any other contact method as a placeholder until supplied.

## Optional implementation suggestions

These details are recommendations, not requirements stated at this level of specificity in the assignment:

- Use generous spacing and a calm editorial feel for an original single-column design.
- Provide a manual theme toggle with a system-preference default.
- Use WCAG AA contrast ratios as a measurable target: at least 4.5:1 for normal text and 3:1 for large text. The assignment asks for accessible contrast but does not prescribe these ratios.
- Add canonical URLs, Open Graph/Twitter metadata, and `robots.txt` as SEO improvements beyond the specified SEO tags and sitemap.
- Use GitHub Pages-compatible Jekyll tooling for local preview without creating a separate application.
- If no personal mark is supplied, use a simple original text/monogram favicon.
- Keep technical choices and assumptions in separate README sections; the assignment requires explaining them separately but does not prescribe their location.

## Content dependency and assumptions

- The résumé or LinkedIn About/experience text is needed for final copy. Until supplied, keep missing material visibly marked as placeholder content.
- The GitHub Pages URL is `https://nolives.github.io`, with production publishing from `main` and `/` (root), as specified by the user-site setup.
- The user declined a public email link; no alternate public contact channel has been supplied yet.
- Whether a text/monogram favicon is acceptable remains an implementation assumption.

## Validation

### Required by the assignment

- Confirm the complete Jekyll site is in the repository root and GitHub Pages can publish it from `main` and `/` without manual build steps.
- Verify navigation works and the site displays properly at 375px and 1280px.
- Run Lighthouse and achieve at least 90 in Performance, Accessibility, Best Practices, and SEO.

### Additional quality checks

- Check the light and dark palettes against the proposed WCAG AA contrast ratios.
- Verify the footer links, internal URL filters, sitemap, and theme toggle.
- Report measured Lighthouse results accurately; do not claim scores that were not verified.

## Approval

Approved by the user for implementation.