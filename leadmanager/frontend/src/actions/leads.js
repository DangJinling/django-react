import axios from 'axios';

import { GET_LEADS, DELETE_LEAD, ADD_LEAD, } from './types';
import { createMessage, returnErrors } from './messages';
import { tokenConfig } from './auth';

export const getLeads = () => (dispatch, getState) => {
    axios.get('/api/leads/', tokenConfig(getState))
        .then(res => {
            dispatch({
                type: GET_LEADS,
                payload: res.data
            })
        })
        .catch(err => console.log(err));
}

export const deleteLead = (id) => (dispatch, getState) => {
    axios.delete(`/api/leads/${id}/`, tokenConfig(getState))
        .then(() => {
            dispatch(createMessage({ deleteLead: 'Lead deleted.' }));
            dispatch({
                type: DELETE_LEAD,
                payload: id
            })
        })
        .catch(err => console.log(err));
}

export const addLead = (lead) => (dispatch, getState) => {
    axios.post(`/api/leads/`, lead, tokenConfig(getState))
        .then((res) => {
            dispatch({
                type: ADD_LEAD,
                payload: res.data
            })
        })
        .catch(err => {
            const errors = {
                msg: err.response.data,
                status: err.response.status
            }
            dispatch(returnErrors(errors));
        });
}
