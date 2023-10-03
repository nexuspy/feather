document.addEventListener("DOMContentLoaded", function () {
    const apiKey = "YOUR_API_KEY";
    const getWeatherButton = document.getElementById("getWeather");

    getWeatherButton.addEventListener("click", function () {
        const cityInput = document.getElementById("city").value;
        const cityName = document.getElementById("cityName");
        const temperature = document.getElementById("temperature");
        const description = document.getElementById("description");

        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&appid=${apiKey}&units=metric`)
            .then((response) => response.json())
            .then((data) => {
                cityName.textContent = data.name;
                temperature.textContent = `Temperature: ${data.main.temp}°C`;
                description.textContent = `Description: ${data.weather[0].description}`;
            })
            .catch((error) => {
                cityName.textContent = "City not found";
                temperature.textContent = "";
                description.textContent = "";
                console.error(error);
            });
    });
});
