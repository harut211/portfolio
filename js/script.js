const navLinks = document.querySelectorAll('nav a');

// Обходим каждую ссылку и добавляем обработчик события для плавной прокрутки
navLinks.forEach(link => {
    link.addEventListener('click', smoothScroll);
});

function smoothScroll(event) {
    event.preventDefault();

    const targetId = event.currentTarget.getAttribute('href').substring(1); // Удаляем # из атрибута href
    const targetElement = document.getElementById(targetId);
    const offsetTop = targetElement.offsetTop;

    window.scrollTo({
        top: offsetTop,
        behavior: 'smooth' // Плавная прокрутка
    });
}