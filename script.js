const apiKey = 'db985d4f182c849f978e04d5248af1d4'; // Your OpenWeatherMap API key



// HTML references
const searchBtn = document.getElementById('searchBtn');
const cityInput = document.getElementById('city');
const weatherResult = document.getElementById('weatherResult');

// Indian city aliases
const cityAliases = {
    "bangalore": "Bengaluru",
    "bengaluru": "Bengaluru",
    "bombay": "Mumbai",
    "mumbai": "Mumbai",
    "madras": "Chennai",
    "chennai": "Chennai",
    "calcutta": "Kolkata",
    "kolkata": "Kolkata",
};

searchBtn.addEventListener('click', () => {
    let userInput = cityInput.value.trim().toLowerCase();

    if (!userInput) {
        weatherResult.innerHTML = "<p>Please enter a city name.</p>";
        return;
    }

    // Map aliases
    userInput = cityAliases[userInput] || userInput;

    // Clean input for City,CountryCode
    userInput = userInput.replace(/\s*,\s*/g, ',');

    const city = encodeURIComponent(userInput);

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
        .then(res => res.json())
        .then(data => {
            if (data.cod === 200) {
                const { name, sys, main, weather } = data;
                const iconUrl = `https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`;

                weatherResult.innerHTML = `
                    <div class="weather-card">
                        <h2>${name}, ${sys.country}</h2>
                        <img class="weather-icon" src="${iconUrl}" alt="${weather[0].description}">
                        <p><strong>Temperature:</strong> ${main.temp} °C</p>
                        <p><strong>Weather:</strong> ${weather[0].description}</p>
                        <p><strong>Humidity:</strong> ${main.humidity}%</p>
                        <p><strong>Pressure:</strong> ${main.pressure} hPa</p>
                    </div>
                `;

                // Dynamic background
                const weatherMain = weather[0].main.toLowerCase();
                if (weatherMain.includes('cloud')) {
                    document.body.style.background = "linear-gradient(to right, #bdc3c7, #2c3e50)";
                } else if (weatherMain.includes('rain') || weatherMain.includes('drizzle')) {
                    document.body.style.background = "linear-gradient(to right, #4e54c8, #8f94fb)";
                } else if (weatherMain.includes('sun') || weatherMain.includes('clear')) {
                    document.body.style.background = "linear-gradient(to right, #f7971e, #ffd200)";
                } else if (weatherMain.includes('snow')) {
                    document.body.style.background = "linear-gradient(to right, #e6dada, #274046)";
                } else {
                    document.body.style.background = "linear-gradient(to right, #74ebd5, #ACB6E5)";
                }

            } else {
                weatherResult.innerHTML = `<p>City not found. Check spelling or try adding country code (e.g., Paris,FR).</p>`;
            }
        })
        .catch(err => {
            console.error(err);
            weatherResult.innerHTML = "<p>Something went wrong. Please try again later.</p>";
        });
});
