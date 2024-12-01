const menuItems = document.querySelectorAll('.alternative__header__lits li');
const highlight = document.querySelector('.highlight');

menuItems.forEach(item => {
  item.addEventListener('mouseenter', () => {
    const { offsetLeft, offsetWidth } = item;
    highlight.style.left = `${offsetLeft}px`; // Устанавливаем позицию плашки
    highlight.style.width = `${offsetWidth}px`; // Устанавливаем ширину плашки
  });

  // Установка плашки при клике
  item.addEventListener('click', () => {
    menuItems.forEach(i => i.classList.remove('active'));
    item.classList.add('active');

    const { offsetLeft, offsetWidth } = item;
    highlight.style.left = `${offsetLeft}px`; // Позиция плашки под активным пунктом
    highlight.style.width = `${offsetWidth}px`; // Ширина плашки под активным пунктом
  });
});

// Скрытие плашки при клике вне меню
document.addEventListener('click', (event) => {
  if (!event.target.closest('.alternative__header__menu')) {
    highlight.style.width = '0'; // Скрыть плашку при клике вне меню
    menuItems.forEach(i => i.classList.remove('active')); // Удалить активный класс
  }
});
