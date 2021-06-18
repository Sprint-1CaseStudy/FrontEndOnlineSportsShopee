import axios from 'axios';

const Cart_API_BASE_URL = "http://localhost:8088//onlinesportshopee/cart";

var custId = sessionStorage.getItem("custId");

class CartService {

    addToCart(prodId)
    {                                           
        return axios.post(Cart_API_BASE_URL + '/addtocart/'+ custId + '/' + prodId );
    }

    getCartdetails(){
        return axios.get(Cart_API_BASE_URL + '/getCartDetails/'+ custId );
    }

    deleteCart(cartId){
        return axios.delete(Cart_API_BASE_URL + '/removefromcart/' + cartId);
    }
}

export default new CartService()
