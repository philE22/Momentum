const onLoginForm = document.querySelector("#login-form")
const onLoginInput = document.querySelector("#login-form input");
const onLoginGreeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
    event.preventDefault(); 
    const username = onLoginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    onLoginForm.classList.add(HIDDEN_CLASSNAME);
    paintGreeting(username);
}

function paintGreeting(username){
    onLoginGreeting.innerText = `Hello ${username}!`;
    onLoginGreeting.classList.remove(HIDDEN_CLASSNAME);
}


const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null){
    onLoginForm.classList.remove(HIDDEN_CLASSNAME);
    onLoginForm.addEventListener("submit", onLoginSubmit);
} else {
    paintGreeting(savedUsername);
}