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
    let messageVal = subject.value;


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
        results.textContent = data.result
    })

    .catch(error => {
        console.error("Error: ", error)
        results.textContent = `${error}`
    })

})