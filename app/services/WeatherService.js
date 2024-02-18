import { AppState } from "../AppState.js";
import { Weather } from "../models/Weather.js";
import { api } from "./AxiosService.js";

class WeatherService {
    tempSwap(weatherId) {
        if (AppState.weather.fahrenheit = true) {
            AppState.weather.fahrenheit = false
        }
        else if (AppState.weather.fahrenheit = false) {
            AppState.weather.fahrenheit = true
        }
        console.log(AppState.weather.fahrenheit);
    }

    async getCurrentWeather() {
        const response = await api.get('api/weather')
        console.log('got weather', response.data);
        const receivedWeather = new Weather(response.data)
        AppState.weather = receivedWeather
        console.log('received weather', receivedWeather)
    }

}

export const weatherService = new WeatherService()