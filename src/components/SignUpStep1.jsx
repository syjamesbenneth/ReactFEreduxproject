import React from 'react';
import { required, email, confirmation } from 'redux-form-validators';

import { FormGroup, Button } from 'carbon-components-react';
import { Field } from 'redux-form';
import { TextInputComponent } from './TextInputComponent';

export default props => {
    const {
        pristine,
        submitting,
        signupProgress
    } = props;
    return(
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
          <Button className="float-right" disabled={pristine || submitting} onClick={signupProgress()}>
            Next
          </Button>
        </FormGroup>
    );
};
