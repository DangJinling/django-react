import axios from 'axios';
import { returnErrors } from './messages';

import {
    USER_LOADED,
    USER_LOADING,
    AUTH_ERROR,
    LOGIN_FAIL,
    LOGIN_SUCCESS,
    LOGOUT_SUCCESS,
    REGISTER_SUCCESS,
    REGISTER_FAIL
} from './types';

// check token & load user
export const loadUser = () => (dispatch, getState) => {
    //user loading
    dispatch({ type: USER_LOADING });

    axios.get('/api/auth/user', tokenConfig(getState)).then(res => {
        dispatch({
            type: USER_LOADED,
            payload: res.data
        });
    }).catch(err => {
        dispatch(returnErrors(err.response.data,
            err.response.status
        ));
        dispatch({
            type: AUTH_ERROR
        })
    })
}

// Login User
export const login = (email, password) => dispatch => {

    //headers
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };

    const body = JSON.stringify({ email, password });

    axios.post('/api/auth/login', body, config)
        .then(res => {
            dispatch({
                type: LOGIN_SUCCESS,
                payload: res.data
            });
        }).catch(err => {
            dispatch(returnErrors(err.response.data,
                err.response.status
            ));
            dispatch({
                type: LOGIN_FAIL
            })
        })
}

//REGISTER
export const register = ({ first_name, last_name, password, email }) => dispatch => {

    //headers
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };

    const body = JSON.stringify({ first_name, last_name, password, email });

    axios.post('/api/auth/register', body, config)
        .then(res => {
            dispatch({
                type: REGISTER_SUCCESS,
                payload: res.data
            });
        }).catch(err => {
            dispatch(returnErrors(err.response.data,
                err.response.status
            ));
            dispatch({
                type: REGISTER_FAIL
            })
        })
}

//LOGOUT 
export const logout = () => (dispatch, getState) => {

    axios.post('/api/auth/logout/', null, tokenConfig(getState)).then(res => {
        dispatch({
            type: LOGOUT_SUCCESS,
        });
    }).catch(err => {
        dispatch(returnErrors(err.response.data,
            err.response.status
        ));
    })
}

//setup config with token - helper func
export const tokenConfig = getState => {
    //get token from state
    const token = getState().auth.token;

    //headers
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };

    //if token, add to headers config
    if (token) {
        config.headers['Authorization'] = `Token ${token}`;
    }

    return config;
}
