import { SIGNUP_REQUEST, SIGNUP_SUCCESS,
	 SIGNUP_FAILURE, SIGNUP_FORWARD, SIGNUP_BACKWARD,
         CHANGE_STATE, CHANGE_PROVINCE } from '../actions/constants';

import signupAction from '../actions/';


const initialState = {
    user: null,
    progress: 0,
    state: '',
    province: ''
};

const ACTION_HANDLERS = {
    [CHANGE_PROVINCE]: (state, payload) => {
	return { ...state, province: payload.data }
    },
    [CHANGE_STATE]: (state, payload) => {
	return { ...state, state: payload.data }
    },
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
