document.addEventListener("DOMContentLoaded", function () {
    // ✅ Check if weather widget exists before updating it
    const weatherWidget = document.getElementById("weather-widget");
    
    // ✅ Replace with your actual API key
    const apiKey = "6ccf135f390e619440faea8be0d967f0"; 
    const city = "Lagos"; 

    if (weatherWidget) {
        fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&cnt=4&appid=${apiKey}`)
            .then(response => response.json())
            .then(data => {
                const currentWeather = data.list[0];
                const forecast = data.list.slice(1, 4);

                let weatherHTML = `<p>Current: ${currentWeather.main.temp}°C, ${currentWeather.weather[0].description}</p>`;
                weatherHTML += `<h3>3-Day Forecast:</h3><ul>`;
                forecast.forEach(day => {
                    const date = new Date(day.dt * 1000).toLocaleDateString();
                    weatherHTML += `<li>${date}: ${day.main.temp}°C, ${day.weather[0].description}</li>`;
                });
                weatherHTML += `</ul>`;

                weatherWidget.innerHTML = weatherHTML;
            })
            .catch(error => {
                console.error("Error fetching weather data:", error);
                weatherWidget.innerHTML = "Weather data unavailable";
            });
    } else {
        console.warn("Element #weather-widget not found in HTML.");
    }

    fetch("data/members.json")
    .then(response => {
        console.log("Fetching members.json...");
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
    })
    .then(members => {
        console.log("Fetched members data:", members);
        const spotlightSection = document.querySelector(".spotlights");
        if (!spotlightSection) {
            console.warn("Element .spotlights not found in HTML.");
            return;
        }

        const goldSilverMembers = members.filter(member => member.level === "Gold" || member.level === "Silver");
        const selectedMembers = goldSilverMembers.sort(() => 0.5 - Math.random()).slice(0, 3);

        spotlightSection.innerHTML = "<h2>Business Spotlights</h2>";
        
        selectedMembers.forEach(member => {
            const memberHTML = `
                <div class="spotlight">
                    <img src="${member.logo}" alt="${member.name} Logo">
                    <h3>${member.name}</h3>
                    <p>${member.address}</p>
                    <p>${member.phone}</p>
                    <a href="${member.website}" target="_blank">Visit Website</a>
                    <p class="membership">${member.level} Member</p>
                </div>
            `;
            spotlightSection.innerHTML += memberHTML;
        });
    })
    .catch(error => console.error("Error loading members.json:", error));


 // Display current year and last modified date
 const currentYear = new Date().getFullYear();
 document.getElementById("year").textContent = currentYear;
 document.getElementById("lastModified").textContent = document.lastModified;
})
