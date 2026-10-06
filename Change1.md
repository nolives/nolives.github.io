# Change 1: Feature GitHub projects and remove the Experience page

## Goals

- Replace the placeholder in “Selected work” with links to the four public project repositories selected by the site owner: `personal-wiki`, `custom-llm`, `mspacman-agent`, and `networkingtracker`.
- Remove the standalone Work Experience page and remove links to it from the home page and primary navigation.
- Keep the remaining portfolio pages and project links usable on desktop and mobile.
- Keep this planning file in the repository for the assignment, but exclude it from the published site.

## Scope

- Add GitHub project cards to the home page using the selected repositories’ names, URLs, and available repository descriptions.
- Delete the Experience page and its unused styles.
- Update site documentation to reflect the page removal.

## Success checks

- All four project cards link to the correct public GitHub repositories.
- No navigation or home-page link points to `/experience/`, and Jekyll no longer generates that page.
- `Change1.md` is present in the repository but absent from `_site/`.
- Jekyll builds successfully.
