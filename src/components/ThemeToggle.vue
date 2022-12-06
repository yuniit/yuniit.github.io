<script setup lang="ts">
const emit = defineEmits(['switch'])
const switchTheme = () => {
    // Add transition for background & color
    document
        .getElementById('app')
        ?.classList.add('transition-colors', 'duration-300')

    document.documentElement.classList.toggle('dark')
    localStorage.theme = localStorage.theme === 'dark' ? 'light' : 'dark'

    document
        .querySelector('#theme-toggle')
        ?.setAttribute('aria-label', localStorage.theme)

    // call switch on parent
    emit('switch')
}
</script>

<template>
    <button
        id="theme-toggle"
        title="Toggles light & dark"
        alt="Toggles light & dark"
        aria-label="auto"
        aria-live="polite"
        class="theme-toggle"
        @click="switchTheme"
    >
        <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            class="sun-and-moon w-[24px] h-[24px]"
        >
            <mask class="moon" id="moon-mask">
                <rect x="0" y="0" width="100%" height="100%" fill="white" />
                <circle cx="24" cy="10" r="6" fill="black" />
            </mask>
            <circle
                class="sun"
                cx="12"
                cy="12"
                r="6"
                mask="url(#moon-mask)"
                fill="currentColor"
            />
            <g class="sun-beams" stroke="currentColor">
                <line x1="12" y1="1" x2="12" y2="3" />
                <line x1="12" y1="21" x2="12" y2="23" />
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                <line x1="1" y1="12" x2="3" y2="12" />
                <line x1="21" y1="12" x2="23" y2="12" />
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
            </g>
        </svg>
    </button>
</template>

<style>
@import '../assets/theme-toggle.css';
</style>
