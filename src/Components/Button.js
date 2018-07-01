import React from 'react';
import PropTypes from 'prop-types';

function Button (props) {
	return (
		<button onClick = {props.handleClick}>
			{props.buttonText}
		</button>
	)
}

Button.PropTypes = {
	buttonText: PropTypes.string.isRequired
};

export default Button;