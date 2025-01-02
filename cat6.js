// Получаем все кнопки "Заказать"
const orderButtons = document.querySelectorAll('.products-item-extra .button.violet-button');

// Получаем элемент секции "Закажите печенье"
const orderSection = document.getElementById('order');

// Добавляем обработчик события для каждой кнопки
orderButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Прокручиваем страницу к секции "Закажите печенье"
        orderSection.scrollIntoView({ behavior: 'smooth' });
    });
});