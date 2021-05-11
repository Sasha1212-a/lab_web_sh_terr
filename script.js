let active = false;
document.querySelector('.header__burger').onclick = () => {
    if (active) {
        document.querySelector('.header__burger').classList.remove('active');
        document.querySelector('.header__menu').classList.remove('active');
        active = false;
    } else {
        document.querySelector('.header__burger').classList.add('active');
        document.querySelector('.header__menu').classList.add('active')
        active = true;
    }
}

if (document.querySelector('#submit-button')) {
    document.querySelector('#submit-button').onclick = () => {
        event.preventDefault();
        setTimeout(() => {
            alert('Повідомлення успішно надіслано! Дякуємо!');
        }, 500);
    }
}