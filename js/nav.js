const mainNav = document.getElementById("main-nav");
mainNav.innerHTML = `
<nav aria-label="Hauptnavigation">
    <a href="index.html">Home</a>
    <a href="street-dyno.html">Street Dyno</a>
    <a href="gallery.html">Galerie</a>
    <a href="downloads.html">Downloads</a>
    <a href="docs.html">Dokumentation</a>
    <a href="howto_blitzerdepro.html">Blitzer.de App</a>
    <a href="about.html">Die Story</a>
    <a href="impressum.html">Impressum</a>
</nav>
`;

const currentPage = location.pathname.split("/").pop() || "index.html";
for (const link of mainNav.querySelectorAll("a")) {
    if (link.getAttribute("href") === currentPage) {
        link.setAttribute("aria-current", "page");
        break;
    }
}
