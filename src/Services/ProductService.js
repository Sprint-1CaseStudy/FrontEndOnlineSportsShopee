import axios from 'axios';
const PRODUCT_API_BASE_URL = "http://localhost:8088/onlinesportshopee/products";

class ProductService {

    addProduct(product) {
        return axios.post(PRODUCT_API_BASE_URL+ '/addproduct', product);
    }

    deleteProduct(productId) {
        return axios.delete(PRODUCT_API_BASE_URL + '/removeproduct/product/' + productId);
    }

    updateProduct(productId, product) {
        return axios.put(PRODUCT_API_BASE_URL + '/updateproduct/' + productId, product);
    }

    getProductById(prodId) {
        return axios.get(PRODUCT_API_BASE_URL + '/getproduct/' + prodId);
    }

    getAllProducts() {
        return axios.get(PRODUCT_API_BASE_URL + '/getallproduct');
    }

}
export default new ProductService()