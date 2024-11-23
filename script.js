const box = document.querySelector('.box'),  // Получаем элемент с классом .box
    btn = document.querySelector('button'); // Получаем кнопку на странице


/* const width = box.clientWidth;  // Получаем ширину элемента (включая padding, но без полос прокрутки)
const height = box.clientHeight;  // Получаем высоту элемента (включая padding, но без полос прокрутки) */


/* const width = box.offsetWidth;  // Получаем полную ширину элемента (включая padding, border, но без прокрутки)
const height = box.offsetHeight;  // Получаем полную высоту элемента (включая padding, border, но без прокрутки) */



const width = box.scrollWidth;  // Получаем ширину содержимого элемента, включая прокручиваемую часть
const height = box.scrollHeight;  // Получаем высоту содержимого элемента, включая прокручиваемую часть

console.log(width, height);  // Выводим ширину и высоту содержимого элемента в консоль

btn.addEventListener('click', () => {  // Добавляем обработчик на клик по кнопке
    box.style.height = box.scrollHeight + 'px';  // Устанавливаем высоту элемента равной его полной прокручиваемой высоте
    /* console.log(box.scrollTop);  // Выводим текущую позицию прокрутки по вертикали внутри элемента */
});


console.log(box.getBoundingClientRect().top);  // Выводим расстояние от верхней границы элемента до верхней границы окна

const style = window.getComputedStyle(box);  // Получаем объект с текущими стилями элемента

console.log(style.display);  // Выводим текущий стиль display элемента (например, block, inline)



console.log(document.documentElement.scrollTop)  // Выводим количество пикселей, на которое прокручен весь документ

window.scrollTo(0, 400)  // Прокручивает страницу до указанной позиции (по оси Y на 400 пикселей)
window.scrollBy(0, 400)  // Прокручивает страницу на указанное количество пикселей относительно текущей позиции (по оси Y на 400 пикселей)
