function headerScroll() {
    let lastScroll = 0
    const header = document.querySelector('.header')
    const scrollHold = 5

    window.addEventListener('scroll', () => {
        const currentScroll = window.scrollY
        if (Math.abs(currentScroll - lastScroll) < scrollHold) {
            return
        }
        if (currentScroll > lastScroll && currentScroll > header.offsetHeight) {
            header.classList.add('hide')
        } else {
            header.classList.remove('hide')
        }
        lastScroll = currentScroll
    })
}

// function themeMod(){
//     const btn = document.querySelector('.theme__btn')
//     btn.addEventListener('click', ()=>{
//         document.body.classList.toggle('light')
//     })
// }




headerScroll()
// themeMod()