let lastScroll = 0
const header = document.querySelector('.header')
const scrollHold = 5

window.addEventListener('scroll', () => {
    const currentScroll = window.scrollY
    if (Math.abs(currentScroll - lastScroll) < scrollHold) {
    }
    if (currentScroll > lastScroll && currentScroll > header.offsetHeight) {
        header.classList.add('hide')
    } else {
        header.classList.remove('hide')
    }
    lastScroll = currentScroll
})
