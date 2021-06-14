import axios from 'axios';

const Cart_API_BASE_URL = "http://localhost:8088//onlinesportshopee/cart";

class CartService {

    addToCart(prodId)
    {                                           
        return axios.post(Cart_API_BASE_URL + '/addtocart/'+ 101 + '/' + prodId );
    }

    getCartdetails(){
        return axios.get(Cart_API_BASE_URL + '/getCartDetails/'+ 101 );
    }

    deleteCart(cartId){
        return axios.delete(Cart_API_BASE_URL + '/removefromcart/' + cartId);
    }
}

export default new CartService()
