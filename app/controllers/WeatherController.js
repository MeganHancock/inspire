import { Pop } from "../utils/Pop.js";
import { getFormData } from "../utils/FormHandler.js";
import { setHTML, setText } from "../utils/Writer.js";
import { AppState } from "../AppState.js";
import { weatherService } from "../services/WeatherService.js";


function _drawWeather() {
    // const weather = AppState.weather
    // let htmlString = ''
    // htmlString += weather
    setHTML('weather', AppState.weather.FahrenheitWeatherHTMLTemplate)
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

    async tempSwap(weatherId) {
        try {
            console.log('temp swap div')
            await weatherService.tempSwap(weatherId)
        } catch (error) {
            console.error(error)
            Pop.error(error)
        }
    }
}