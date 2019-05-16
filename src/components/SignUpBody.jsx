import React from 'react';

import Steps, { Step } from 'rc-steps';

import peramaxLogo from './peramax-logo.svg';

export default props => {
    const {
        progress
    } = props;
    return (
        <div className="signup-body">
          <center>
            <img className="logo-img" src={ peramaxLogo } alt="PeraMax Logo"/><br /><br />
          </center>
          <Steps labelPlacement="vertical" current={ progress }>
	    <Step title="Account" />
	    <Step title="Sender Info" />
	    <Step title="Submit" />
	    <Step title="Done" />
          </Steps>
          { props.children }
        </div>
    );
};
