import axios from 'axios';

const ONLINESPORTSHOPEE_API_BASE_URL = "http://localhost:8088/onlinesportshopee/cards";

var custId = sessionStorage.getItem("custId");

class CardService {

    addCard(card){
        return axios.post(ONLINESPORTSHOPEE_API_BASE_URL + '/add-card/' + custId, card);
    }

    getCardDetails(id){
        return axios.get(ONLINESPORTSHOPEE_API_BASE_URL + '/get-card-details/' + id);
    }

    getAllCards(){
        return axios.get(ONLINESPORTSHOPEE_API_BASE_URL + '/get-all-cards/' + custId);
    }

    deleteCard(id){
        return axios.delete(ONLINESPORTSHOPEE_API_BASE_URL + '/remove-card/card/' + id)
    }
}

export default new CardService()