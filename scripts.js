function setActiveNav() {
    const current = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-link').forEach(link => {
        const href = link.getAttribute('href');
        const isActive = href === current || (current === '' && href === 'index.html');
        link.classList.toggle('active-nav', isActive);
    });
}

function initHeroEffect() {
    const heroElement = document.getElementById('hero-text');
    if (!heroElement) {
        return;
    }

    const originalHTML = heroElement.innerHTML;
    const textToDecode = heroElement.innerText.replace(/\n/g, ' ');
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&*';
    let iterations = 0;

    const interval = setInterval(() => {
        heroElement.innerText = textToDecode.split('').map((letter, index) => {
            if (index < iterations) {
                return textToDecode[index];
            }
            return characters[Math.floor(Math.random() * characters.length)];
        }).join('');

        heroElement.style.color = '#0a6e00';

        if (iterations >= textToDecode.length) {
            clearInterval(interval);
            heroElement.innerHTML = originalHTML;
            heroElement.style.color = '#1A1D24';
        }

        iterations += 1 / 3;
    }, 30);
}

document.addEventListener('DOMContentLoaded', () => {
    setActiveNav();
    initHeroEffect();
});
