import { SIGNUP_REQUEST, SIGNUP_SUCCESS,
	 SIGNUP_FAILURE, SIGNUP_FORWARD, SIGNUP_BACKWARD } from '../actions/constants';

import signupAction from '../actions/';


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

export function signupForward(){
    return {
	type: SIGNUP_FORWARD
    }
}

export function signupBackward(){
    return {
	type: SIGNUP_BACKWARD
    }
}


const initialState = {
    user: null,
    progress: 0
};

const ACTION_HANDLERS = {
    [SIGNUP_REQUEST]: (state, { payload }) => {
	return { ...state, isLoading: true }
    },
    [SIGNUP_SUCCESS]: (state, { payload }) => {
	let isLoading     = false,
	    signupSuccess = true;
	return { ...state, isLoading, progress: -1};
    },
    [SIGNUP_FAILURE]: (state, { payload }) => {
	let errors        = payload,
	    signupSuccess = false;
	return { ...state, errors, progress: -2};
    },
    [SIGNUP_FORWARD]: state => {
	return { ...state, progress: state.progress+1 }
    },
    [SIGNUP_BACKWARD]: state => {
	return { ...state, progres: state.progress-1 }
    }
};


export default function signup(state=initialState, action) {
    const handler = ACTION_HANDLERS[action.type]
    return handler ? handler(state, action) : state
} 
