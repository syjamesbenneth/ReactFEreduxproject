import React from 'react';

import { FormGroup, FormItem, FormLabel, Button, DatePickerInput } from 'carbon-components-react';
import { Field, Fields } from 'redux-form';

import { required } from 'redux-form-validators';

import DropdownInput from './DropdownInput';
import { TextInputComponent, DisabledTextInputComponent } from './TextInputComponent';
import DatePickerComponent from './DatePickerComponent';
import { birthOptions, residencyOptions, stateOptions, stateSuburb, provinceCities, provinceOptions } from './const';

export default props => {
    const {
        pristine,
        submitting,
        signupProgress,
        signupRegress,
        getState,
        changeState,
        getProvince,
        changeProvince
    } = props;
    return (
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
                          onChange={(value) => changeState(value)}
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
                          items={stateSuburb[getState]}
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
                          onChange={(value) => changeProvince(value)}
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
                        items={provinceCities[getProvince]}
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
                  <Button kind="secondary" disabled={pristine || submitting} onClick={() => signupRegress()}>
                    Back
                  </Button>
                  <Button onClick={() => signupProgress()}>
                    Next
                  </Button>
                </div>
             </FormGroup>
    );
};
