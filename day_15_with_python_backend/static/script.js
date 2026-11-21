const appendBtn = document.getElementById("updateFile");
const writeBtn = document.getElementById("writeFile");
const deleteBtn = document.getElementById("deleteFile");
const createBtn = document.getElementById("createFile");
const resultMessage = document.getElementById("resultMessage");
const submitBtn = document.getElementById("submitBtn");
const inputHidden = document.querySelector(".inputHidden");

let inputHiddenVal = inputHidden.value;

// current action;
let currentAction = null;

// append btn
appendBtn.addEventListener('click', function() {
    currentAction = "append";
    inputHidden.style.display = "block";
    submitBtn.style.display = "block";
    inputHidden.placeholder = "Append the text inside the file.";
});

// write btn
writeBtn.addEventListener('click', function() {
    currentAction = "write";
    inputHidden.style.display = "block";
    submitBtn.style.display = "block";
});

// delete btn
deleteBtn.addEventListener('click', function() {
    currentAction = "delete";
    inputHidden.style.display = "block";
    submitBtn.style.display = "block";
    inputHidden.placeholder = "Type a file name to delete.";
});

// submit btn
submitBtn.addEventListener('click', function() {
    if(currentAction === "append") {
        appendFunction();
    } else if(currentAction === "write") {
        writeFunction();
    }
    else {
        deleteFunction();
    }
});

function appendFunction() {
    fetch('/api/append_file', {
        method: 'POST',
        
        headers: {
            "Content-Type": "application/json"
        },
        
        body: JSON.stringify({
            append_file_text: inputHiddenVal
        })
    })
    
    .then(response => response.json())
    .then(data => {
        console.log(data.result);
        resultMessage.textContent = data.result;
    })
    
    .catch(error => {
        console.error("Error: ", error);
        resultMessage.style.color = "red";
        resultMessage.textContent = "Something went wrong.";
    });
}

function writeFunction() {
    fetch('/api/write_file', {
        method: 'POST',
        
        headers: {
            "Content-Type": "application/json"
        },
        
        body: JSON.stringify({
            write_file_name: inputHiddenVal
        })
    })
    
    .then(response => response.json())
    .then(data => {
        console.log(data.result);
        resultMessage.textContent = data.result;
    })
    
    .catch(error => {
        console.error("Error: ", error);
        resultMessage.style.color = "red";
        resultMessage.textContent = "Something went wrong.";
    });
}

function deleteFunction() {
    fetch('/api/delete_file', {
        method: 'POST',
        
        headers: {
            "Content-Type": "application/json"
        },
        
        body: JSON.stringify({
            delete_file: inputHiddenVal
        })
    })
    
    .then(response => response.json())
    .then(data => {
        console.log(data.result);
        if(data["status"] === true) {
            resultMessage.style.color = "green";
        }
        else {
            resultMessage.style.color = "red";
        }
        resultMessage.textContent = data.result;
    })
    .catch(error => {
        console.error("Error: ", error);
        resultMessage.style.color = "red";
        resultMessage.textContent = "Something went wrong.";
    });
}
