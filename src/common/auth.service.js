import axios from 'axios'
import { API_URL } from './constants'

class AuthService {
    login(username, password){
        return axios.post(API_URL + 'auth/token', { username, password, grant_type: 'password' })
            .then(response => {
                let user = {
                    id: response.data.id,
                    name: response.data.name,
                    type: response.data.type,
                };

                let { auth_token } = response.data;
                localStorage.setItem(
                    'token',
                    JSON.stringify({ auth_token, user }),
                )
                return response.data
            })
    }
    logout(){
        console.log('logout2')
        localStorage.removeItem('token')
    }
}

export default new AuthService()