const mainNav = document.getElementById("main-nav");
const menuLanguage = document.documentElement.lang === "en" ? "en" : "de";
const isEnglish = menuLanguage === "en";
const localFile = location.protocol === "file:";
const homeHref = localFile ? "index.html" : "./";
const currentFile = location.pathname.split("/").pop() || "index.html";
const currentHref = currentFile === "index.html" ? homeHref : currentFile;

const navItems = [
    [homeHref, "Home", "Home"],
    ["street-dyno.html", "Street Dyno", "Street Dyno"],
    ["gallery.html", "Galerie", "Gallery"],
    ["downloads.html", "Downloads", "Downloads"],
    ["docs.html", "Dokumentation", "Documentation"],
    ["howto_blitzerdepro.html", "Blitzer.de App", "Blitzer.de PRO"],
    ["about.html", "Die Story", "Story"],
    ["impressum.html", "Impressum", "Legal Notice"],
];

const siteNav = document.createElement("nav");
siteNav.setAttribute("aria-label", isEnglish ? "Main navigation" : "Hauptnavigation");

for (const [href, germanLabel, englishLabel] of navItems) {
    const label = isEnglish ? englishLabel : germanLabel;
    if (!label) continue;

    const link = document.createElement("a");
    link.href = href;
    link.textContent = label;
    if (href === currentHref) {
        link.setAttribute("aria-current", "page");
    }
    siteNav.append(link);
}

const alternateLanguage = isEnglish ? "de" : "en";
const alternatePage = document.querySelector(`link[rel="alternate"][hreflang="${alternateLanguage}"]`);

if (alternatePage) {
    const alternatePath = new URL(alternatePage.href).pathname;
    const relativePath = isEnglish ? `..${alternatePath}` : alternatePath.slice(1);
    const alternateHref = localFile && relativePath.endsWith("/") ? relativePath + "index.html" : relativePath;
    const alternateLabel = isEnglish ? "Deutsch" : "English";
    const alternateLink = `<a href="${alternateHref}" lang="${alternateLanguage}" hreflang="${alternateLanguage}" aria-label="${alternateLabel}">${alternateLanguage.toUpperCase()}</a>`;
    const currentLanguage = `<span lang="${menuLanguage}" aria-current="true">${menuLanguage.toUpperCase()}</span>`;
    const separator = '<span aria-hidden="true">|</span>';

    const languageSwitch = document.createElement("span");
    languageSwitch.className = "language-switch";
    languageSwitch.setAttribute("role", "group");
    languageSwitch.setAttribute("aria-label", isEnglish ? "Language" : "Sprache");
    const languageOptions = isEnglish ? [alternateLink, currentLanguage] : [currentLanguage, alternateLink];
    languageSwitch.innerHTML = languageOptions.join(separator);
    siteNav.append(languageSwitch);
}

mainNav.append(siteNav);
