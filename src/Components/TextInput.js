import React from 'react';
import PropTypes from 'prop-types';

function TextInput (props) {
	return (
		<form>
			<input type='text' value={props.value} onChange={props.handleChange}/>
		</form>
	)
}

TextInput.PropTypes = {
	onChange: PropTypes.func.isRequired
};

export default TextInput;