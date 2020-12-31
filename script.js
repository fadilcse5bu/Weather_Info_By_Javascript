function updateInfo(lat, lon) {
  fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=11a29cc5962cd470a015ae753fd43476`)
    .then(resposne => {
      return resposne.json()
    })
    .then(data => {
      document.querySelector('.place').innerHTML = data['name'] + ', ' + data['sys']['country']

      var temp = parseFloat(data['main']['temp']) - 273;
      document.querySelector('.tem').innerHTML = temp.toFixed(2)

      var pressure = parseFloat(data['main']['pressure']) * 100
      document.querySelector('.pressure').innerHTML = pressure

      var humidity = data['main']['humidity']
      document.querySelector('.humidity').innerHTML = humidity

      var windSpeed = data['wind']['speed']
      document.querySelector('.wind-speed').innerHTML = windSpeed

      var sunrise = parseInt(data['sys']['sunrise']) * 1000
      var date = new Date(sunrise)
      var hours = date.getHours()
      var seconds = date.getSeconds()
      var minutes = date.getMinutes()
      document.querySelector('.sunrise').innerHTML = '0' + hours + ':' + minutes + ':' + seconds + ' AM'

      var sunset = parseInt(data['sys']['sunset']) * 1000
      date = new Date(sunset)
      hours = date.getHours()
      seconds = date.getSeconds()
      minutes = date.getMinutes()
      document.querySelector('.sunset').innerHTML = '0' + (hours - 12) + ':' + minutes + ':' + seconds + ' PM'
    })
}

navigator.geolocation.getCurrentPosition(pos => {
  let lat = pos.coords.latitude
  let lon = pos.coords.longitude
  updateInfo(lat, lon)
})


