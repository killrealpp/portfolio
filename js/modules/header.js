const CONFIG = {
    HEADER_CLASS: ".header",
    SCROLL_HOLD: 5,
    MENU_ITEM: ".menu__item-link",
}

export const headerScroll = () => {
    let lastScroll = 0;
    const header = document.querySelector(`${CONFIG.HEADER_CLASS}`);
  
    if (!header) return;
  
    window.addEventListener("scroll", () => {
      const currentScroll = window.scrollY;
      
      if (Math.abs(currentScroll - lastScroll) < CONFIG.SCROLL_HOLD) {
        return;
      }
      if (currentScroll > lastScroll && currentScroll > header.offsetHeight) {
        header.classList.add("hide");
      } else {
        header.classList.remove("hide");
      }
      lastScroll = currentScroll;
    });
  };

  export const sectionScroll = ()=>{
    const items = document.querySelectorAll(`${CONFIG.MENU_ITEM}`)
    items.forEach((link)=>{
      link.addEventListener("click", e=>{
        e.preventDefault()
        const targetId = link.getAttribute("href")
        const targetBlock = document.querySelector(targetId)
        if(targetBlock){
          const top = targetBlock.getBoundingClientRect().top + window.scrollY
          window.scrollTo({
            top,
            behavior: "smooth"
          })
        }
      })
    })
  }