import { Map } from 'immutable'
import { signupSubmit } from '../actions/signup'

export const SIGNUP_REQUEST = 'SIGNUP_REQUEST'
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS'
export const SIGNUP_FAILURE = 'SIGNUP_FAILURE'

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

export const actions = { signupSubmit }

const initialState = new Map({
  user: null
})


const ACTION_HANDLERS = {
  [SIGNUP_REQUEST]: (state, { payload }) => {
    return state.set('isLoading', true)
  },
  [SIGNUP_SUCCESS]: (state, { payload }) => {
    return state.set('isLoading', false)
	  .set('signupSuccess', true);
  },
  [SIGNUP_FAILURE]: (state, { payload }) => {
    return state.set('signupError', true)
    .set('errors', payload)
    .set('signupSuccess', false)
  }
}


export default function signup(state=initialState, action) {
  const handler = ACTION_HANDLERS[action.type]
  return handler ? handler(state, action) : state
} 
