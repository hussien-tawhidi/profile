const bargerMenu = document.querySelector(".barger-menu")
const Menu = document.querySelector(".descktop-menu ")
let openMenu = false
bargerMenu.addEventListener("click", () => {
    if (!openMenu) {
        bargerMenu.classList.add("closeMenu")
        Menu.classList.remove("closeMainMenu")
        openMenu = true
    } else {
        bargerMenu.classList.remove("closeMenu")
        Menu.classList.add("closeMainMenu")
        openMenu = false
    }
})

// home section about me
const aboutMe = document.querySelector(".aboutMe")
let mouse = false
aboutMe.addEventListener("mouseleave", () => {
    if (!mouse) {
        aboutMe.classList.add("leaveMe")
        mouse = true
    } else {
        aboutMe.classList.remove("leaveMe")
        mouse = false
    }
})

// home text animation
const txts = document.querySelector(".slide-text").children
const textLength = txts.length
let index = 0
const intTimer = 3000
const outTimer = 2800

function animateText() {
    for (let i = 0; i < textLength; i++) {
        txts[i].classList.remove("text-in", "text-out")
    }
    txts[index].classList.add("text-in")

    setTimeout(function() {
        txts[index].classList.add("texts-out")
    }, outTimer)

    setTimeout(function() {
        if (index == textLength - 1) {
            index = 0
        } else {
            index++
        }
        animateText()
    }, intTimer)
}

window.onload = animateText()

const gmail = document.querySelector(".gmail")
let gmailOpen = false
gmail.addEventListener("mouseleave", () => {
    if (!gmailOpen) {
        gmail.classList.add("gmailOver")
        gmailOpen = true
    } else {
        gmail.classList.remove("gmailOver")
        gmailOpen = false
    }
})

// what people says (slider)
const textNextBtn = document.querySelector(".arrow-right a")
const textPrevBtn = document.querySelector(".arrow-left a")
const textSlider = document.querySelectorAll(".testimonial-text-slider")
const interValTime = 5000
const auto = true
let sliderInterVall;

const next = () => {
    const textShow = document.querySelector(".show-text")
    textShow.classList.remove("show-text")

    if (textShow.nextElementSibling) {
        textShow.nextElementSibling.classList.add("show-text")
    } else {
        textSlider[0].classList.add("show-text")
    }
    setTimeout(() => textShow.classList.remove("show-text"))
}

textNextBtn.addEventListener("click", () => {
    next()
    if (auto) {
        clearInterval(sliderInterVall)
        sliderInterVall = setInterval(next, interValTime)
    }
})

const prev = () => {
    const textShow = document.querySelector(".show-text")
    textShow.classList.remove("show-text")

    if (textShow.nextElementSibling) {
        textShow.nextElementSibling.classList.add("show-text")
    } else {
        textSlider[0].classList.add("show-text")
    }
    setTimeout(() => textShow.classList.remove("show-text"))
}

textPrevBtn.addEventListener("click", () => {
    prev()
    if (auto) {
        clearInterval(sliderInterVall)
        sliderInterVall = setInterval(next, interValTime)
    }
})
if (auto) {
    clearInterval(sliderInterVall)
    sliderInterVall = setInterval(next, interValTime)
}

//scroll  window events
let headerOnScroll = document.querySelector(".header")
let prevScrollPages = window.scrollY
window.onscroll = function() {
    let currentScrollPos = window.scrollY
    if (prevScrollPages > currentScrollPos) {
        headerOnScroll.style.top = "0"
    } else {
        headerOnScroll.style.top = "-100px"
    }
    prevScrollPages = currentScrollPos

}

// cursor

let innerCursor = document.querySelector(".inner-cursor")
let outerCursor = document.querySelector(".outer-cursor")

document.addEventListener("mousemove", moverCursor)

function moverCursor(e) {
    let x = e.clientX;
    let y = e.clientY;

    innerCursor.style.left = `${x}px`;
    innerCursor.style.top = `${y}px`;
    outerCursor.style.left = `${x}px`;
    outerCursor.style.top = `${y}px`;
}
let menuLinks = Array.from(document.querySelectorAll(".nav a"))
menuLinks.forEach((links) => {
    links.addEventListener("mousemove", () => {
        innerCursor.classList.add("grow")
    })
    links.addEventListener("mouseleave", () => {
        innerCursor.classList.remove("grow")
    })
})