// Wires up user interactions after the page has been rendered.

function setupAboutToggle() {
    const aboutTile = document.getElementById('aboutTile');
    const aboutPanel = document.getElementById('about-panel');

    aboutTile.addEventListener('click', event => {
        event.preventDefault();
        const isOpen = !aboutPanel.classList.toggle('d-none');
        aboutPanel.setAttribute('aria-hidden', String(!isOpen));

        if (isOpen) {
            aboutPanel.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
}
