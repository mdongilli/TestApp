export default function authHeader(){
    const token = JSON.parse(localStorage.getItem('token'))
    if (token && token.auth_token){
        return {Authorization: 'Bearer ' + token.auth_token}
    } else {
        return {}
    }
}