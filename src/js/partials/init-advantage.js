let advantageBtn = document.querySelector('.advantage-list__btn');
let advantageList = document.querySelector('.advantage-list');

advantageBtn.addEventListener('click', function() {
    advantageList.classList.toggle('show');
});