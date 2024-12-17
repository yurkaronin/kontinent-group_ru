// техническая часть - УДАЛИТЬ НА ПРОДАКШЕНЕ!
// получить в консоли элемент, по которому кликнули
document.addEventListener("click", (e) => console.log(e.target));


// .js-sub-nav-show
document.addEventListener("DOMContentLoaded", function () {

  // Слушаем событие клика внутри элементов с классом .js-sub-nav-show
  document.querySelectorAll('.js-sub-nav-show').forEach((el) => {
    el.addEventListener('click', function(event) {
      event.preventDefault(); // Отменяем переход по ссылке

      // Добавляем или удаляем активный класс .isActive для элемента .mob-menu__link
      const link = event.target.closest('.mob-menu__link');
      if (link) {
        link.classList.toggle('isActive');

        // Добавляем или удаляем активный класс .isActive для родительского элемента .js-sub-nav-show
        const parent = link.closest('.js-sub-nav-show');
        if (parent) {
          parent.classList.toggle('isActive');
        }
      }
    });
  });

});


