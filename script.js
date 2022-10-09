const contents = document.querySelectorAll('.content');
const lis = document.querySelectorAll('nav ul li');

lis.forEach((li, i) => {
    li.addEventListener('click', () => {
        lis.forEach(li => li.classList.remove('active'));
        contents.forEach(content => content.classList.remove('show'));
        li.classList.add('active');
        contents[i].classList.add('show');
    })
})