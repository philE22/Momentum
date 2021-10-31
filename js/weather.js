const API_KEY = "a3689ecc2e65fe460a7e5259065f828e"

function onGeoOk(position){
    console.log(position)
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    console.log("You live in", lat, lon)
    const url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    fetch(url).then((response)=> response.json()).then((data)=>{
        const weather = document.querySelector(".weather span:first-child")
        const city = document.querySelector(".weather span:last-child")
        city.innerText = data.name;
        weather.innerText = `날씨:${data.weather[0].main} 섭씨${data.main.temp}도`;
    });
}


function onGeoError() {
    alert("Can't find you. No weather for you.")
}


navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError)
