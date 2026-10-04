(() => {
  const root = document.documentElement;
  const toggle = document.querySelector("[data-theme-toggle]");
  const label = toggle?.querySelector("[data-theme-label]");

  if (!toggle || !label) return;

  const applyTheme = (theme, persist = false) => {
    const nextTheme = theme === "dark" ? "dark" : "light";
    root.dataset.theme = nextTheme;
    toggle.setAttribute("aria-pressed", String(nextTheme === "dark"));
    toggle.setAttribute(
      "aria-label",
      `Switch to ${nextTheme === "dark" ? "light" : "dark"} theme`,
    );
    label.textContent = nextTheme === "dark" ? "Dark" : "Light";

    if (persist) {
      try {
        localStorage.setItem("portfolio-theme", nextTheme);
      } catch (_error) {
        // The theme still changes for this page view if storage is unavailable.
      }
    }
  };

  applyTheme(root.dataset.theme);
  toggle.addEventListener("click", () => {
    applyTheme(root.dataset.theme === "dark" ? "light" : "dark", true);
  });
})();