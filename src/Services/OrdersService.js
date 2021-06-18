import axios from 'axios';

const Order_API_BASE_URL = "http://localhost:8088//onlinesportshopee";

var custId = sessionStorage.getItem("custId");

class OrderService {

    addToorders()
    {                                           
        return axios.post(Order_API_BASE_URL + '/add-order/'+ custId);
    }

    getorders(){                              
        return axios.get(Order_API_BASE_URL + '/getOrder/'+ custId);
    }

}

export default new OrderService()
