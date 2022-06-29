var userNameAdmin = 'admin';
var passwordAdmin = 'admin';

var inputName = document.getElementById('inputName');
var inputPassword = document.getElementById('inputPassword');

var formLogin = document.getElementById('form-login');

if (formLogin.attachEvent) {
    formLogin.attachEvent('submit', onFormSubmit);
} else {
    formLogin.addEventListener('submit', onFormSubmit);
}

function onFormSubmit(e) {
    var userName = inputName.value;
    var password = inputPassword.value;

    if (userName == userNameAdmin && password == passwordAdmin) {
        alert('Đăng nhập thành công');
    } else {
        alert('Sai Mật Khẩu');
    }
}
