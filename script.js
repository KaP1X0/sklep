// Theme Switch
const toggleTheme = document.getElementById('toggle-theme');
toggleTheme.addEventListener('change', () => {
    document.body.classList.toggle('light-theme');
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});