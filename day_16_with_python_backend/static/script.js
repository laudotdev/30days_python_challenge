const city = document.querySelector(".city-input");
const weatherBtn = document.getElementById("weatherBtn");
const resultMessage = document.getElementById("resultMessage");
const br = document.createElement('br');

// let cityVal = city.value;

// delete btn
weatherBtn.addEventListener('click', function() {
    cityFunction()
});

function cityFunction() {
    let cityVal = city.value;
    fetch('/api/city', {
        method: 'POST',
        
        headers: {
            "Content-Type": "application/json"
        },
        
        body: JSON.stringify({
            city: cityVal
        })
    })
    
    .then(response => response.json())
    .then(data => {
        
        const weather = data.result;
        
        console.log(data.result);
        // console.log(`Location: ${weather.location} 
            // Temperature: ${weather.temperature}°F 
            // Feels Like: ${weather.feels_like}°F 
            // Condition: ${weather.condition} br
            // Humidity: ${weather.humidity}% br
            // Wind Speed: ${weather.wind_speed} mph`)
        
        // para gumana ang new_line
        resultMessage.style.whiteSpace = "pre-wrap";
        resultMessage.textContent = `
            Location: ${weather.location}\n
            Temperature: ${weather.temperature}°F\n
            Feels Like: ${weather.feels_like}°F\n
            Condition: ${weather.condition}\n
            Humidity: ${weather.humidity}%\n
            Wind Speed: ${weather.wind_speed} mph
        `;
    })
    
    .catch(error => {
        console.error("Error: ", error);
        resultMessage.style.color = "red";
        resultMessage.textContent = "Something went wrong.";
    });
}

