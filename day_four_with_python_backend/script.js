const gradeInput = document.querySelector("#grade");
const validationButton = document.querySelector("#validationButton");

validationButton.addEventListener("click", function() {
    const grade = gradeInput.value;
    console.log(grade);
});