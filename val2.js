// Получаем элементы формы
const orderForm = document.querySelector('.order-form');
const cookieInput = orderForm.querySelector('input[placeholder="Выберите печенье"]');
const nameInput = orderForm.querySelector('input[placeholder="Ваше имя"]');
const phoneInput = orderForm.querySelector('input[placeholder="Ваш телефон"]');
const submitButton = orderForm.querySelector('.button.violet-button');

// Добавляем обработчик события на кнопку "Оформить заказ"
submitButton.addEventListener('click', function(event) {
    event.preventDefault(); // Предотвращаем отправку формы

    // Проверяем, заполнены ли все поля
    if (!cookieInput.value.trim()) {
        alert('Пожалуйста, выберите печенье.');
        return;
    }
    if (!nameInput.value.trim()) {
        alert('Пожалуйста, введите Ваше имя.');
        return;
    }
    if (!phoneInput.value.trim()) {
        alert('Пожалуйста, введите Ваш телефон.');
        return;
    }

    // Если все поля заполнены, можно отправить форму или выполнить другие действия
    alert('Форма успешно отправлена!');
    // Здесь можно добавить код для отправки формы, если это необходимо
});
