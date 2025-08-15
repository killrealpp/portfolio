const CONFIG = {
  BTN_CLASS: ".theme__btn",
  CLASS_LIGHT: "light-theme",
};

export const themeMod = () => {
  const btn = document.querySelector(`${CONFIG.BTN_CLASS}`);

  if (!btn) return; // ПРОВЕРЯЙ НА ТО ЧТО ПЕРЕМЕННАЯ СУЩЕСТУЕТ
  // НАПИШИ ЛОГИКУ ЧТОБЫ ТЕМА СОХРАНЯЛАСЬ В LOCALSTORAGE, А ТО ПОСЛЕ ТОГО КАК ОБНОВЛЯЕШЬ СТРАНИЦУ У ТЕБЯ ТЕМА ЧЕРНАЯ, ХОТЯ ТЫ ПЕРЕКЛЮЧИЛ НА БЕЛУЮ

  // УБЕРИ В БЛОКАХ PADDING ЗАДАЙ ЛИБО MARGINBOTTON или GAP. И тогда скролл к блоку напиши на js

  btn.addEventListener("click", () => {
    document.body.classList.toggle(`${CONFIG.CLASS_LIGHT}`);
  });
};
