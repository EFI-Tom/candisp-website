const downloadsRoot = document.documentElement;
const downloadsThemeButton = document.getElementById("downloads-theme-toggle");
const downloadsThemeKey = "candisp-downloads-theme";

function applyDownloadsTheme(theme) {
    downloadsRoot.dataset.downloadTheme = theme;
    downloadsThemeButton.textContent = theme === "dark" ? "Hell anzeigen" : "Dunkel anzeigen";
}

let initialTheme = "light";
try {
    initialTheme = localStorage.getItem(downloadsThemeKey) === "dark" ? "dark" : "light";
} catch {
    // Bei gesperrtem Browserspeicher startet die Seite in der hellen Ansicht.
}

applyDownloadsTheme(initialTheme);
downloadsThemeButton.hidden = false;

downloadsThemeButton.addEventListener("click", () => {
    const nextTheme = downloadsRoot.dataset.downloadTheme === "dark" ? "light" : "dark";
    applyDownloadsTheme(nextTheme);
    try {
        localStorage.setItem(downloadsThemeKey, nextTheme);
    } catch {
        // Die Auswahl gilt weiter für die geöffnete Seite.
    }
});
