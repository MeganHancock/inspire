import { AppState } from "../AppState.js";
import { quoteService } from "../services/QuoteService.js";
import { Pop } from "../utils/Pop.js";
import { setHTML, setText } from "../utils/Writer.js";

function _drawQuote() {

    setHTML('quote', AppState.quote.QuoteHTMLTemplate)
}

export class QuoteController {

    constructor() {
        AppState.on('account', this.getQuote)
        AppState.on('quote', _drawQuote)
    }

    async getQuote() {
        try {
            console.log('getting quote')
            await quoteService.getQuote()

        } catch (error) {
            console.error(error);
            Pop.error(error)
        }
    }
}