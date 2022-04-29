const header = document.querySelector('header');
const openBtn = document.getElementById('openBtn');
const closeBtn = document.getElementById('closeBtn');

openBtn.addEventListener('click', () => {
    header.classList.add('open');
})

closeBtn.addEventListener('click', () => {
    header.classList.remove('open');
})

