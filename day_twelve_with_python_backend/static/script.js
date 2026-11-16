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
            console.log(data.result)
            message.style.color = "rgb(0, 191, 0)"
            message.textContent = data.result["message"]
        }
        else {
            console.log(data.result)
            message.style.color = "red"
            const msg = Array.isArray(data.result["message"]) ? data.result["message"][0] : data.result["message"];
            message.textContent = `${msg} ${data.result["token"]}`;
        }
    })

    .catch(error => {
        console.error("Error: ", error)
        message.textContent = "Something went wrong."
    })
})