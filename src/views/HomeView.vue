<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import AOS from 'aos'
// Component
import ThemeToggle from '../components/ThemeToggle.vue'

const showMenu = ref(false)
const visibleNav = ref(true)
const scrollPosition = ref(0)
const myNameRef = ref<HTMLHeadingElement>()
const myName = `YUNIIT*NOU.`
const startFrom = new Date('2018-02-01')
// const mySkills: {
//     name: String
//     value: number
//     setRef: (el: any, index: number) => void
//     ref: HTMLElement | undefined
// }[] = [
//     {
//         name: 'Vue',
//         value: 90,
//         setRef: (el, index) => (mySkills[index].ref = el),
//         ref: undefined,
//     },
//     {
//         name: 'Flutter',
//         value: 40,
//         setRef: (el, index) => (mySkills[index].ref = el),
//         ref: undefined,
//     },
//     {
//         name: 'Meteor',
//         value: 85,
//         setRef: (el, index) => (mySkills[index].ref = el),
//         ref: undefined,
//     },
//     {
//         name: 'MongoDB',
//         value: 70,
//         setRef: (el, index) => (mySkills[index].ref = el),
//         ref: undefined,
//     },
// ]

// Event
const openMail = () => {
    window.open('mailto:yuneath1@gmail.com')
}
const getExpYear = () => {
    const currentDate = new Date()
    return Math.abs(currentDate.getFullYear() - startFrom.getFullYear())
}
const toggleNav = () => {
    showMenu.value = !showMenu.value
}
const onThemeSwitch = () => {
    if (myNameRef.value?.children?.length)
        Array.from(myNameRef.value.children).forEach((el) => {
            ;(el as HTMLElement).click()
        })
}
// Neon Flicker Text
const flickerLetter = (letter: string) => {
    if (letter === '*') return `*`

    return `<span style="animation: ${getFlickerAnimation()}">${letter}</span>`
}
const colorLetter = (letter: string, isSpaceAfter = false) => {
    if (letter === '*') return
    if (isSpaceAfter)
        return `<span class="after:w-[20px] md:after:w-[40px] after:inline-block" style="color: ${getRandomColorLetter()}">${letter}</span>`

    return `<span style="color: ${getRandomColorLetter()}">${letter}</span>`
}
const getFlickerAnimation = () => {
    // // random number between 2 - 4
    // const randomNumber = Math.floor(Math.random() * (4 - 2 + 1)) + 2
    const randomNumber = Math.random() * 3
    return `text-flicker-in-glow ${randomNumber}s linear both`
}
const getRandomColorLetter = () => {
    const lightness = localStorage.theme === 'light' ? '40%' : '85%'
    return `hsla(${Math.random() * 360}, 100%, ${lightness}, 1)`
}
const flickerAndColorText = (text: string) => {
    return text
        .split('')
        .map(flickerLetter)
        .map((el, index, array) => {
            if (array[index + 1] === '*') return colorLetter(el, true)
            return colorLetter(el)
        }, false)
        .join('')
}
const neonGlory = (target: HTMLElement) => {
    if (target.tagName == 'H2') {
        if (target.textContent) {
            target.innerHTML = flickerAndColorText(target.textContent.trim())
            if (target.children && target.children.length) {
                Array.from(target.children).forEach((el) => {
                    el.addEventListener('click', () => {
                        neonGlory(el as HTMLElement)
                    })
                })
            }
        }
    } else if (target.tagName == 'SPAN') {
        if (target.textContent) {
            const childEle = target.children[0] as HTMLElement
            if (childEle.textContent) {
                childEle.style.color = getRandomColorLetter()
                target.style.animation = `none`
                setTimeout(() => {
                    target.style.animation = getFlickerAnimation()
                }, 10)
            }
        }
    }
}

// Scroll
const handleScroll = () => {
    let currentScrollPosition = window.scrollY
    console.log('currentScrollPosition', currentScrollPosition)

    if (currentScrollPosition < scrollPosition.value) {
        visibleNav.value = true
    } else {
        if (scrollPosition.value > 50) visibleNav.value = false
    }

    scrollPosition.value = window.scrollY
}

const scrollToElement = (id: string) => {
    const el = document.getElementById(id)

    if (el) {
        el.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
            inline: 'start',
        })
    }
}

