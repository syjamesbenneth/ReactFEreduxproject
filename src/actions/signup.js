import { push } from 'react-router-redux';
import axios from 'axios';
import {
    signupRequest,
    signupSuccess,
    signupFailure
} from '../reducers/signup';

import {
    SIGNUP_FORWARD,
    SIGNUP_BACKWARD
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
