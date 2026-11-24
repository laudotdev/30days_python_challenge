from pprint import pprint
import requests
import os
from dotenv import load_dotenv

load_dotenv()

API_KEY = os.getenv("API_KEY")

def get_current_weather(city):

    url = "https://api.openweathermap.org/data/2.5/weather"

    params = {
        "appid": API_KEY,
        "q": city,
        "units": "imperial"
    }

    response = requests.get(url, params=params, timeout=10)
    weather_data = response.json()

    if weather_data.get("cod") != 200:
        print("API ERROR:", weather_data)
        return None

    city = weather_data["name"]
    country = weather_data["sys"]["country"]

    temperature = weather_data["main"]["temp"]
    feels_like = weather_data["main"]["feels_like"]
    humidity = weather_data["main"]["humidity"]

    weather = weather_data["weather"][0]["description"]
    wind_speed = weather_data["wind"]["speed"]

    return {
        "location": f"{city}, {country}",
        "temperature": temperature,
        "feels_like": feels_like,
        "condition": weather.title(),
        "humidity": humidity,
        "wind_speed": wind_speed
    }


if __name__ == "__main__":
    print("\n ** Get current weather condition ***")
    
    city = input("Enter a city: ")
    
    data = get_current_weather(city)

    if data is None:
        print("Invalid city or unable to retrieve weather.")
    
    else:
        print(f"""
        Weather Report
        -------------------------
        Location:       {data["location"]}
        Temperature:    {data["temperature"]}°F
        Feels Like:     {data["feels_like"]}°F
        Condition:      {data["condition"]}
        Humidity:       {data["humidity"]}%
        Wind Speed:     {data["wind_speed"]} mph
        -------------------------
        """)