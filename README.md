# API-Integration

*Company*: CODTECH IT SOLUTIONS

*NAME*: NAMITHA G

*INTERN ID*: CT06DY1552

*DOMAIN*: FULL STACK WEB DEVELOPMENT

*DURATION*: 6 WEEKS

*MENTOR*: NEELA SANTOSH

# Weather Forecast App

## Project Overview
The Weather Forecast App is a fully functional web application designed to provide real-time weather updates for cities worldwide. It leverages the OpenWeatherMap API to fetch live weather data, including temperature, humidity, atmospheric pressure, weather conditions, and related information. The application is built using HTML, CSS, and JavaScript, ensuring that it is lightweight, responsive, and user-friendly. This project is ideal for users who want to check the weather conditions for any city without installing dedicated software or applications.  

The application supports **global cities**, allowing users to search for cities from any country. For Indian cities, common alternate names are automatically mapped (e.g., Bangalore → Bengaluru, Bombay → Mumbai, Madras → Chennai, Calcutta → Kolkata). This feature ensures accurate results and avoids confusion due to local naming differences. The dynamic interface and responsive design make it suitable for desktop, tablet, and mobile devices, offering a smooth user experience.

---

## Features
1. **Global City Support**: Users can search for any city worldwide by typing the city name or including the country code (e.g., Paris,FR).  
2. **Indian City Aliases Handling**: The app recognizes common alternate city names for India, providing correct results without requiring users to know the official city name.  
3. **Dynamic Backgrounds**: Based on the current weather condition, the background of the page changes dynamically, creating a visually appealing and intuitive user experience. For example, cloudy weather displays a grey gradient, rainy conditions show a blue gradient, and sunny or clear skies display a warm yellow gradient.  
4. **Weather Icons**: The app displays weather icons fetched from the OpenWeatherMap API, giving a visual representation of the current weather condition.  
5. **Error Handling**: The app includes robust error handling to inform users if a city is not found or if there is an issue with fetching data. Friendly messages guide the user to correct their input, ensuring the app remains usable at all times.  
6. **Responsive UI**: The user interface is fully responsive, meaning it adjusts seamlessly to different screen sizes, whether it is a desktop, tablet, or mobile device.  

---

## Implementation Details
The application is built using **HTML, CSS, and vanilla JavaScript**. The HTML structure defines a search box, a display area for weather results, and headings for the title and instructions. CSS is used for styling the app, ensuring a modern and professional look with gradients, rounded cards, and dynamic backgrounds. JavaScript handles API calls, input cleaning, alias mapping, and DOM manipulation to dynamically update the weather information based on user input.

The core functionality revolves around fetching data from the **OpenWeatherMap API**. When a user enters a city name and clicks the search button, the app sends an HTTP request to the API. The response is returned as JSON, containing all relevant weather details. The JavaScript code then parses this JSON data and displays it in a user-friendly card format, including the city name, country, temperature, weather condition, humidity, pressure, and an appropriate icon. Dynamic background changes are triggered based on the main weather condition, creating an immersive experience for the user.

The app also includes **input sanitation** and **alias mapping**. Input sanitation ensures that spaces around commas or incorrect capitalization do not break the API request. The alias mapping automatically converts common alternate names of Indian cities to their official names, enhancing user convenience.

---

## Challenges Faced
1. **API Key Validation**: Initially, using an invalid API key caused fetch errors. Ensuring the API key was correctly generated, activated, and inserted into the code resolved this issue.  
2. **City Name Variations**: Many Indian cities have alternate names. Implementing a mapping system to automatically convert these aliases into official names was essential for accuracy.  
3. **Error Handling**: Handling cases where a user enters an invalid city or API fails required implementing friendly and informative error messages.  
4. **Dynamic Backgrounds**: Determining gradients for various weather conditions while maintaining readability and aesthetics required careful design.  

---

## Future Enhancements
- **7-Day Forecast**: Expand the app to show a weekly forecast for any city.  
- **Geolocation Integration**: Automatically detect the user’s location to show current weather without requiring input.  
- **Search Suggestions**: Implement autocomplete suggestions for city names to improve usability.  
- **Animations**: Add smooth animations for weather changes, like moving clouds or raindrops, to make the interface more engaging.  
- **Temperature Unit Toggle**: Allow users to switch between Celsius, Fahrenheit, and Kelvin for convenience.  

---

## Technologies Used
- **HTML**: Provides the structure and layout of the app.  
- **CSS**: Styles the app with responsive design, gradients, and card-based UI.  
- **JavaScript**: Handles API calls, dynamic updates, input sanitation, alias mapping, and error handling.  
- **OpenWeatherMap API**: Provides real-time weather data and icons.  

---

## How to Use
1. Open the `index.html` file in any modern web browser.  
2. Type the name of the city you want to check the weather for (e.g., `Bengaluru`, `Paris,FR`).  
3. Click the **Search** button.  
4. View real-time weather data, including temperature, humidity, pressure, and weather description.  
5. If the city is not found, follow the suggestion in the error message to correct the spelling or add the country code.  

---

## Author
- NAMITHA G 

---

This README provides a complete overview of the project, including features, implementation details, challenges, and future enhancements, making it **professional and internship-ready**.




