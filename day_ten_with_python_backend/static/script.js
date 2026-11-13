const fullName = document.getElementById('fullname');
const email = document.getElementById('email');
const subject = document.getElementById('subject');
const message = document.getElementById('message');
const submitButton = document.getElementById('submitButton');
const results = document.getElementById('results');


submitButton.addEventListener('click', function() {

    // get the value
    let fullnameVal = fullname.value;
    let emailVal = email.value;
    let subjectVal = subject.value;
    let messageVal = message.value;


    // send a request to the backend
    fetch('/api/validator', {
        method: 'POST',

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify({
            full_name: fullnameVal,
            email: emailVal,
            subject: subjectVal,
            message: messageVal
        })
    }) 

    // display the result from the backend
    .then(response => response.json())
    .then(data => {
        console.log(data.result)

        if(data.result["is_success"] === true) {
            results.style.color = "green";
            results.textContent = "Form submitted successfully!";
        }
        else {
            results.style.color = "red";
            results.textContent = data.result.errors["full_name"] || data.result.errors["email"] || data.result.errors["subject"] || data.result.errors["message"];
        }
    })

    .catch(error => {
        console.error("Error: ", error)
    })

})