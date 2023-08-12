var allWeather = [];
let weekDays = [`Sunday`,`Monday`,`Tuesday`,`Wednesday`,`Thursday`, `Friday`,`Saturday`]
let months = [`Jan`,`Feb`,`Mar`,`Apr`,`May`,`Jun`,`Jul`,`Aug`,`Sep`,`Oct`,`Nov`,`Dec`]

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
    var myDate1= new Date(allWeather.forecast.forecastday[0].date);
    let day1 = myDate1.getDay();
    let month = myDate1.getMonth();
    let month1= months[month];
    let firstDay = weekDays[day1];
    document.querySelector(".date-1-name").innerHTML = `<span class="day">${firstDay}</span>`
    document.querySelector(".date-1").innerHTML = `<span class="date mb-1">${day1} ${month1}</span>`;
    document.querySelector(".city-1").innerHTML = `<h6 class="city card-subtitle mt-1 mb-1 fs-2">${allWeather.location.name}</h6>`;
    document.querySelector(".degree-1").innerHTML = `<h1 class="degree-number mb-4">${allWeather.forecast.forecastday[0].day.avgtemp_c}°C</h1>`;
    document.querySelector(".icon-1").innerHTML = `<img src="https://${allWeather.forecast.forecastday[0].day.condition.icon}" class="w-100" alt="weather logo">`;
    document.querySelector(".coditionText-1").innerHTML = `<div class="clowds text-warning mt-3 mb-1">${allWeather.forecast.forecastday[0].day.condition.text}</div>`;
    document.querySelector(".humadity-1").innerHTML = `<p>${allWeather.forecast.forecastday[0].day.avghumidity}%</p>`;
    document.querySelector(".wind-1").innerHTML = `<p>${allWeather.forecast.forecastday[0].day.maxwind_mph}km/h</p>`;
    document.querySelector(".windDir-1").innerHTML = `<p>${allWeather.current.wind_dir}</p>`;
    
};
function displaySecondDay() {
    var myDate2= new Date(allWeather.forecast.forecastday[1].date);
    let day2 = myDate2.getDay();
    let secondDay = weekDays[day2];
    document.querySelector(".date-2").innerHTML = `<span class="day">${secondDay}</span>`;
    document.querySelector(".icon-2").innerHTML = `<img src="https://${allWeather.forecast.forecastday[1].day.condition.icon}" class="w-50" alt="weather logo">`;
    document.querySelector(".degree-2-max").innerHTML = `<h4 class=>${allWeather.forecast.forecastday[1].day.maxtemp_c}°C</h4>`;
    document.querySelector(".degree-2-min").innerHTML = `<h6>${allWeather.forecast.forecastday[1].day.mintemp_c}°C</h6>`;
    document.querySelector(".clouds-2").innerHTML = `<div>${allWeather.forecast.forecastday[1].day.condition.text}</div>`;

};
function displayThirdDay() {
    var myDate3= new Date(allWeather.forecast.forecastday[2].date);
    let day3 = myDate3.getDay();
    let thirdDay = weekDays[day3];
    document.querySelector(".date-3").innerHTML = `<span class="day">${thirdDay}</span>`;
    document.querySelector(".icon-3").innerHTML = `<img src="https://${allWeather.forecast.forecastday[2].day.condition.icon}" class="w-50" alt="weather logo">`;
    document.querySelector(".degree-3-max").innerHTML = `<h4 class=>${allWeather.forecast.forecastday[2].day.maxtemp_c}°C</h4>`;
    document.querySelector(".degree-3-min").innerHTML = `<h6>${allWeather.forecast.forecastday[2].day.mintemp_c}°C</h6>`;
    document.querySelector(".clouds-3").innerHTML = `<div>${allWeather.forecast.forecastday[2].day.condition.text}</div>`;

};