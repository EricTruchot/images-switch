let img = document.querySelector('img');
let btn1 = document.querySelector('#btn1');
let btn2 = document.querySelector('#btn2');
let btn3 = document.querySelector('#btn3');
let btn4 = document.querySelector('#btn4');
let btn5 = document.querySelector('#btn5');

btn1.addEventListener('click', () => {
    img.src = 'images/1Cole_Thomas_The_Course_of_Empire_The_Savage_State_1836.jpg'
})
btn2.addEventListener('click', () => {
    img.src = 'images/2Cole_Thomas_The_Course_of_Empire_The_Arcadian_or_Pastoral_State_1836.jpg';
})
btn3.addEventListener('click', () => {
    img.src = 'images/3Cole_Thomas_The_Consummation_The_Course_of_the_Empire_1836.jpg';
})
btn4.addEventListener('click', () => {
    img.src = 'images/4Cole_Thomas_The_Course_of_Empire_Destruction_1836.jpg';
})
btn5.addEventListener('click', () => {
    img.src = 'images/5Cole_Thomas_The_Course_of_Empire_Desolation_1836.jpg';
})