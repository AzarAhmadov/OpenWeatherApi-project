let city_name = document.querySelector('.city_name');
let derece = document.querySelector('.derece');
let hava_current = document.querySelector('.hava_current');
let nem = document.querySelector('.nem');
let api = 'https://api.openweathermap.org/data/2.5/';
let key = 'b9a6a9922dd4bb861148728e8e6e63da';

search_input.addEventListener('keyup', function () {
    let search_input = document.querySelector('#search_input');
    let query = `${api}weather?q=${search_input.value}&Appid=${key}&units=metric&lang=en`
    fetch(query)
        .then(Response => {
            return Response.json()
        })
        .then(data => {
            city_name.textContent = `${data.name}`
            derece.textContent = `${Math.round(data.main.temp)}°C`
            hava_current.textContent = `${data.weather[0].description}`
            nem.textContent = `${Math.round(data.main.temp_min)}°C /
      ${Math.round(data.main.temp_max)}°C`
        })
    if (search_input.value != '') {
        city_name.innerHTML = ""
        derece.innerHTML = ""
        hava_current.innerHTML = ""
        nem.innerHTML = ""
    }

    if (city_name.value != 'undefined') {
        city_name.classList.add('active')
    }

})