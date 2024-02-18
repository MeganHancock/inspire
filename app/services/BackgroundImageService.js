import { BackgroundImage } from "../models/BackgroundImage.js";
import { api } from "./AxiosService.js"
import { AppState } from "../AppState.js";

class BackgroundImageService {

    async getImage() {
        const response = await api.get('api/images')
        // console.log('got image', response.data);
        const newImage = new BackgroundImage(response.data)
        // console.log('image', newImage);
        AppState.backgroundImage = newImage
        // console.log('new appstate bg image', newImage)
    }


}

export const backgroundImageService = new BackgroundImageService()