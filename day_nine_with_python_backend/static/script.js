const numberOne = document.getElementById('numberOne');
const numberTwo = document.getElementById('numberTwo');
const addButton = document.getElementById('addButton');
const subtractButton = document.getElementById('subtractButton');
const multiplyButton = document.getElementById('multiplyButton');
const divideButton = document.getElementById('divideButton');

const answer = document.getElementById('answer');

addButton.addEventListener('click', function() {
    calculate('+');
});

subtractButton.addEventListener('click', function() {
    calculate('-');
});

multiplyButton.addEventListener('click', function() {
    calculate('*');
});

divideButton.addEventListener('click', function() {
    calculate('/');
}); 

function calculate(opt) {

    //get the input values
    let numberOneVal = numberOne.value;
    let numberTwoVal = numberTwo.value;

    // send request to the backend
    fetch('/api/calculate', {
        method: "POST",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify({
            number_one: numberOneVal,
            number_two: numberTwoVal, 
            operator: opt
        })
    })

    // display the result from the backend
    .then(response => response.json())
    .then(data => {
        answer.textContent = data.result
    })

    .catch(error => {
        console.log("Error: ", error)
        answer.style.color = "red";
        answer.textContent = `${error}`;
    })


}