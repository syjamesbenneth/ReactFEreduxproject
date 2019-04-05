import React from 'react'
import PropTypes from 'prop-types'
import { DropdownV2 } from 'carbon-components-react'
import Select from 'react-select';
import 'react-select/dist/react-select.css';

export const DropdownInput = ({ input, className, type, items, meta: { touched, error, warning }  }) => (
	<div className="bx--dropdown">
		<Select
			value={input.value}
			options={items}
			onChange={(value) => input.onChange(value)}
			onBlur={() => input.onBlur(input.value)} />
		<br />
		{touched && (error || warning)? <div>{'is required'}<br /></div>: '' }
	</div>
)

DropdownInput.propTypes = {
	input: PropTypes.object.isRequired,
	className: PropTypes.string,
	type: PropTypes.func,
	items: PropTypes.array
}

export default DropdownInput