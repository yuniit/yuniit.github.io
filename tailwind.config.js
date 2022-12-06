/** @type {import('tailwindcss').Config} */
const withOpacity = (variableName) => {
    return ({ opacityValue }) => {
        if (opacityValue !== undefined) {
            return `rgba(var(${variableName}), ${opacityValue})`
        }
        return `rgb(var(${variableName}))`
    }
}

module.exports = {
    content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                skin: {
                    background: withOpacity('--background'),
                    primary: 'var(--primary-color)',
                    default: 'var(--default-color)',
                },
            },
        },
    },
    plugins: [],
    darkMode: 'class',
}
