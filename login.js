typs = [];

function login() {
    let lname = document.getElementById("lname");
    let lpassword = document.getElementById("lpassword");

    let typein = {
        Name: lname.value,
        lpassword: lpassword.value,
    };

    typs.push(typein)
    console.log(typs);
};