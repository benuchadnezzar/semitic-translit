import React from 'react';
import PropTypes from 'prop-types';

function Dropdown (props) {
	return (
		<select onChange={props.handleChange}>
			<option default>{props.placeholder}</option>
			<option value='judeoArabic'>Judeo-Arabic</option>
			<option value='arabic'>Arabic</option>
		</select>
	)
}

Dropdown.PropTypes = {
	onChange: PropTypes.func.isRequired,
	placeholder: PropTypes.string.isRequired
};

export default Dropdown;