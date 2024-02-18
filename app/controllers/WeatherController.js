import { Pop } from "../utils/Pop.js";
import { getFormData } from "../utils/FormHandler.js";
import { setHTML, setText } from "../utils/Writer.js";
import { AppState } from "../AppState.js";
import { weatherService } from "../services/WeatherService.js";


export class WeatherController {
    constructor() {
        // console.log('weather controller');
        AppState.on('account', this.getCurrentWeather)
    }

    async getCurrentWeather() {
        try {
            await weatherService.getCurrentWeather()
        } catch (error) {
            console.error(error)
            Pop.error(error)
        }
    }
}