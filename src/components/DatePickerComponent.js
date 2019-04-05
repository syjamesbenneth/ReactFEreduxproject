import PropTypes from 'prop-types';
import React, { Component } from 'react'
import { DatePicker, DatePickerInput } from 'carbon-components-react';

class DatePickerComponent extends Component {
  static propTypes = {
    names: PropTypes.arrayOf(PropTypes.string),
    children: PropTypes.node,
  };
  handleChange = (evt) => {
    const [birthDate ] = evt || [];
    const { input: birthInput } = this.props[this.props.names[0]] || {}
    if (birthInput) {
      birthInput.onChange(birthDate.toDateString().substr(4))
    }
  }
  handleFocus = (evt) => {
    const { target } = evt;
    const { names } = this.props;
    const name = target && target.getAttribute('name');
    if (names && name) {
      if (names.indexOf(name) >= 0) {
        const { input } = this.props[name] || {};
        if (input) {
          input.onFocus()
        }
      }
    }
  };

  render() {
    const { names, children, ...remainder } = this.props;
    const datePickerProps = Object.keys(remainder).filter(name => names.indexOf(name) < 0).reduce((o, key) => Object.assign(o, {
      [key]: remainder[key],
    }), {});
    const childrenWithProps = React.Children.toArray(children).map(child => child.type !== DatePickerInput ? child :
      React.cloneElement(child, {
        onFocus: this.handleFocus,
      })
    );
    return (
      <DatePicker
        {...datePickerProps}
        onChange={this.handleChange}
        datePickerType="single"
        dateFormat="m/d/Y">
        {childrenWithProps}
      </DatePicker>
    );
  }
}

export default DatePickerComponent