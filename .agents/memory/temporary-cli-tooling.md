---
name: Temporary CLI tooling
description: Remove generated Node project files when using one-off Node tools in this static Jekyll repository.
---

When using Replit's Node package installer to run a temporary audit tool, it can create a root `package.json` and `package-lock.json` even when no Node project existed. Uninstalling the tool and Node.js module does not necessarily remove those files or `node_modules`.

**Why:** This repository must remain a root-level static Jekyll site with no Node package files.

**How to apply:** If a temporary Node CLI is needed, remove its generated manifests and `node_modules` afterward, then confirm `.replit` contains only the required Ruby/Jekyll tooling and that no Node app files remain.