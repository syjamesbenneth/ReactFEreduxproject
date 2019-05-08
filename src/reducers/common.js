import { LOGIN, LOGOUT, SIGNUP_SUCCESS } from '../actions/constants';

const initialState = { token: null, user: null };

export default (state=initialState, action) => {
    switch(action.type){
    case LOGIN:
    case SIGNUP_SUCCESS:
	return { ...state,
		 token: action.data.token,
	         user: action.data.user };
    case LOGOUT:
	return { ...state, token: null, user: null };
    default:
	return state;
    }
};
