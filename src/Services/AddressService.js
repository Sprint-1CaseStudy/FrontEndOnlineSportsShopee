import axios from 'axios';
const ADDRESS_API_BASE_URL = "http://localhost:8088/onlinesportshopee/address";

var custId = sessionStorage.getItem("custId");

class AddressService {

    addAddress(address) {
        return axios.post(ADDRESS_API_BASE_URL + '/addAddress/' + custId , address);
    }

    deleteAddress(addressId) {
        return axios.delete(ADDRESS_API_BASE_URL + '/removeAddress/Address/' + addressId);
    }

    updateAddress(addressId, address) {
        return axios.put(ADDRESS_API_BASE_URL + '/updateAddress/' + addressId, address);
    }

    getAddressById(addressId) {
        return axios.get(ADDRESS_API_BASE_URL + '/getaddressbyId/' + addressId);
    }
    
    getAllAddress() {
        return axios.get(ADDRESS_API_BASE_URL + '/getaddressDetails/' + custId);
    }
}
export default new AddressService()