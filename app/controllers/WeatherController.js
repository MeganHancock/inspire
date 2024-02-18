import { Pop } from "../utils/Pop.js";
import { getFormData } from "../utils/FormHandler.js";
import { setHTML, setText } from "../utils/Writer.js";
import { AppState } from "../AppState.js";
import { weatherService } from "../services/WeatherService.js";


function _drawWeather() {
    if (AppState.weather.fahrenheit == true) {
        setHTML('weather', AppState.weather.FahrenheitWeatherHTMLTemplate)
    }
    else if (AppState.weather.fahrenheit == false) {
        setHTML('weather', AppState.weather.CelsiusWeatherHTMLTemplate)
    }
}


export class WeatherController {
    constructor() {
        // console.log('weather controller');
        AppState.on('account', this.getCurrentWeather)
        AppState.on('weather', _drawWeather)
    }

    async getCurrentWeather() {
        try {
            await weatherService.getCurrentWeather()
        } catch (error) {
            console.error(error)
            Pop.error(error)
        }
    }

    tempToCelsius(isFahrenheit) {
        try {
            console.log('tempToCelsius', AppState.weather.icon)
            weatherService.tempToCelsius(isFahrenheit)
        } catch (error) {
            console.error(error)
            Pop.error(error)
        }
    }
    tempToFahrenheit(isFahrenheit) {
        try {
            console.log('tempToFahrenheit')
            weatherService.tempToFahrenheit(isFahrenheit)
        } catch (error) {
            console.error(error)
            Pop.error(error)
        }
    }
}