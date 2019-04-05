import React from 'react'
import PropTypes from 'prop-types'
import { TextInput } from 'carbon-components-react'

export const TextInputComponent = ({ input, className, id, labelText, placeholder, type, meta: { touched, error, warning } }) => (
	<div>
	{touched && ((error &&
		 <TextInput
				className={className}
				id={id}
				type={type}
				labelText={labelText} 
				value={input.value}
				placeholder={placeholder}
				invalid
				required
				invalidText={error}
				onChange={(value) => input.onChange(value)}
				onBlur={() => input.onBlur(input.value)} />) 
		|| (warning &&
		 <TextInput
				className={className}
				id={id}
				type={type}
				labelText={labelText} 
				value={input.value}
				placeholder={placeholder}
				invalid
				invalidText={warning}
				onChange={(value) => input.onChange(value)}
				onBlur={() => input.onBlur(input.value)} />))
		|| 
		<TextInput
			className={className}
			id={id}
			type={type}
			labelText={labelText} 
			value={input.value}
			placeholder={placeholder}
			onChange={(value) => input.onChange(value)}
			onBlur={() => input.onBlur(input.value)} />
	}
	</div>
)

TextInputComponent.propTypes = {
	input: PropTypes.object.isRequired,
	className: PropTypes.string,
	id: PropTypes.string,
	labelText: PropTypes.string,
	placeholder: PropTypes.string,
	type: PropTypes.string
}

export default TextInputComponent