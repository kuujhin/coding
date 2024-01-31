const API_KEY = globalVariable.WEATHER_API_KEY;

function onGeoOK(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weather = document.querySelector("#weather span:first-child");
      const city = document.querySelector("#weather span:last-child");

      weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
      city.innerText = data.name;
    });
}

function onGeoError() {
  alert("Can't find you.");
}

navigator.geolocation.getCurrentPosition(onGeoOK, onGeoError);

// https://openweathermap.org/ 계정 생성
// https://api.openweathermap.org/data/2.5/weather?lat=37.6677013&lon=126.7516366&appid=362aef0e30559afdea32122ab0df4bea
