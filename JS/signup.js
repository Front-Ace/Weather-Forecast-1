var allWeather = [];

function getweather(term) {
    var weather = new XMLHttpRequest();
weather.open("get" , `https://api.weatherapi.com/v1/forecast.json?key=fe50df14e109450f9b6202445230808&q=${term}&days=3`);
weather.send();
weather.addEventListener("loadend" , function () {
    if (weather.status == 200) {
        console.log(JSON.parse(weather.response));
        allWeather = JSON.parse(weather.response);
        displayFirstDay();
        displaySecondDay();
        displayThirdDay();
    }else{
        console.log("error");
    }
});
}

function displayFirstDay() {
    document.querySelector(".date-1").innerHTML = `<span class="date">${allWeather.forecast.forecastday[0].date}</span>`;
    document.querySelector(".city-1").innerHTML = `<h6 class="city card-subtitle my-2 fs-2">${allWeather.location.name}</h6>`;
    document.querySelector(".degree-1").innerHTML = `<h1 class="degree-number">${allWeather.forecast.forecastday[0].day.avgtemp_c}°C</h1>`;
    document.querySelector(".icon-1").innerHTML = `<img src="https://${allWeather.forecast.forecastday[0].day.condition.icon}" class="w-100" alt="weather logo">`;
    document.querySelector(".coditionText-1").innerHTML = `<div class="clowds text-warning mt-3 mb-2">${allWeather.forecast.forecastday[0].day.condition.text}</div>`;
    document.querySelector(".humadity-1").innerHTML = `<p>${allWeather.forecast.forecastday[0].day.avghumidity}%</p>`;
    document.querySelector(".wind-1").innerHTML = `<p>${allWeather.forecast.forecastday[0].day.maxwind_mph}km/h</p>`;
    document.querySelector(".windDir-1").innerHTML = `<p>${allWeather.current.wind_dir}</p>`;
    
};
function displaySecondDay() {
    document.querySelector(".date-2").innerHTML = `<span class="day">${allWeather.forecast.forecastday[1].date}</span>`;
    document.querySelector(".icon-2").innerHTML = `<img src="https://${allWeather.forecast.forecastday[1].day.condition.icon}" class="w-50" alt="weather logo">`;
    document.querySelector(".degree-2-max").innerHTML = `<h4 class=>${allWeather.forecast.forecastday[1].day.maxtemp_c}°C</h4>`;
    document.querySelector(".degree-2-min").innerHTML = `<h6>${allWeather.forecast.forecastday[1].day.mintemp_c}°C</h6>`;
    document.querySelector(".clouds-2").innerHTML = `<div>${allWeather.forecast.forecastday[1].day.condition.text}</div>`;

};
function displayThirdDay() {
    document.querySelector(".date-3").innerHTML = `<span class="day">${allWeather.forecast.forecastday[2].date}</span>`;
    document.querySelector(".icon-3").innerHTML = `<img src="https://${allWeather.forecast.forecastday[2].day.condition.icon}" class="w-50" alt="weather logo">`;
    document.querySelector(".degree-3-max").innerHTML = `<h4 class=>${allWeather.forecast.forecastday[2].day.maxtemp_c}°C</h4>`;
    document.querySelector(".degree-3-min").innerHTML = `<h6>${allWeather.forecast.forecastday[2].day.mintemp_c}°C</h6>`;
    document.querySelector(".clouds-3").innerHTML = `<div>${allWeather.forecast.forecastday[2].day.condition.text}</div>`;

};
var myDate= new Date(`9-8-2023`);
console.log(myDate);
console.log(myDate.getDay());