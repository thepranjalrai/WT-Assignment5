const _form = document.getElementById("reg-form");
const _email = document.getElementById("email");
const _name = document.getElementById("name");
const _phone = document.getElementById("phone");
const _occ = document.getElementById("occupation");
const _notif = document.getElementById("notif");

const SUBMIT_URL = "https://wt-php-database.000webhostapp.com/api/ass5/create.php";

const areValid = {
    email: false,
    name: false,
    phone: false
}

const dangerify = elem => {
    elem.classList.remove("border-success");
    elem.classList.add("border-danger");
}

const successify = elem => {
    elem.classList.add("border-success");
    elem.classList.remove("border-danger");
}

_email.addEventListener('input', _ => {
    if (/^[a-zA-z0-9\.]+@[a-zA-z0-9\.]+\.\w+$/i.test(_email.value)) {
        successify(_email);
        areValid.email = true;
    } else {
        dangerify(_email);
        areValid.email = false;
    }
});

_name.addEventListener('input', _ => {
    if (/^\w+ \w+$/i.test(_name.value)) {
        successify(_name);
        areValid.name = true;
    } else {
        dangerify(_name);
        areValid.name = false;
    }
});

_phone.addEventListener('input', _ => {
    if (/^\d{3}-?\d{3}-?\d{4}$/.test(_phone.value)) {
        successify(_phone);
        areValid.phone = true;
    } else {
        dangerify(_phone);
        areValid.phone = false;
    }
});

_form.addEventListener('submit', e => {
    e.preventDefault();

    if (!Object.values(areValid).every(v => v)) {
        _notif.innerHTML = "Please fill correct information in all fields.";
        _notif.classList.remove('alert-success');
        _notif.classList.add('alert-danger');
        return;
    };

    const name = _name.value.split(/ +/);
    const email = _email.value;
    const phone = _phone.value;
    const occup = _occ.value;

    const xhr = new XMLHttpRequest();
    xhr.open("POST", SUBMIT_URL);
    xhr.setRequestHeader("Content-type", "application/x-www-_form-urlencoded");
    xhr.onload = function() {
        _notif.innerHTML = "Registered Successfully";
        _notif.classList.add("alert-success");
        _notif.classList.remove('alert-danger');
    }

    xhr.send(`email=${email}&fname=${name[0]}&lname=${name[1]}&phone=${phone}&occup=${occup}`);

    _email.value = '';
    _phone.value = '';
    _name.value = '';
});