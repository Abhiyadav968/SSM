details = [];

function submit() {
    let name = document.getElementById("name");
    let email = document.getElementById("email");
    let password = document.getElementById("password");

    let data = {
        Name: name.value,
        Email: email.value,
        Password: password.value,
    };

    details.push(data);
    console.log(details);

};

// login-page


