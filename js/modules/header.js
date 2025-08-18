const CONFIG = {
  HEADER_CLASS: ".header",
  SCROLL_HOLD: 5,
  MENU_ITEM: ".menu__item-link",
  BURGER_BTN: ".burger",
  MENU: ".menu"
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

export const sectionScroll = () => {
  const items = document.querySelectorAll(`${CONFIG.MENU_ITEM}`)
  items.forEach((link) => {
    link.addEventListener("click", e => {
      e.preventDefault()
      const targetId = link.getAttribute("href")
      const targetBlock = document.querySelector(targetId)
      if (targetBlock) {
        const top = targetBlock.getBoundingClientRect().top + window.scrollY
        window.scrollTo({
          top,
          behavior: "smooth"
        })
      }
    })
  })
}
export const openMenu = ()=>{
  const btn = document.querySelector(`${CONFIG.BURGER_BTN}`)
  const menu = document.querySelector(`${CONFIG.MENU}`)
  const menuItems = document.querySelectorAll(`${CONFIG.MENU_ITEM}`)
  if (!btn || !menu) return

  btn.addEventListener('click', ()=>{
    menu.classList.toggle('open')
    btn.classList.toggle('active')
  })
  if (menuItems){
    menuItems.forEach((item)=>{
      item.addEventListener('click', ()=>{
        menu.classList.remove("open");
        btn.classList.remove("active");
      })
    })
  }
  document.addEventListener('click', (e)=>{
    const isClickInside = menu.contains(e.target) || btn.contains(e.target)
     if (!isClickInside && menu.classList.contains("open")) {
      menu.classList.remove("open");
      btn.classList.remove("active");
    }
  })
}