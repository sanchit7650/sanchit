// theme.js
const toggleBtn = document.getElementById("theme-toggle");
const root = document.documentElement;
// Initialize theme on page load
function initTheme() {
  const storedTheme = localStorage.getItem("theme") || "light";
  root.setAttribute("data-theme", storedTheme);
  updateButtonText(storedTheme);
}
// Update button text based on current theme
function updateButtonText(theme) {
  if (toggleBtn) {
    toggleBtn.textContent = theme === "light" ? "🌙 Dark" : "☀️ Light";
  }
}

// Toggle theme on button click
if (toggleBtn) {
  toggleBtn.addEventListener("click", () => {
    const current = root.getAttribute("data-theme") || "light";
    const next = current === "light" ? "dark" : "light";
    
    root.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
    updateButtonText(next);
  });
}

// Initialize on page load
initTheme();
