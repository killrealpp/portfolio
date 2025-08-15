const CONFIG = {
    HEADER_CLASS: ".header",
    SCROLL_HOLD: 5,
}

export const headerScroll = () => {
    let lastScroll = 0;
    const header = document.querySelector(`${CONFIG.HEADER_CLASS}`);
  
    if (!header) return; // ПРОВЕРЯЙ НА ТО ЧТО ПЕРЕМЕННАЯ СУЩЕСТУЕТ
  
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