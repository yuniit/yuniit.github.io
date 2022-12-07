;(function initTheme() {
    // I prefer dark first
    localStorage.theme = localStorage.getItem('theme') || 'light'
    if (localStorage.theme === 'dark')
        document.documentElement.classList.add('dark')
    else document.documentElement.classList.remove('dark')
})()
