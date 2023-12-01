import {
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT,
    SET_ERROR
} from './type'

import authService from '../auth.service'

export const login = (username, password) =>(dispatch) =>{
    return authService.login(username, password).then(
        (data) => {
            dispatch({
                type:LOGIN_SUCCESS,
                payload: {token: data}
            })
            return Promise.resolve()
        },
        (error) => {
            const message =
            (error.response &&
                error.response.data &&
                error.response.data.message) || 
            error.message ||
            error.toString()

            dispatch({
                type: LOGIN_FAIL
            })

            dispatch({
                type: SET_ERROR,
                payload: message
            })

            return Promise.reject()
        }
    )
}

export const logout = () => (dispatch) =>{
    console.log('logout1')
    authService.logout()

    dispatch({
        type: LOGOUT
    })
}