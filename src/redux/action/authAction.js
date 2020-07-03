

export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';

const action = {};


action.Login = function (data) {
    return async function (dispatch) {
        try {
            dispatch({ type: LOGIN, payload: data })
        } catch (error) {
            console.log(error)
        }
    }
}


action.Logout = function (data) {
    return async function (dispatch) {
        try {
            dispatch({ type: LOGOUT, })
        } catch (error) {
            console.log(error)
        }
    }
}


export default action;