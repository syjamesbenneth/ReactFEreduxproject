import { push } from 'react-router-redux';
import axios from 'axios';
import {
    signupRequest,
    signupSuccess,
    signupFailure,
    SIGNUP_FORWARD,
    SIGNUP_BACKWARD
} from '../reducers/signup';

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


/*export const signupSubmit = (payload) => {
  return (dispatch, getState) => {
    dispatch(signupRequest(payload))

    let headers = {"Content-Type": "application/json"}
    let body = JSON.stringify({payload, })
    return fetch("/api/signup/", {headers, method: "POST", body})
      .then((res) => {
        if (res.status >= 200 && res.statys <= 300) {
          console.log('success:', res)
          return res
        } else {
          console.log('fail:', res)
        }
      })
      .then(({ user }) => {
        dispatch(signupSuccess({ user }))
        dispatch(push('/'))
      })
      .catch((err) => {
        err.json().then((error) => {
          dispatch(signupFailure(error))
        })
      })
  }
}*/
