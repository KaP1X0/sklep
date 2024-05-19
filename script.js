document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
const toggleBtn = document.querySelector('.toggle-btn');
const nav = document.querySelector('nav');

toggleBtn.addEventListener('click', () => {
    nav.classList.toggle('active');
});
const heroText = document.querySelector('.hero h2');

setInterval(() => {
    heroText.classList.toggle('animate-text');
}, 2000);
document.querySelectorAll('.btn, .card').forEach(item => {
    item.addEventListener('mouseenter', () => {
        item.classList.add('animate-hover');
    });

    item.addEventListener('mouseleave', () => {
        item.classList.remove('animate-hover');
    });
});