onMounted(() => {
    // Add event listener
    window.addEventListener('scroll', handleScroll)
    // Init neon
    if (myNameRef.value) {
        neonGlory(myNameRef.value)
    }

    // document.addEventListener('aos:in:skill', () => {
    //     mySkills.forEach((el) => {
    //         if (el.ref && el.ref.classList.contains('w-0')) {
    //             el.ref.classList.remove('w-0')
    //             el.ref.style.width = `${el.value}%`
    //         }
    //     })
    // })

    // Init Animate On Scroll Effect
    AOS.init()
})

onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
    <header
        class="fixed top-0 ] w-full flex items-center justify-center bg-skin-background/50 z-10 transition colors transform duration-300 delay-0"
        :class="[
            visibleNav
                ? 'backdrop-blur-md translate-y-0'
                : 'translate-y-[-90px]',
            visibleNav && scrollPosition > 100
                ? 'shadow-[0_4px_25px_-20px_#d1d5db] dark:shadow-[0_4px_25px_-20px_#374151]'
                : '',
        ]"
    >
        <nav
            class="container px-6 py-[24px] md:flex md:justify-between md:items-center"
        >
            <div class="flex items-center justify-between">
                <!-- Mobile menu button -->
                <div @click="toggleNav" class="flex md:hidden">
                    <button
                        type="button"
                        class="text-skin-default hover:text-slate-500 focus:text-slate-500 dark:hover:text-gray-200 dark:focus:text-gray-200 focus:outline-none"
                    >
                        <svg viewBox="0 0 24 24" class="w-6 h-6 fill-current">
                            <path
                                fill-rule="evenodd"
                                d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                            ></path>
                        </svg>
                    </button>
                </div>

                <div class="md:hidden">
                    <button
                        class="py-1 px-2 text-white dark:text-black bg-skin-primary text-base rounded-lg hover:shadow-none focus:outline-none focus:ring-0"
                    >
                        Resume
                    </button>
                </div>
            </div>

            <!-- Mobile Menu open: "block", Menu closed: "hidden" -->
            <ul
                :class="visibleNav && showMenu ? 'flex' : 'hidden'"
                class="flex-col mt-8 space-y-4 md:flex md:space-y-0 md:flex-row md:items-center md:space-x-10 md:mt-0"
            >
                <li
                    @click="scrollToElement('about-me')"
                    class="text-skin-default hover:text-skin-primary cursor-pointer"
                >
                    About
                </li>
                <li
                    @click="scrollToElement('my-skill')"
                    class="text-skin-default hover:text-skin-primary cursor-pointer"
                >
                    My Skill
                </li>
                <li
                    @click="scrollToElement('my-contact')"
                    class="text-skin-default hover:text-skin-primary cursor-pointer"
                >
                    Contact
                </li>
                <li
                    class="hidden md:block text-skin-default hover:text-skin-primary cursor-pointer"
                >
                    <button
                        class="py-1 px-2 text-white dark:text-black bg-skin-primary text-base rounded-lg hover:shadow-none focus:outline-none focus:ring-0"
                    >
                        Resume
                    </button>
                </li>

                <li
                    class="hidden md:block text-skin-default hover:text-skin-primary cursor-pointer"
                >
                    <ThemeToggle @switch="onThemeSwitch" />
                </li>
            </ul>
        </nav>
    </header>

    <div class="container min-h-screen px-6 mx-auto">
        <main class="overflow-hidden transition-[font-size]">
            <div class="h-screen min-h-[650px] flex flex-col justify-center">
                <div>
                    <h1 class="text-skin-primary text-lg mb-5 ml-1">
                        Hi, my name is
                    </h1>
                </div>
                <div>
                    <h2
                        ref="myNameRef"
                        class="neon-text text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold mb-4"
                    >
                        {{ myName }}
                    </h2>
                </div>
                <div>
                    <h2
                        class="text-skin-default text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold"
                    >
                        I build things for the web.
                    </h2>
                </div>
                <div>
                    <p
                        class="text-skin-default text-sm sm:text-base md:text-lg max-w-[570px] mt-6"
                    >
                        I’m a software engineer specializing in building web
                        application. Currently, I’m focused on building
                        accessible, human-centered products.
                    </p>
                </div>
            </div>

            <!-- About Me -->
            <section
                id="about-me"
                data-aos="fade-up"
                data-aos-offset="200"
                data-aos-easing="ease-in-out"
                data-aos-once="true"
                class="min-h-[350px] flex flex-col justify-center my-[100px] scroll-my-[100px]"
            >
                <h2
                    class="text-skin-default relative flex items-center w-full text-2xl font-bold mb-4 whitespace-nowrap before:content-['01.'] before:text-skin-primary before:mr-4"
                >
                    About Me
                </h2>
                <div class="block md:grid grid-cols-[3fr_2fr] gap-5">
                    <div class="flex-1">
                        <p class="text-skin-default text-base mb-4">
                            I'm a Full-Stack Developer on the Internet. I enjoy
                            creating and delivering user-centric applications
                            with the best solutions.
                        </p>

                        <p class="text-skin-default text-base mb-4">
                            Well-organized person, problem solver, and
                            independent employee with high attention to detail.
                            A football fan, outdoor activities, TV series.
                        </p>

                        <p class="text-skin-default text-base mb-4">
                            Always keep my skill Up-to-Date with new
                            technologies because I'm passionate about learning
                            more and genuinely interested in technology.
                        </p>

                        <p class="text-skin-default text-base mb-4">
                            Interested in the entire Web & Mobile application
                            things and working on ambitious projects with
                            positive people.
                        </p>
                    </div>

                    <div class="flex justify-center mt-[50px] md:m-0">
                        <div
                            class="w-[100%] h-[auto] max-w-[250px] max-h-[250px] border-[2px] rounded-[4px] border-skin-primary overflow-hidden"
                        >
                            <img
                                src="/me.jpeg"
                                width="400"
                                height="400"
                                alt="Me"
                                class="object-cover dark:filter dark:grayscale dark:brightness-90 dark:contrast-125 transition-filter duration-300 hover:filter hover:grayscale hover:brightness-90 hover:contrast-125 dark:hover:filter-none"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section
                id="my-skill"
                data-aos-id="skill"
                data-aos="fade-up"
                data-aos-offset="200"
                data-aos-easing="ease-in-out"
                data-aos-once="true"
                class="min-h-[350px] flex flex-col justify-center my-[100px] scroll-my-[100px]"
            >
                <h2
                    class="text-skin-default relative flex items-center w-full text-2xl font-bold mb-4 whitespace-nowrap before:content-['02.'] before:text-skin-primary before:mr-4"
                >
                    Skills & Experience
                </h2>
                <div
                    class="block md:grid grid-cols-[2fr_2fr] md:gap-[50px] lg:gap-[80px]"
                >
                    <div class="flex-1">
                        <p class="text-skin-default text-base mb-4">
                            Since beginning my journey as a web developer nearly
                            {{ getExpYear() }} years ago, I’ve done work from
                            the office (sometimes remote work) and collaborated
                            with talented people to create web application for
                            both business and consumer use.
                        </p>
                        <p class="text-skin-default text-base mb-4">
                            I create successful web applications with
                            responsive, fast, easy to use, and built with best
                            practices. The main area of my expertise is
                            front-end development, HTML, CSS, JS, building small
                            and medium web apps, custom plugins, features,
                            animations.
                        </p>
                    </div>

                    <div
                        class="flex m-[50px_auto_0px] md:m-0 text-skin-default"
                    >
                        <div class="flex-1">
                            <div
                                class="before:content-['▹'] before:text-skin-primary mb-[4px] md:mb-[8px]"
                            >
                                JavaScript (ES6+)
                            </div>
                            <div
                                class="before:content-['▹'] before:text-skin-primary mb-[4px] md:mb-[8px]"
                            >
                                TypeScript
                            </div>
                            <div
                                class="before:content-['▹'] before:text-skin-primary mb-[4px] md:mb-[8px]"
                            >
                                Vue
                            </div>
                            <div
                                class="before:content-['▹'] before:text-skin-primary mb-[4px] md:mb-[8px]"
                            >
                                React
                            </div>
                        </div>
                        <div class="flex-1">
                            <div
                                class="before:content-['▹'] before:text-skin-primary mb-[4px] md:mb-[8px]"
                            >
                                Node.js
                            </div>
                            <div
                                class="before:content-['▹'] before:text-skin-primary mb-[4px] md:mb-[8px]"
                            >
                                Meteor
                            </div>
                            <div
                                class="before:content-['▹'] before:text-skin-primary mb-[4px] md:mb-[8px]"
                            >
                                Mongo DB
                            </div>
                        </div>
                    </div>

                    <!-- My Skills -->
                    <!-- <div class="m-[50px_auto_0px] md:m-0 text-skin-default">
                        <div
                            class="mb-4"
                            v-for="(item, index) in mySkills"
                            :key="index"
                        >
                            <div>
                                <span class="text-base">
                                    {{ item.name }}
                                </span>
                                <div
                                    class="w-full h-[2px] bg-slate-300 dark:bg-slate-500"
                                >
                                    <div
                                        :ref="
                                            (el) =>
                                                item.setRef(
                                                    el,

                                                    index
                                                )
                                        "
                                        class="w-0 h-full bg-skin-primary transition-[width] delay-200 duration-500"
                                    ></div>
                                </div>
                            </div>
                        </div>
                    </div> -->
                </div>
            </section>

            <section
                id="my-contact"
                data-aos-id="skill"
                data-aos="fade-up"
                data-aos-offset="200"
                data-aos-easing="ease-in-out"
                data-aos-once="true"
                class="min-h-[350px] flex flex-col justify-center my-[100px] scroll-my-[100px]"
            >
                <h2
                    class="text-skin-default relative flex items-center w-full text-2xl font-bold mb-4 whitespace-nowrap before:content-['03.'] before:text-skin-primary before:mr-4"
                >
                    Contact Me
                </h2>
                <div class="max-w-[600px] my-4 lg:my-8 mx-auto">
                    <div class="flex-1 text-center">
                        <p class="text-skin-default text-lg mb-4">
                            I’m interested in freelance opportunities –
                            especially ambitious or large projects. However, if
                            you have other request or question, don’t hesitate
                            to email me.
                        </p>

                        <button
                            class="py-2 px-4 text-white dark:text-black bg-skin-primary text-lg rounded-lg hover:shadow-lg focus:outline-none focus:ring-0"
                            @click="openMail"
                        >
                            Say Hello
                        </button>
                    </div>
                </div>
            </section>
        </main>

        <footer
            class="flex flex-col justify-center items-center min-h-[100px] h-auto py-[12px] box-border"
        >
            <div class="w-full max-w-[120px] mb-[18px]">
                <div class="flex flex-nowrap space-0">
                    <div class="flex-1">
                        <a
                            href="https://github.com/yuniit"
                            aria-label="my github profile"
                            target="_blank"
                        >
                            <svg
                                viewBox="0 0 30 30"
                                width="40px"
                                height="40px"
                                class="fill-skin-primary m-auto"
                            >
                                <path
                                    d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"
                                />
                            </svg>
                        </a>
                    </div>
                    <div class="flex-1">
                        <a
                            href="https://www.linkedin.com/in/nou-yuvneath-31402a257"
                            aria-label="my linkedin profile"
                            target="_blank"
                        >
                            <svg
                                viewBox="0 0 30 30"
                                width="40px"
                                height="40px"
                                class="fill-skin-primary m-auto"
                            >
                                <path
                                    d="M15,3C8.373,3,3,8.373,3,15c0,6.627,5.373,12,12,12s12-5.373,12-12C27,8.373,21.627,3,15,3z M10.496,8.403 c0.842,0,1.403,0.561,1.403,1.309c0,0.748-0.561,1.309-1.496,1.309C9.561,11.022,9,10.46,9,9.712C9,8.964,9.561,8.403,10.496,8.403z M12,20H9v-8h3V20z M22,20h-2.824v-4.372c0-1.209-0.753-1.488-1.035-1.488s-1.224,0.186-1.224,1.488c0,0.186,0,4.372,0,4.372H14v-8 h2.918v1.116C17.294,12.465,18.047,12,19.459,12C20.871,12,22,13.116,22,15.628V20z"
                                />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>

            <span
                class="text-gray-500 dark:text-gray-400 hover:text-skin-primary text-center"
            >
                Built by Yuniit Nou
            </span>
        </footer>
    </div>
</template>

<style>
@import '../assets/text-flicker';
</style>
