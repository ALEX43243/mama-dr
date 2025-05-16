// Сердечки
const heartsContainer = document.querySelector(".hearts");

setInterval(() => {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = 4 + Math.random() * 3 + "s";
  heartsContainer.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 7000);
}, 300);

// Меню и переключение секций
const links = document.querySelectorAll(".navbar a[data-section]");
const sections = document.querySelectorAll(".section");

links.forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();

    // Убираем active у всех ссылок и секций
    links.forEach(l => l.classList.remove("active"));
    sections.forEach(s => s.classList.remove("active"));

    // Добавляем active для текущего
    link.classList.add("active");
    const target = link.getAttribute("data-section");
    const section = document.getElementById(target);
    if (section) {
      section.classList.add("active");
    }
  });
});

// Музыка
const music = document.getElementById("bg-music");
const musicToggle = document.getElementById("music-toggle");

// Начинаем музыку по умолчанию (если браузер позволяет)
music.volume = 0.3;

musicToggle.addEventListener("click", () => {
  if (music.paused) {
    music.play();
    musicToggle.textContent = "Музыка: Вкл";
  } else {
    music.pause();
    musicToggle.textContent = "Музыка: Выкл";
  }
});

// Кнопка "Я тебя люблю"
const loveButton = document.querySelector(".love-button");
if (loveButton) {
  loveButton.addEventListener("click", () => {
    alert("Я тебя очень сильно люблю, мамочка!");
  });
}