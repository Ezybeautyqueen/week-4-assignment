// challenge 1
  function updateTime(){
 let current = new Date();
 let currentTime = document.querySelector("#time")  
 let date = current.getDate();
 let hours =current.getHours();
 if(hours < 10){
    hours = `0${hours}`;
 }
 let days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
 let day = days[current.getDay()];
 let minutes = current.getMinutes();
 if (minutes < 10 ){minutes = `0${minutes}`

 }
 currentTime.innerHTML = `${day}
  ${hours}: ${minutes}`;
  }
  updateTime();

// challenge 2
function citySearch(event){
    event.preventDefault();
let cityName = document.querySelector("#city");
let cityFormInput = document.querySelector("#inputCityName");

cityName.innerHTML = cityFormInput.value;
}


let form = document.querySelector("#form-id");
form.addEventListener("submit", citySearch);

// bonus challenge
function changeTempToFahren(event){
    event.preventDefault();
    let tempUnit = document.querySelector("#temperatureUnit");
    let temp = temperatureUnit.innerHTML;
    temp = Number(temp);
    temperatureUnit.innerHTML = 72;
}
let fharenheit = document.querySelector("#fahrenLink");
fharenheit.addEventListener("click", changeTempToFahren);



function changeToCelcsius(event){
event.preventDefault;
 let tempUnit = document.querySelector("#temperatureUnit");
 temperatureUnit.innerHTML = 22;
}
let celcius = document.querySelector("#celsiusLink");
celcius.addEventListener("click", changeToCelcsius);






