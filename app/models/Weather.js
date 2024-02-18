export class Weather {
    constructor(data) {
        this.weather = data.weather.main
        this.main = data.weather.temp
        this.id = data.id
        this.name = data.name
    }
}

// const weatherdata = {

//     "coord": {
//         "lon": -116.2035,
//         "lat": 43.6135
//     },
//     "weather": {
//         "0": {
//             "id": 800,
//             "main": "Clear",
//             "description": "clear sky",
//             "icon": "01d"
//         },
//         "icon": "https://openweathermap.org/img/wn/undefined.png"
//     },
//     "base": "stations",
//     "main": {
//         "temp": 280.28,
//         "feels_like": 276.88,
//         "temp_min": 277.15,
//         "temp_max": 281.5,
//         "pressure": 1021,
//         "humidity": 39
//     },
//     "visibility": 10000,
//     "wind": {
//         "speed": 5.66,
//         "deg": 140
//     },
//     "clouds": {
//         "all": 0
//     },
//     "dt": 1708209047,
//     "sys": {
//         "type": 2,
//         "id": 2043419,
//         "country": "US",
//         "sunrise": 1708180873,
//         "sunset": 1708219006
//     },
//     "timezone": -25200,
//     "id": 5586437,
//     "name": "Boise",
//     "cod": 200,
//     "origin": "https://openweathermap.org"
// }
