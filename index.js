function showDate(date) {
  let hours = date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  let dayInput = date.getDay();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[dayInput];

  return `${day} ${hours}:${minutes}`;
}

let apiKey = "2e67ada581cbfe3ce3d849417cd6754c";
let apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}";
let city = "Lagos";

function showTemperature(response) {
  let temperature = math.round(response.data.main.temp);
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = `${temperature}`;
}
let h1 = document.querySelector("#city");
h1.innerHTML = city;
axios.get(`${apiUrl}&appid=${apiKey}`).then(showTemperature);

let myElement = document.querySelector("#date");
let myTime = new Date();
myElement.innerHTML = showDate(myTime);
