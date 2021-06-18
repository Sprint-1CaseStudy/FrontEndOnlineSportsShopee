import axios from 'axios';

const User_API_BASED_URL = "http://localhost:8088/onlinesportshopee/login";

class userService {

    addUser(user) {   
        return axios.post(User_API_BASED_URL + '/add-user',user);
    }
    loginInUser(user){
        return axios.post(User_API_BASED_URL + '/signin',user);
    }
    changePassword(user){
        return axios.put(User_API_BASED_URL + '/changepassword',user);
    }

}


export default new userService()

