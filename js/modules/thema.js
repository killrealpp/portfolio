const CONFIG = {
  BTN_CLASS: ".theme__btn",
  LOGO_IMG: ".logo__img",
  CLASS_LIGHT: "light-theme",
};

export const themeMod = () => {
  const btn = document.querySelector(`${CONFIG.BTN_CLASS}`);
  const logo = document.querySelector(`${CONFIG.LOGO_IMG}`)
  if (!btn) return; 
  const savedTheme = localStorage.getItem("theme")
  if (savedTheme === "light"){
    document.body.classList.add(CONFIG.CLASS_LIGHT)
    if (logo) logo.src = "./img/logo2.svg"
  }else{
    document.body.classList.remove(CONFIG.CLASS_LIGHT);
    if (logo) logo.src = "./img/logo1.svg";
  }

  btn.addEventListener("click", () => {
    document.body.classList.toggle(`${CONFIG.CLASS_LIGHT}`);
    if(document.body.classList.contains(CONFIG.CLASS_LIGHT)){
      localStorage.setItem("theme", "light")
      if (logo) logo.src = "./img/logo2.svg"
    } else{
      localStorage.setItem("theme", "dark");
      if (logo) logo.src = "./img/logo1.svg";
    }
  });
};
