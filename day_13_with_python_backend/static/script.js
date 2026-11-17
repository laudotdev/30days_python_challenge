const stringConvert = document.getElementById("stringConvert");
const binaryConvert = document.getElementById("binaryConvert");
const convertBtn = document.getElementById("convert");
const binaryConvertBtn = document.getElementById("binaryConvertBtn");
const resultConverted = document.getElementById("resultConverted");

convertBtn.addEventListener('click', function() {
    toStringBinary()
});

binaryConvertBtn.addEventListener('click', function() {
    toBinaryString()
});

// function for frontend request to a string-to-binary conversion
function toStringBinary() {
    let stringConvertVal = stringConvert.value;
    
    fetch("/api/convert_to_binary", {
        method: 'POST',
        
        headers: {
            "Content-Type": "application/json"
        },
        
        body: JSON.stringify({
            plain_text: stringConvertVal
        })
    })
    
    .then(response => response.json())
    .then(data => {
        console.log(data.result)
        resultConverted.style.marginLeft = "10px";
        resultConverted.style.marginRight = "10px";
        resultConverted.style.textAlign = "center";
        resultConverted.style.fontWeight = "bold";
        resultConverted.textContent = data.result;
    })
    
    .catch(error => {
        console.error("Error: ", error)
        resultConverted.textContent = "Something went wrong."
    })
}

// function for frontend request to a binary-to-string conversion
function toBinaryString() {
    let binaryConvertVal = binaryConvert.value;
    
    fetch("/api/convert_to_string", {
        method: 'POST',
        
        headers: {
            "Content-Type": "application/json"
        },
        
        body: JSON.stringify({
            plain_bin: binaryConvertVal
        })
    })
    
    .then(response => response.json())
    .then(data => {
        console.log(data.result)
        resultConverted.style.marginLeft = "10px";
        resultConverted.style.marginRight = "10px";
        resultConverted.style.textAlign = "center";
        resultConverted.style.fontWeight = "bold";
        resultConverted.textContent = data.result;
    })
    
    .catch(error => {
        console.error("Error: ", error)
        resultConverted.textContent = "Something went wrong."
    })
}