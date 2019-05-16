import React, { Component } from 'react';
import { connect } from 'react-redux';

import 'rc-steps/assets/index.css';
import 'rc-steps/assets/iconfont.css';
import Steps, { Step } from 'rc-steps';
import { Form, formValueSelector, reduxForm } from 'redux-form';

import { signup } from '../actions';

import Header from '../components/Header';
import SignUpBody from '../components/SignUpBody';
import SignUpStep1 from '../components/SignUpStep1';
import SignUpStep2 from '../components/SignUpStep2';

const mapStateToProps = state => {
    return {
	getRegProgress: state.signup.progress,
	getRegState: state.signup.signupSuccess,
        getState: state.signup.state,
        getProvince: state.signup.province
    };
};


const mapDispatchToProps = dispatch => {
    return {
	signupSubmit: (payload) => {
	    dispatch(signup.signupSubmit(payload));
	},
	signupProgress: () => {
	    dispatch(signup.signupForward());
	},
	signupRegress: () => {
	    dispatch(signup.signupBackward());
	},
        changeProvince: (payload) => {
            dispatch(signup.changeProvince(payload));
        },
        changeState: (payload) => {
            dispatch(signup.changeState(payload));
        }
    };
};


class SignUp extends Component {

    handleSignup = values => {
	let payload = {
	    country: "Australia",
	    email: values.email,
	    bday: new Date(values.birthdate).toISOString(),
	    password: values.password,
	    fname: values.first_name,
	    mname: values.middle_name,
	    lname: values.last_name,
	    contact_no: values.mobile_no,
	    address: values.street_origin,
	    state: values.state_origin.value,
	    suburb: values.suburb_origin.value,
	    place_of_birth: values.birthplace.label,
	    source_of_inc: values.source_of_income,
	    occupation: values.occupation,
	    citizenship: values.citizenship,
	    post_code: values.postal_code_origin,
	    residency: values.residency_status.label,
	    address_ph: `${values.street_philippines}, ${values.city_philippines.value}, ${values.province_philippines.value}.`
	};	
	this.props.signupSubmit(payload);
    }

    render(){
        const progress = this.props.getRegProgress;
	const { first_name,
		middle_name, 
		last_name,
		email_address,
		password,
		confirm_password,
		birthdate,
		birthplace,
		source_of_income,	    
		occupation,
		citizenship,
		residency_status,
		mobile_no,
		street_origin,
		country_origin,
		state_origin,
		suburb_origin,
		postal_code_origin,
		street_philippines,
		province_philippines,
		city_philippines,
		postal_code_philippines, 
		signup,
		handleSubmit,
		pristine,
		submitting,
                getState,
                changeState,
                getProvince,
                changeProvince,
                signupProgress,
                signupRegress } = this.props;
	return (
		<div>
		  <Header/>
                  <SignUpBody progress={progress}>
                    <Form onSubmit={handleSubmit(this.handleSignup)}>
                      { progress === 0 ?
                        <SignUpStep1
                          pristine={pristine}
                          submitting={submitting}
                          signupProgress={() => signupProgress}/>
                        : progress === 1 ?
                        <SignUpStep2
                          getState={getState}
                          changeState={v => changeState(v)}
                          getProvince={getProvince}
                          changeProvince={v => changeProvince(v)}
                          signupProgress={() => signupProgress}
                          signupRegress={() => signupRegress}/>
                        : <div>hello</div>
            }
                    </Form>
                  </SignUpBody>
		</div>
	);
    }
}

const selector = formValueSelector('signupForm');
SignUp = connect(mapStateToProps, mapDispatchToProps)(SignUp);
SignUp = reduxForm({ form: 'signupForm'})(SignUp);
SignUp = connect(state => {
    const {first_name,
	   middle_name, 
	   last_name,
	   email_address,
	   password,
	   confirm_password,
	   birthdate,
	   birthplace,
	   occupation,
	   source_of_income,	 
	   citizenship,
	   residency_status,
	   mobile_no,
	   street_origin,
	   country_origin,
	   state_origin,
	   suburb_origin,
	   postal_code_origin,
	   street_philippines,
	   province_philippines,
	   city_philippines,
	   postal_code_philippines
	  } = selector(state,
		       'first_name',
		       'middle_name', 
		       'last_name',
		       'email',
		       'password',
		       'confirm_password',
		       'birthdate',
		       'birthplace',
		       'occupation',
		       'source_of_income',
		       'citizenship',
		       'residency_status',
		       'mobile_no',
		       'street_origin',
		       'country_origin',
		       'state_origin',
		       'suburb_origin',
		       'postal_code_origin',
		       'street_philippines',
		       'province_philippines',
		       'city_philippines',
		       'postal_code_philippines');
    return {
	first_name,
	middle_name, 
	last_name,
	email_address,
	password,
	confirm_password,
	birthdate,
	birthplace,
	occupation,
	citizenship,
	residency_status,
	mobile_no,
	street_origin,
	country_origin,
	state_origin,
	suburb_origin,
	postal_code_origin,
	street_philippines,
	province_philippines,
	city_philippines,
	postal_code_philippines,
    };
})(SignUp);

export default SignUp;
