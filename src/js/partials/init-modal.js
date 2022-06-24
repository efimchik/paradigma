let activateModalBtn = document.querySelector('.contacts__order');
let overlay = document.querySelector('.modal__overlay');
let modalHideBtn = document.querySelector('.modal__close');
let modalWin = document.querySelector('.modal');
let modalDialog = document.querySelector('.modal__dialog');

let policyField = document.querySelector('#policy');
let phoneField = document.querySelector('#phone');
let btnSubmit = document.querySelector('.modal .btn');
let message = document.querySelector('.modal__message');




//show modal function
function modalShow() {
    overlay.classList.add('show');
}

//hide modal function
function modalHide(event) {
    let target = event.target;

    if(!modalWin.contains(target) || modalHideBtn.contains(target)) {
        overlay.classList.remove('show');
        modalDialog.classList.remove('hide');
        message.classList.add('hide');
    }
}

//on click show modal
if(activateModalBtn) {
    activateModalBtn.addEventListener('click', function() {
        modalShow();
    });
}


//on click hide modal
if(modalHideBtn) {
    modalHideBtn.addEventListener('click', function() {
        modalHide(event);
    });
}


// hide modal inside on click
if(overlay) {
    overlay.addEventListener('click', function() {
        modalHide(event);
    });
}


policyField.addEventListener('click', function() {

    if(policyField.checked) {
        btnSubmit.classList.remove('disabled');
    } else {
        btnSubmit.classList.add('disabled');
    }
});

btnSubmit.addEventListener('click', function() {
    if(phoneField.value !== '') {
        modalDialog.classList.add('hide');
        message.classList.remove('hide');
    } else {
        phoneField.focus();
    }
});