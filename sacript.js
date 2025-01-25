const apiKey = "3b45003d8f88527a1e1a94fe2c51fb63"; // Replace with your OpenWeatherMap API key
const weatherBtn = document.getElementById("getWeather");
const weatherResult = document.getElementById("weatherResult");

weatherBtn.addEventListener("click", () => {
  const city = document.getElementById("city").value;

  if (city === "") {
    weatherResult.innerHTML = "Please enter a city name.";
    return;
  }

  // Fetch weather data from OpenWeatherMap
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`)
    .then(response => response.json())
    .then(data => {
      if (data.cod === 200) {
        weatherResult.innerHTML = `
          <p><strong>City:</strong> ${data.name}</p>
          <p><strong>Temperature:</strong> ${data.main.temp}°C</p>
          <p><strong>Weather:</strong> ${data.weather[0].description}</p>
          <p><strong>Humidity:</strong> ${data.main.humidity}%</p>
          <p><strong>Wind Speed:</strong> ${data.wind.speed} m/s</p>
        `;
      } else {
        weatherResult.innerHTML = "City not found. Please try again.";
      }
    })
    .catch(() => {
      weatherResult.innerHTML = "Unable to fetch weather data. Please try again later.";
    });
});
