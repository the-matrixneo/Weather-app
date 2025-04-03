function fetchWeather(location){
  const apikey = '03d4a256a600829ac4f354309d80cdd5'
   const locationinput = document.querySelector('#locationinput').value
   if(!locationinput){
    console.log('please enter the city name')
    
   }
  const currentWeatherUrl =  `https://api.openweathermap.org/data/2.5/weather?q=${locationinput}&appid=${apikey}`
  const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${locationinput}&appid=${apiKey}` 
  

    fetch(currentWeatherUrl)
    .then(response => response.json())
      .then(data => {
         displayWeather(data)
    })
    .catch(err => {
      console.error(err)
      alert('Error fetching weather data. Please try again later.')
    });

    fetch( forecastUrl)
    .then(response => response.json())
      .then(data => {
         displayHourForecast(data.list)
    })
    .catch(err => {
      console.error(err)
      alert('Error fetching weather data. Please try again later.')
    });
  
  }
  function displayWeather(data){
    const weathericon = document.getElementById('weather-icon')
    const temperature = document.getElementById('temp')
    const weatherinfo = document.getElementById('weather-info')
    const HourForecast = document.getElementById('hourly-forecast')
    
    temperature.innerHTML ='' //clear all the previous info
    weatherinfo.innerHTML = ''
    HourForecast.innerHTML = ''
    
      if(data.cod === '404'){
        console.log('City not found')
      }
      else{
        const cityname = data.name
        const temperature = Math.round(data.main.temp - 273.15) //convert kelvin to celsius
        const weather = data.weather[0].description
        const icon = data.weather[0].icon
        const iconUrl = `https://openweathermap.org/img/wn/${icon}.png`
    
        const temperatureHTML = `<h3>${temperature}°C</h3>`
        const weatherHTML = `<h3>${weather}</h3>
                             <h3>${cityname}</h3>`
  
    
        temperature.innerHTML =  temperatureHTML //clear all the previous info
        weatherinfo.innerHTML =  weatherHTML
        weathericon.src = iconUrl
        weathericon.alt = weather
        showImage()
      }
    }
    function showImage(){
      const weathericon = document.getElementById('weather-icon')
      weathericon.style.display = 'block'
    }
    function displayHourForecast(data){
      const HourForecast = document.getElementById('hourly-forecast')
      const next24hours = hourlyData.slice(0,24)
      next24hours.forEach(item => {
        const datetime = new Date(item.dt *1000)
        const temperature = Math.round(item.main.temp - 273.15) //convert kelvin to celsius
        const weather = item.weather[0].description
        const icon = item.weather[0].icon
        const iconUrl = `https://openweathermap.org/img/wn/${icon}.png`
    
        const hourlyItemHTML= 
         `
            <div class="hourly-item">
                <span>${hour}:00</span>
                <img src="${iconUrl}" alt="Hourly Weather Icon">
                <span>${temperature}°C</span>
            </div>
        `
    
        HourForecast.innerHTML += forecastHTML
      })
    }
 

