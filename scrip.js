const themeToggle = document.getElementById('themeToggle');
const fontSelector = document.getElementById('fontSelector');

// Toggle dark/light theme
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark');
});

// Change font
fontSelector.addEventListener('change', (event) => {
    document.body.style.fontFamily = event.target.value;
});