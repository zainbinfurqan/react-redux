

import { LOGIN, LOGOUT } from '../action/authAction'


const initialState = {
    auth: {},
    isLogin: false,
}

export default (state = initialState, action) => {
    switch (action.type) {
        case LOGIN:
            return { ...state, auth: action.payload, isLogin: true }
        case LOGOUT:
            return { ...state, auth: {}, isLogin: false }
        default:
            return state;
    }
}