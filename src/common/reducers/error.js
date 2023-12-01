import { SET_ERROR, CLEAR_ERROR } from "../actions/type";

const inistialState = {}

export default function (state = inistialState, action) {
    const {type, payload} = action

    switch(type){
        case SET_ERROR:
            return {error: payload}
        case CLEAR_ERROR:
            return {error: ''}
        default:
            return state
    }

}