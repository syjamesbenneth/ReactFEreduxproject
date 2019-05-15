import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Field, Fields, reduxForm, formValueSelector } from 'redux-form'
import { required, email, confirmation, generateValidation } from 'redux-form-validators'
import PropTypes from 'prop-types'

import { signup } from '../actions' 
import axios from 'axios'

import { Form, FormGroup, Button, Tile, DatePickerInput, FormItem, FormLabel } from 'carbon-components-react'
import 'rc-steps/assets/index.css'
import 'rc-steps/assets/iconfont.css'
import Steps, { Step } from 'rc-steps'

import peramaxLogo from './peramax-logo.svg'
import DropdownInput from './DropdownInput'
import { DisabledTextInputComponent, TextInputComponent } from './TextInputComponent'
import DatePickerComponent from './DatePickerComponent'

import { birthOptions, residencyOptions, stateOptions, stateSuburb, provinceCities, provinceOptions } from './const'


// Container layer for Presentation Components
class SignUp extends Component {   
    static propTypes = {     
	signupSubmit:PropTypes.func.isRequired,
	pristine: PropTypes.bool.isRequired,
	submitting: PropTypes.bool.isRequired,
	invalid: PropTypes.bool.isRequired
    }
    
    handleSignup = (values) => {
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

    render() {
	const progress = this.props.getRegProgress
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
		submitting } = this.props
	
	return (
	    <div>
	      <div className="row">
		<div className="col-md-4 blue">
		  <br />
		</div>
		<div className="col-md-4 red">
		  <br />
		</div>
		<div className="col-md-4 yellow">
		  <br />
		</div>
	      </div>
	      <div className="signup-body">
		<center><img className="logo-img" src={peramaxLogo} alt="PeraMax Logo"/><br /><br /></center>
		<Steps labelPlacement="vertical" current={progress}>
		  <Step title="Account" />
		  <Step title="Sender Info" />
		  <Step title="Submit" />
		  <Step title="Done" />
		</Steps><br /><br />
		<Tile className="signup-box">
          <Form className="some-class" onSubmit={handleSubmit(this.handleSignup)}>
          { progress === 0 ?  
              <FormGroup className="some-class" legendText="">
                <div className="form-field">
                  <Field
                    component={TextInputComponent}
                    labelText="First Name˟"
                    id="first_name"
                    name="first_name"
                    placeholder="Juan"
                    type="text"
                    validate={[ required() ]}
                  />
                </div>
                <div className="form-field">
                  <Field
                    component={TextInputComponent}
                    labelText="Middle Name"
                    id="middle_name"
                    name="middle_name"
                    placeholder="Mendoza"
                    type="text"
                  />
                </div>
                <div className="form-field">
                  <Field
                    component={TextInputComponent}
                    labelText="Last Name˟"
                    id="last_name"
                    name="last_name"
                    placeholder="Dela Cruz"
                    type="text"
                    validate={[ required() ]}
                  />
                </div>
                <div className="form-field">
                  <Field
                    component={TextInputComponent}
                    labelText="Email˟"
                    id="email"
                    name="email" 
                    placeholder="jdelacruz@gmail.com"
                    type="email"
                    validate={[ required(), email() ]}
                  />
                </div>
                <div className="form-field">
                  <Field
                    component={TextInputComponent}
                    labelText="Password˟"
                    id="password"
                    name="password"
                    placeholder="********"
                    type="password"
                    validate={[ required() ]}
                  />
                </div>
                <div className="form-field">
                  <Field
                    component={TextInputComponent}
                    labelText="Confirm Password˟"
                    id="confirm_password"
                    name="confirm_password"
                    placeholder="********"
                    type="password"
                    validate={[ required(), confirmation({ field: 'password', fieldLabel: 'Password' }) ]}
                  />
                </div>
                    <Button className="float-right" disabled={pristine || submitting} onClick={() => this.props.signupProgress() }>
                Next
                </Button>
              </FormGroup>
          : progress === 1 ? 
              <FormGroup className="some-class" legendText="">
                <div className="form-row">
                  <div className="col-md-6 form-field">
                    <Fields component={DatePickerComponent} names={["birthdate"]} id="date-picker">
                      <DatePickerInput
                        className="some-class"
                        labelText="Birthdate˟"
                        locale="en"
                        placeholder="mm/dd/yyyy"
                        id="birthdate"
                      />
                    </Fields>
                  </div>
                  <div className="col-md-6 form-field">
                    <FormLabel className="some-class">
                      Country of Birth˟
                    </FormLabel>
                    <FormItem>
                      <Field
                        component={DropdownInput}
                        label=""
                        name="birthplace"
                        ref="birthplace"
                        items={birthOptions}
                        validate={[ required() ]}
                      />
                    </FormItem>
                  </div>
                </div>
                <div className="form-field">
                  <Field
                    component={TextInputComponent}
                    labelText="Occupation˟"
                    id="occupation"
                    name="occupation"
                    placeholder="Software Engineer"
                    type="text"
                    validate={[ required() ]}
                  />
                </div>
		<div className="form-field">
		  <Field
		    component={TextInputComponent}
		    labelText="Source of Income"
		    id="source_of_income"
		    name="source_of_income"
		    placeholder="Salary"
		    type="text"
		    validate={[ required() ]}
		  />
		</div>		
                <div className="form-field">
                  <Field
                    component={TextInputComponent}
                    labelText="Citizenship˟"
                    id="citizenship"
                    name="citizenship"
                    placeholder="Filipino"
                    type="text"
                    validate={[ required() ]}
                  />
                </div>
                <div className="form-row">
                  <div className="col-md-12 form-field">
                    <FormLabel className="some-class">
                      Residency Status˟
                    </FormLabel>
                    <FormItem>
                      <Field
                        component={DropdownInput}
                        label=""
                        name="residency_status"
                        ref="residency_status"
                        items={residencyOptions}
                        validate={[ required() ]}
                      />
                    </FormItem>
                  </div>
                </div>
                <div className="form-field">
                  <Field
                    component={TextInputComponent}
                    labelText="Mobile Number˟"
                    id="mobile_no"
                    name="mobile_no"
                    placeholder="+61491570110"
                    type="text"
                    validate={[ required() ]}
                  />
                </div>
                <FormGroup className="some-class" legendText="">
                  <h4>Address (Origin)</h4>
                  <div className="form-field">
                    <Field
                      component={TextInputComponent}
                      labelText="Street˟"
                      id="street_origin"
                      name="street_origin"
                      placeholder="101 Hummingbird Street"
                      type="text"
                      validate={[ required() ]}
                    />
                  </div>
                  <div className="form-row">
                   <div className="col-md-12 form-field">
                      <FormItem>
                        <Field
                          component={DisabledTextInputComponent}
                          labelText="Country*"
			  id="country_origin"
                          name="country_origin"
			  defaultValue="Australia"
			  value="Australia"    
			  type="text"
                          validate={[ required() ]}
			  props={{disabled: true}}    
                        />
                      </FormItem>
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="col-md-6 form-field">
                      <FormLabel className="some-class">
                        State˟
                      </FormLabel>
                      <FormItem>
                        <Field
                          component={DropdownInput}
                          label=""
                          name="state_origin"
                          onChange={(value) => this.props.changeState(value)}
                          items={stateOptions}
                          validate={[ required() ]}
                        />
                      </FormItem>
                    </div>
                    <div className="col-md-6 form-field">
                      <FormLabel className="some-class">
                        Suburb˟
                      </FormLabel>
                      <FormItem>
                        <Field
                          component={DropdownInput}
                          label=""
                          name="suburb_origin"
                          items={stateSuburb[this.props.getState]}
                          validate={[ required() ]}
                        />
                      </FormItem>
                    </div>
                  </div>
                  <div className="form-field">
                    <Field
                      component={TextInputComponent}
                      labelText="Postal Code˟"
                      id="postal_code_origin"
                      name="postal_code_origin"
                      placeholder="6000"
                      type="text"
                      validate={[ required() ]}
                    />
                  </div>
                </FormGroup>
                <FormGroup className="some-class" legendText="">
                  <h4>Address (Philippines)</h4>
                  <div className="form-field">
                    <Field
                      component={TextInputComponent}
                      labelText="Street˟"
                      id="street_philippines"
                      name="street_philippines"
                      placeholder="101 Kalayaan Street"
                      type="text"
                      validate={[ required() ]}
                    />
                  </div>
                  <div className="form-row">
                    <div className="col-md-6 form-field">
                      <FormLabel className="some-class">
                        Province˟
                      </FormLabel>
                      <FormItem>
                        <Field
                          component={DropdownInput}
                          label=""
                          onChange={(value) => this.props.changeProvince(value)}
                          name="province_philippines"
                          items={provinceOptions}
                          validate={[ required() ]}
                        />
                      </FormItem>
                    </div>
                    <div className="col-md-6 form-field">
                      <FormLabel className="some-class">
                        City˟
                      </FormLabel>
                      <FormItem>
                        <Field
                        component={DropdownInput}
                        label=""
                        name="city_philippines"
                        items={provinceCities[this.props.getProvince]}
                        validate={[ required() ]}
                      />
                      </FormItem>
                    </div>
                  </div>
                  <div className="form-field">
                    <Field
                      component={TextInputComponent}
                      labelText="Postal Code˟"
                      id="postal_code_philippines"
                      name="postal_code_philippines"
                      placeholder="1700"
                      type="text"
                      validate={[ required() ]}
                    />
                  </div>
                </FormGroup>
                <div className="float-right">
                  <Button kind="secondary" disabled={pristine || submitting} onClick={() => this.props.signupRegress()}>
                    Back
                  </Button>
                  <Button onClick={() => this.props.signupProgress()}>
                    Next
                  </Button>
                </div>
             </FormGroup>
          : progress === 2 ?
            <FormGroup className="some-class" legendText="">
            <p className="blue-text heading ">Ready to Submit?</p>
            <p className="black-text">Read all your information and click submit.</p>
            <br /><br />

            <p className="black-text">Account Name: <strong>{first_name} {middle_name} {last_name}</strong></p>
            <p className="black-text">Email: <strong> {email_address} </strong></p>
            <p className="black-text">Birthdate: <strong> {birthdate} </strong></p>
            <p className="black-text">Country of Birth: <strong> {birthplace.label} </strong></p>
            <p className="black-text">Occupation: <strong> {occupation} </strong></p>
            <p className="black-text">Citizenship: <strong> {citizenship} </strong></p>
            <p className="black-text">Residency Status: <strong> {residency_status.label} </strong></p>
            <p className="black-text">Mobile Number: <strong> {mobile_no} </strong></p>
            <p className="black-text">Address (Origin): 
              <strong>
                {street_origin}, "Australia", {state_origin.value}, {suburb_origin.value}, {postal_code_origin}
              </strong>
            </p>
            <p className="black-text">Address (Philippines): 
              <strong>
                {street_philippines}, {province_philippines.value}, {city_philippines.value}, {postal_code_philippines}
              </strong>
            </p>
            <br /><br />

            <div className="float-right">
              <Button kind="secondary" onClick={() => this.props.signupRegress()} >
                Back
              </Button>
		  <Button type="submit" disabled={ submitting } >
                Submit
              </Button>
	    </div>
	  </FormGroup>
		: progress === -1 ? <p className="blue-text heading">Registration Successful</p>
		: <p className="red-text heading"> Registration failure, please contact our Customer Support</p>
        }
        </Form>
        </Tile>
      </div>
    </div>
    )
  }
}


const mapStateToProps = state => {
    return {
	getRegProgress: state.signup.progress,
	getRegState: state.signup.signupSuccess,
        getState: state.signup.state,
        getProvince: state.signup.province
    }
}

const mapDispatchToProps = dispatch => {
    return {
	signupSubmit: (payload) => {
	    dispatch(signup.signupSubmit(payload))
	},
	signupProgress: () => {
	    dispatch(signup.signupForward())
	},
	signupRegress: () => {
	    dispatch(signup.signupBackward())
	},
        changeProvince: (payload) => {
            dispatch(signup.changeProvince(payload))
        },
        changeState: (payload) => {
            dispatch(signup.changeState(payload))
        }
    }
}

SignUp = connect(
    mapStateToProps,
    mapDispatchToProps
)(SignUp)


SignUp = reduxForm({
  form: 'signupForm'
})(SignUp)

const selector = formValueSelector('signupForm')
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
    'postal_code_philippines')
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
  }
})(SignUp)

export default SignUp
