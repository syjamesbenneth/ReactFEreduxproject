import { push } from 'react-router-redux';
import axios from 'axios';
import {
    SIGNUP_FORWARD,
    SIGNUP_BACKWARD,
    SIGNUP_SUCCESS,
    SIGNUP_REQUEST,
    SIGNUP_FAILURE,
    CHANGE_STATE,
    CHANGE_PROVINCE
} from './constants';

export const signupForward = () => {
    return {
	type: SIGNUP_FORWARD
    }
}

export const signupBackward = () => {
    return {
	type: SIGNUP_BACKWARD
    }
}

export function signupRequest (payload) {
  return {
    type: SIGNUP_REQUEST,
    payload
  }
}

export function signupSuccess (payload) {
  return {
    type: SIGNUP_SUCCESS,
    payload
  }
}

export function signupFailure (payload) {
  return {
    type: SIGNUP_FAILURE,
    payload
  }
}

export function changeState(payload){
    return {
	type: CHANGE_STATE,
	data: payload
    }
}

export function changeProvince(payload){
    return {
	type: CHANGE_PROVINCE,
	data: payload
    }
}

// TODO: Create Signup Generator

/*function* watchSignup(){
    yield takeLatest('SIGNUP_REQUEST', signup);
}*/

export const signupSubmit = (payload) => {
    return (dispatch, getState) => {
	dispatch(signupRequest(payload));
	axios.post(`https://agents.peramax.app/api/auth/register`, payload)
	    .then(res => {
		if(res.status >= 200 && res.status < 300) {
		    console.log('success:', res);
		    return res;
		} else {
		    console.log('fail:', res);
		    dispatch(signupFailure("fail"));
		}
	    }, err => {
		throw new Error(err);
	    })
	    .then(res => {
		dispatch(signupSuccess(null));
	    }).catch(err => {
		dispatch(signupFailure(err));
	    });
    }
}
