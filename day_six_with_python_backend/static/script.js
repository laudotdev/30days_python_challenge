const nameUser = document.getElementById('name')
const score = document.getElementById('score');
const submitButton = document.getElementById('submitButton');
const message = document.getElementById('message');

submitButton.addEventListener('click', function() {
    
    const scoreVal = score.value;
    const nameVal = nameUser.value;

    if(scoreVal.trim() === "") {
        message.style.color = 'red';
        message.textContent = "Please enter your score";
        return;
    }
    if(nameVal.trim() === "") {
        message.style.color = "red";
        message.textContent = "Please enter your name";
        return;
    }

    fetch("/api/logic", {
        method: 'POST',

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify({
            score: scoreVal,
            name: nameVal
        })
    })

    .then(response => response.json())
    .then(data => {
        message.textContent = data.result_name;
        if(scoreVal >= 0 && scoreVal <= 100) {
            message.style.color = "green";
        }
        else {
            message.style.color = "red";
        }
    })

    .catch(error => {
        console.error("Error: ", error)
        message.textContent = "Something went wrong."
    })



})