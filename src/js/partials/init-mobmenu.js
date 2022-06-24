let btn = document.querySelector('.btn-menu');
let menu = document.querySelector('.header__box');

btn.addEventListener('click', function() {
    btn.classList.toggle('btn-menu--open');
    menu.classList.toggle('show');
});


//close mob menu on resize
function closeResizeMobMenu () {
    let screenWidth = document.documentElement.clientWidth;

    if(screenWidth > 992) {
        btn.classList.remove('btn-menu--open');
        menu.classList.remove('show');
    }

    // let positionTop = (window.pageYOffset)
}

window.addEventListener('resize', function() {
    closeResizeMobMenu ();
}, true);


//close menu on click to outside blocks
document.addEventListener('click', function(e) {
    if(!btn.contains(e.target)) {
        if(menu.classList.contains('show')) {
            menu.classList.remove('show');
            btn.classList.remove('btn-menu--open');
        } else {
            btn.classList.remove('btn-menu--open');
        }
    }
});