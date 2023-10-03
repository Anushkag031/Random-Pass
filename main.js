const passwordBox = document.getElementById("Password");
const length = 12;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symb = "!@#$%^&*()_+-|\{]}></";

const allchar = upperCase + lowerCase + number + symb;

function createPassword() {
    let Password = "";
    Password += upperCase[Math.floor(Math.random() * upperCase.length)];
    Password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    Password += number[Math.floor(Math.random() * number.length)];
    Password += symb[Math.floor(Math.random() * symb.length)];
    
    while (length > Password.length)
    {
        Password += allchar[Math.floor(Math.random() * allchar.length)];
    }
    passwordBox.value = Password;

}
function copyPassword() {
    passwordBox.select();
    document.execCommand("copy");

}
