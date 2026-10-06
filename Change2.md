# Change 2: Refine the homepage bio and visual style

## Goals

- Replace the homepage's placeholder introduction and About teaser with accurate, concise professional information supplied by Nick.
- Use this approved summary as the source copy:

  > Nick is pursuing an MBA at UC Berkeley's Haas School of Business and recently completed a Finance Manager internship at Microsoft. He is a CPA with experience at PwC and PUMA, and received the 2020 Elijah Watt Sells award. He graduated from Boston College with a B.S. in Accounting and Business Analytics.

- Remove the standalone About page and all links to it. Keep the biographical content on the homepage.
- Add Nick's LinkedIn profile as a contact option while retaining GitHub:
  `https://www.linkedin.com/in/nickolives/`
- Refine the existing visual style so it feels more personal and intentional, less like a generic portfolio template. Preserve a clean layout, clear reading hierarchy, responsive behavior, accessibility, and light/dark themes.

## Design direction

Chosen after reviewing four options (editorial, ledger, bold minimal, warm & personal):

- **Editorial**, like a well-set magazine or annual report rather than a startup template.
- **Type:** system serif fonts only (Iowan Old Style, Palatino, Charter, Georgia), with small uppercase sans-serif labels. No web fonts to download.
- **Color:** warm off-white "paper" background, near-black ink, and a single oxblood accent; a matching dark theme with a light rose accent for contrast.
- **Layout:** drop the bordered cards, the numbered "01 / PROJECTS" monospace labels, and the "n." badge. Use a narrow single column with ruled lists: label/value rows for background and contact, and a ruled project list with the language on the right.
- **Header:** the name "Nick" as the brand, with text-only navigation and theme toggle.

## Scope

- Update the homepage introduction and replace its “A little more” section with a **Background** section, using only the approved summary and its supporting details, avoiding repeated placeholder copy.
- Delete `about.md`; remove `/about/` links from homepage navigation and primary navigation; remove the About URL from `sitemap.xml`.
- Update `contact.md` to include the supplied LinkedIn profile link alongside GitHub.
- Restyle `assets/css/site.css` in the editorial direction above, and simplify the header in `_layouts/default.html`.
- Recolor the favicon to the oxblood accent.
- Update `README.md` to reflect the homepage-only biography and LinkedIn contact option.
- Exclude `Change2.md` from Jekyll output while retaining it in the repository.

## Success checks

- The homepage contains the supplied professional summary and no biography placeholders.
- No primary-navigation, homepage, sitemap, or generated-site link points to `/about/`, and Jekyll no longer generates the About page.
- The Contact page links to `https://www.linkedin.com/in/nickolives/` and retains the GitHub contact option.
- The visual refinements feel intentional and distinctive while remaining usable in light and dark themes, on mobile and desktop, and with keyboard navigation.
- Pages display without horizontal scrolling at 375px and 1280px widths.
- Jekyll builds successfully, and `Change2.md` remains in the repository but is absent from the generated site.
