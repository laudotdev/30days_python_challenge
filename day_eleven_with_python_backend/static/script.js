const username = document.getElementById("username");
const password = document.getElementById("password");
const loginButton = document.getElementById("loginButton");
const message = document.getElementById("message");

loginButton.addEventListener('click', function() {
    let usernameVal = username.value;
    let passwordVal = password.value;

    fetch('/api/login', {
        method: "POST",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify({
            username: usernameVal,
            password: passwordVal
        })

    })

    .then(response => response.json())
    .then(data => {
        if(data["status"] === true) {
            message.style.color = "rgb(0, 191, 0)"
            message.textContent = data.result
        }
        else {
            message.style.color = "red"
            message.textContent = data.result
        }
    })

    .catch(error => {
        console.error("Error: ", error)
        message.textContent = "Something went wrong."
    })
})