async function getWeather(){
  let apiUrl = 'https://api.tomorrow.io/v4/weather/realtime?location=toronto&apikey=qNmqZWGnIOm4XQE34DGeDa7Dp4zBUUQw'
  let response = await fetch(apiUrl)
  let results = await response.json()

  console.log(results);
}

getWeather()


