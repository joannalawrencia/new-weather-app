//Date

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let months = [
  "January",
  "Febuary",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

let now = new Date();

let date = now.getDate();
let month = months[now.getMonth()];
let year = now.getFullYear();

let day = days[now.getDay()];
let hours = now.getHours();
let minutes = now.getMinutes();

let h2 = document.querySelector("h2");
h2.innerHTML = `${day}!`;

let h3 = document.querySelector("h3");
h3.innerHTML = `${date}. ${month} ${year}, ${hours}:${minutes}`;

//Show City
function enterCity(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-input");
  let h4 = document.querySelector("h4");
  h4.innerHTML = `${searchInput.value}`;

  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${searchInput.value}&appid=d15392c799af218cfbddce487fe22d57&units=metric`;

  axios.get(`${apiUrl}`).then(showTemperature);
}

let form = document.querySelector("#search-city");
form.addEventListener("submit", enterCity);

//Temperature
function showTemperature(response) {
  let temperature = Math.round(response.data.main.temp);
  let currentTemp = document.querySelector("#current");
  currentTemp.innerHTML = `${temperature}°C`;
}
