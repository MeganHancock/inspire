export class Weather {
    constructor(data) {
        this.weather = data.weather
        this.main = data.main
        this.id = data.id
        this.name = data.name
        this.icon = data.icon || data.weather.icon
        this.fahrenheit = data.fahrenheit || true
        this.icon = data.weather[0].icon

    }

    get FahrenheitWeatherHTMLTemplate() {
        return `
        <div class="weather-hover text-bg rounded-3 p-2 h-100 fs-1 w-50" onclick="app.WeatherController.tempToCelsius('${this.fahrenheit}')"> 
        <p>${this.FahrenheitTemp} <span class="mdi mdi-temperature-fahrenheit"></span></p>
        <img src="https://openweathermap.org/img/wn/${this.icon}.png" >
        </div>
        `
    }
    get CelsiusWeatherHTMLTemplate() {
        return `
        <div class="weather-hover text-bg rounded-3 p-2 h-100 fs-1 w-50" onclick="app.WeatherController.tempToFahrenheit('${this.fahrenheit}')"> 
        <p>${this.CelsiusTemp} 
        <span class="mdi mdi-temperature-celsius"></span></p>
        <img src="https://openweathermap.org/img/wn/${this.icon}.png" >
        </div>
        `
    }

    get FahrenheitTemp() {
        return `
        ${Math.floor((this.main.temp - 273.15) * 9 / 5 + 32)}
            `
    }
    get CelsiusTemp() {
        return `
        ${Math.floor(this.main.temp - 273.15)}
            `
    }



    // get TempSwap() {
    //     return `
    //     <input onchange="app.TodoController.updateTodoAsCompleted('${this.id}')" ${this.completed ? 'checked' : ''} type="checkbox">
    //     `
    // }


    // }

    // const weatherdata = {

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
}