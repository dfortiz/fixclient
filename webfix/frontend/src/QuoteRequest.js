import axios from 'axios';
const API_URL = 'http://localhost:8000';

export default class QuoteRequest{

    constructor(){}

    startQuote(quote_form){
        const url = `${API_URL}/api/quote/`;
        return axios.post(url,quote_form);
    }
}
