let theme = localStorage.getItem('theme') || 'light';
let mode = document.querySelector('#mode');

const disableDarkmode = () => {
    document.body.classList.remove('darkmode');
    localStorage.setItem('theme', 'light');
}

const enableDarkmode = () => {
    document.body.classList.add('darkmode');
    localStorage.setItem('theme', 'dark');
}

// Set initial theme
if (theme === 'dark') {
    enableDarkmode();
} else {
    disableDarkmode();
}

mode.addEventListener('click', () => {
    theme = localStorage.getItem('theme'); // Update theme based on current setting
    theme === 'dark' ? disableDarkmode() : enableDarkmode();
});
