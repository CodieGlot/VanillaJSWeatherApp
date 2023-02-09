const api = "ec7d44c7f42442da5f8717**********";
//Replace your api

window.addEventListener("load", () => {
    //longtitude and latitude at FPT university
    let lat= 15.968646226382432, long= 108.260556797561;
    
    const base = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${api}&units=metric`;
    
    fetch(base)
    .then((response) => response.json())
    .then((data) => {
        const { feels_like, temp_max, temp_min } = data.main;
        const { description, icon } = data.weather[0];
        const { sunrise, sunset } = data.sys;

        const iconURL = `http://openweathermap.org/img/wn/${icon}@2x.png`;
        const fahrenheit = (feels_like * 9) / 5 + 32;

        const sunriseGMT= new Date(sunrise * 1000), sunsetGMT= new Date(sunset * 1000);

        const celcius = " *C", fahren = " *F";

        document.querySelector("#weather-icon").src = iconURL;
        document.querySelector("#location").textContent = "FPT University Da Nang";
        document.querySelector("#desc").textContent = description;

        document.querySelector("#c").textContent = feels_like + celcius;
        document.querySelector("#f").textContent = fahrenheit + fahren;
        document.querySelector("#temp_max").textContent = "Highest temp: " + temp_max + celcius;
        document.querySelector("#temp_min").textContent = "Lowest temp: " + temp_min + celcius;


        document.querySelector("#sunrise").textContent = sunriseGMT;
        document.querySelector("#sunset").textContent = sunsetGMT;
    })
})
