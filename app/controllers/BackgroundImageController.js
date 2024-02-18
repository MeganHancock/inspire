import { AppState } from "../AppState.js";
import { backgroundImageService } from "../services/BackgroundImageService.js";
import { Pop } from "../utils/Pop.js";

function _drawBackgroundImage() {
    const bgImage = AppState.backgroundImage
    // console.log('bg img', bgImage.imgUrl)
    // console.log('large img', bgImage.largeImgUrl)
    document.body.style.backgroundImage = `url(${bgImage.largeImgUrl}), url(${bgImage.imgUrl})`

}

export class BackgroundImageController {

    constructor() {
        this.getImage()
        AppState.on('backgroundImage', _drawBackgroundImage)
    }

    async getImage() {
        try {
            await backgroundImageService.getImage()
        } catch (error) {
            Pop.error(error)
            console.error(error);
        }
    }
}