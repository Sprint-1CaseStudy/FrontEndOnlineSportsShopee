import axios from 'axios';

const Customer_API_BASED_URL = "http://localhost:8088/onlinesportshopee/customers";

class customerService {

    addCustomer(customer) {   
        return axios.post(Customer_API_BASED_URL + '/addCustomer',customer);
    }
    
    loginInCustomer(customer){
        return axios.post(Customer_API_BASED_URL + '/login',customer);
    }

    Signout()
    {
        return axios.post(Customer_API_BASED_URL + '/signout');
    }

    changePassword(customer){
        return axios.put(Customer_API_BASED_URL + '/changepassword',customer);
    }

    getAllCustomers(){
        return axios.get(Customer_API_BASED_URL + '/Customers');
    }

    getCustomerById(custID){
        return axios.get(Customer_API_BASED_URL + '/getCustomerDetails/' + custID);
    }

    deleteCustomer(custID){
        return axios.delete(Customer_API_BASED_URL + '/removeCustomer/Customer/' + custID);
    }

    updateCustomer(custID){
        return axios.update(Customer_API_BASED_URL + '/updateCustomer/'+ custID);
    }

}


export default new customerService()