const numOne = document.getElementById('numberOne');
const numTwo = document.getElementById('numberTwo');
const calculateButton = document.getElementById('calculateButton');
const message = document.getElementById('message');

calculateButton.addEventListener('click', function() {
    const numOneVal = numOne.value;
    const numTwoVal = numTwo.value;
    if(numOneVal.trim() === "" && numTwoVal.trim() === ""){
        message.textContent = "Please enter a number"
        return;
    }

    fetch('/api/add', {
        method: 'POST',

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify({
            num_one: numOneVal,
            num_two: numTwoVal 
        })

    })

    .then(response => response.json())
    .then(data => {
        message.textContent = data.result;
    })

    .catch(error => {
        console.error("Error: ", error)
        message.style.fontSize = "12px";
        message.style.color = "red";
        message.textContent = `${error}`;


    })
})