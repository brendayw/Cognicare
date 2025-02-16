/*inicio*/
const container = document.querySelector('.container');
const singupBtn = document.querySelector('.singup-btn');
const singinBtn = document.querySelector('.singin-btn');

singupBtn.addEventListener('click', () => {
    container.classList.add('active');
})

singinBtn.addEventListener('click', () => {
    container.classList.remove('active');
})
