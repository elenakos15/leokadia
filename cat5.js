// Получаем кнопку "Заказать"
const orderButton = document.querySelector('.main-action .button');

// Получаем секцию "Закажите печенье"
const orderSection = document.getElementById('order');

// Добавляем обработчик события на кнопку
orderButton.addEventListener('click', () => {
    // Прокручиваем страницу к секции "Закажите печенье"
    orderSection.scrollIntoView({ behavior: 'smooth' });
});