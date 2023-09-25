// slider effect

const signInBtn = document.getElementById('signIn');
const signUpBtn = document.getElementById('signUp');
const firstform = document.getElementById('form1');
const secondform = document.getElementById('form2');
const container = document.querySelector('.container');

signInBtn.addEventListener('click', () => {
    container.classList.remove('right-panel-active');
})

signUpBtn.addEventListener('click', () => {
    container.classList.add('right-panel-active');
})

// verify password

function authenticate() {
    const password = document.getElementById('pswd').value;
    const confirmPassword = document.getElementById('cnfmpswd').value;

    if (password === confirmPassword && password !== "") {
        window.location = "home.html";
    } else {
        firstform.addEventListener('submit', (e) => e.preventDefault());
        document.getElementById('alert').innerHTML = "Your passwords do not match!";
    }
};
