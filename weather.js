//Complete the Weather API Backend part using openweathermap api
var cityElem = document.querySelector('.city')
var dateElem = document.querySelector('.date')
var tempElem = document.querySelector('.temp')
var weatherElem = document.querySelector('.weather')
var hiElem = document.querySelector('.hi-low')
var months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
var week = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

async function myFun(){
    try{
        let city = document.getElementById('search-bar').value

        const result = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=8b8c1ffba1bb0c17c5300728d187e909`)
        const data = await result.json()
        let title = data.weather[0].description
        let temp = parseInt(data.main.temp - 273.15)
        let temp_min = parseInt(data.main.temp_min -273.15 -1)
        let temp_max = parseInt(data.main.temp_max -273.15 +1)
        let cityName = data.name
        let country = data.sys.country
        const date = new Date();
        cityElem.innerHTML = `${cityName}, ${country}`;
        dateElem.innerHTML = week[date.getDay()] +" "+ date.getDate()+" "+ months[date.getMonth()] + " " +date.getFullYear() 
        tempElem.innerHTML = `${temp} °C`; 
        hiElem.innerHTML = `${temp_min}°C / ${temp_max} °C`; 
        weatherElem.innerHTML = title[0].toUpperCase() + title.substring(1);   
    }
    catch(error){
        console.log(error)
    }

}

