document.getElementById('search-button').addEventListener('click',()=>{
    let city=document.getElementById('city').value;
    getWeather(city);
    document.getElementById('city').value=""
})

function getWeather(city){
    fetch("http://api.openweathermap.org/data/2.5/weather?q="+city +"&units=metric&appid=08d2aab4fa37faf712b2e914cbe92b0d")
    .then(response=>response.json())
     .then(data=>fromAPI(data));
}

function fromAPI(temp){
    document.getElementById('show_city').innerText=temp.name;
    document.getElementById('show_temperature').innerText=temp.main.temp;
    document.getElementById('show_temperature-feels').innerText=temp.main.feels_like;
    document.getElementById('humidity').innerText=temp.main.humidity;
    document.getElementById('wind').innerText=temp.wind.speed;
    document.getElementById('weather_status').innerText=temp.weather[0].main;
    document.getElementById('icon').setAttribute('src', `https://openweathermap.org/img/wn/${temp.weather[0].icon}@2x.png`);
   
}
