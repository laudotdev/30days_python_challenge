const encryptInp = document.querySelector(".encrypt");   
const decryptInp = document.querySelector(".decrypt");   
const encryptBtn = document.getElementById("encryptBtn");
const decryptBtn = document.getElementById("decryptBtn");
const cpEncBtn = document.getElementById("cpEncButton");
const cpDecBtn = document.getElementById("cpDecButton");
const resultMessage = document.getElementById("resultMessage");

let encryptInpVal = encryptInp.value;
let decryptInpVal = decryptInp.value;

encryptBtn.addEventListener('click', function() {
    encryption()
})

decryptBtn.addEventListener('click', function() {
    decryption()
})

cpEncBtn.addEventListener('click', function() {
    navigator.clipboard.writeText(resultMessage.textContent);
    decryptInp.value = ""
    cpEncBtn.textContent = "Copied";
    cpDecBtn.textContent = "Copy";
})

cpDecBtn.addEventListener('click', function() {
    navigator.clipboard.writeText(resultMessage.textContent);
    encryptInp.value = "";
    cpDecBtn.textContent = "Copied";
    cpEncBtn.textContent = "Copy";
})

function encryption() {
    // fetch => request for the backend
    fetch('/api/encryption', {
        
        method: 'POST',
        
        headers: {
            "Content-Type": "application/json"
        },
        
        body: JSON.stringify({
            encryption: encryptInpVal
        })
        
    })
    
    .then(response => response.json())
    .then(data => {
        console.log(data.result)
        resultMessage.style.wordBreak = "break-all";
        resultMessage.style.overflowWrap = "break-word"
        resultMessage.style.whiteSpace = "normal"
        resultMessage.textContent = data.result;
    })
    
    .catch(error => {
        console.error("Error: ", error)
        resultMessage.textContent = "Something went wrong."
    })
}

function decryption() {
    // fetch => request for the backend
    fetch('/api/decryption', {
        
        method: 'POST',
        
        headers: {
            "Content-Type": "application/json"
        },
        
        body: JSON.stringify({
            decryption: decryptInpVal
        })
        
    })
    
    .then(response => response.json())
    .then(data => {
        console.log(data.result)
        resultMessage.style.wordBreak = "break-all";
        resultMessage.style.overflowWrap = "break-word"
        resultMessage.style.whiteSpace = "normal"
        resultMessage.textContent = data.result;
    })
    
    .catch(error => {
        console.error("Error: ", error)
        resultMessage.textContent = "Something went wrong."
    })
}