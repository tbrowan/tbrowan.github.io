// Builds every part of the page inside #app from portfolioContent.

function renderHeader() {
    return `
        <header class="position-absolute w-100 z-3 d-flex flex-column flex-md-row justify-content-between align-items-center gap-3 px-5 py-4">
            <a href="#hero" class="nav-link-custom text-decoration-none fs-5 fw-bold">My <span class="fw-light">Portfolio</span></a>
            <nav class="d-flex gap-4">
                <a href="#hero" class="nav-link-custom text-decoration-none text-uppercase small letter-spaced">Home</a>
                <a href="#portfolio" class="nav-link-custom text-decoration-none text-uppercase small letter-spaced">Projects</a>
                <a href="#contact" class="nav-link-custom text-decoration-none text-uppercase small letter-spaced">Contact</a>
            </nav>
        </header>
    `;
}

function renderHero(content) {
    return `
        <section id="hero" class="hero min-vh-100 d-flex flex-column justify-content-center px-5">
            <h1 class="display-4 fw-bold">${content.name} | ${content.school}</h1>
            <p class="hero-text fs-5 mb-5">${content.intro}</p>
            <div>
                <a href="#portfolio" class="btn btn-crimson btn-lg text-uppercase fw-semibold px-4 py-3">View My Work</a>
            </div>
        </section>
    `;
}

// Widens the tiles in an unfinished last row so the grid never ends with an empty gap.
function getColumnClasses(index, totalTiles) {
    let classes = 'col-12';

    const isLastOfOddCount = totalTiles % 2 === 1 && index === totalTiles - 1;
    classes += isLastOfOddCount ? ' col-md-12' : ' col-md-6';

    const tilesInLastRow = totalTiles % 3;
    const isInLastRow = tilesInLastRow > 0 && index >= totalTiles - tilesInLastRow;
    if (!isInLastRow) {
        classes += ' col-lg-4';
    } else if (tilesInLastRow === 2) {
        classes += ' col-lg-6';
    } else {
        classes += ' col-lg-12';
    }

    return classes;
}

function renderTile(tile, index, tiles) {
    const idAttribute = tile.id ? `id="${tile.id}"` : '';
    // External links open in a new tab; tiles without a url stay on the page.
    const linkAttributes = tile.url
        ? `href="${tile.url}" target="_blank" rel="noopener noreferrer"`
        : 'href="#"';

    return `
        <div class="${getColumnClasses(index, tiles.length)}">
            <a ${idAttribute} ${linkAttributes} class="tile ${tile.imageClass} d-flex flex-column justify-content-center p-5 text-decoration-none">
                <h3 class="fs-4">${tile.title}</h3>
                <p class="mb-0">${tile.description}</p>
            </a>
        </div>
    `;
}

function renderTiles(tiles) {
    return `
        <section id="portfolio" class="row g-0">
            ${tiles.map(renderTile).join('')}
        </section>
    `;
}

function renderAboutPanel(about) {
    const paragraphs = about.paragraphs.map(paragraph => `<p>${paragraph}</p>`).join('');

    return `
        <section id="about-panel" class="about-panel d-none px-5 py-5" aria-hidden="true">
            <h3>About Me</h3>
            ${paragraphs}
            <p class="verse fst-italic">
                ${about.verseReference}<br>
                ${about.verseText}
            </p>
            <a href="${about.resumeUrl}" class="btn btn-crimson btn-lg text-uppercase fw-semibold px-4 py-3 mt-2" target="_blank" rel="noopener noreferrer">Open Resume</a>
        </section>
    `;
}

function renderFooter(contact) {
    const year = new Date().getFullYear();

    return `
        <footer id="contact" class="site-footer text-center px-5 py-5">
            <h3>Let's Connect</h3>
            <p>Feel free to reach out via email, phone, or LinkedIn!</p>
            <a href="mailto:${contact.email}" class="btn btn-crimson text-uppercase fw-semibold mb-3">Email Me</a>
            <p class="mb-4">${contact.phone} | <a href="${contact.linkedInUrl}" class="link-light" target="_blank" rel="noopener noreferrer">LinkedIn</a></p>
            <p class="small text-secondary">&copy; ${year} ${portfolioContent.name}. Built from scratch.</p>
        </footer>
    `;
}

function renderPage() {
    const app = document.getElementById('app');

    app.innerHTML =
        renderHeader() +
        renderHero(portfolioContent) +
        renderTiles(portfolioContent.tiles) +
        renderAboutPanel(portfolioContent.about) +
        renderFooter(portfolioContent.contact);
}
