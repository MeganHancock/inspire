import { api } from "./AxiosService.js"
import { AppState } from "../AppState.js";
import { Quote } from "../models/Quote.js";

class QuoteService {
    async getQuote() {
        const response = await api.get('api/quotes')
        const newQuote = new Quote(response.data)
        console.log('quote response', response.data);
        AppState.quote = newQuote
        console.log('quote class model', newQuote);

    }


}

export const quoteService = new QuoteService()