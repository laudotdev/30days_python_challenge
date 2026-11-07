const gradeInput = document.querySelector("#grade");
const validationButton = document.querySelector("#validationButton");
const message = document.getElementById("message");
const backendMessage = document.getElementById("back_end_message");

validationButton.addEventListener("click", function() {
    const grade = gradeInput.value;

    if(grade.trim() === "") {
        message.textContent = "Please enter a grade."
        return;
    }

    fetch("/api/validate", {
        method: "POST",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify({
            grade: grade
        })
    })

    .then(response => response.json())
    .then(data => {
        message.textContent = data.result;
    })

    .catch(error => {
        console.error("Error:", error);
        message.textContent = "Something went wrong.";
    });

});

// fetch("/api/message")
//     .then(response => response.json())
//     .then(data => {
//         backendMessage.textContent = data.messa
//     });