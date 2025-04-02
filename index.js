const apikey = '9YJ2N87BGG46Y75BMSLYKU3U8'
const apiurl = 'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=us&key=${9YJ2N87BGG46Y75BMSLYKU3U8}&contentType=json'


const inputlocation = document.getElementById("locationinput")
const searchbtn = document.getElementById("searchbtn")
const city = document.getElementById("location")
const temp = document.getElementById("temperature")
const descrip = document.getElementById("description")

searchbtn.addEventListener("click" , function(){
    const location = inputlocation.value //location given by user
    if(location){
        fetchWeather(location)
    }
})
function fetchWeather(location){
    const apiurl = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=us&key=${apikey}&contentType=json` //api not working 

fetch(apiurl, {
    "method": "GET",
    "headers": {
    }
    })
  .then(response => response.json())
    .then(data => {
        city.textContent = data.address
        temp.textContent = data.currentConditions.temp + "°C"
        descrip.textContent = data.currentConditions.description
  })
  .catch(err => {
    console.error(err);
  });

}