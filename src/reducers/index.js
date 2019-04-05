import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import signup from "./signup";


const peramaxApp = combineReducers({
  signup,
  form: formReducer,
})

export default peramaxApp