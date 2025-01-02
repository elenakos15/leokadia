document.addEventListener('DOMContentLoaded', function() {
    const menuItems = document.querySelectorAll('.menu-item a[href="#"]');

    menuItems.forEach(item => {
        item.addEventListener('click', function(event) {
            event.preventDefault(); // Отменяем стандартное поведение ссылки

            let targetId;
            switch (this.textContent) {
                case 'Каталог':
                    targetId = '.products'; // Селектор для "Выберите печенье"
                    break;
                case 'О нас':
                    targetId = '.love'; // Селектор для "Пекарня с любовью"
                    break;
                case 'Оформление заказа':
                    targetId = '.order'; // Селектор для "Закажите печенье"
                    break;
            }
            if (targetId) {
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({ behavior: 'smooth' }); // Плавный скроллинг
                }
            }
        });
    });
});