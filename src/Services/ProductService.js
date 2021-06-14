import axios from 'axios';
const PRODUCT_API_BASE_URL = "http://localhost:8088/onlinesportshopee/products";

class ProductService {

    getProductById(prodId) {
        return axios.get(PRODUCT_API_BASE_URL + '/getproduct/' + prodId);
    }

    getAllProducts() {
        return axios.get(PRODUCT_API_BASE_URL + '/getallproduct');
    }

}
export default new ProductService()