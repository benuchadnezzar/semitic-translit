import React from 'react';
import PropTypes from 'prop-types';

function TextDisplay (props) {
	return (
		<p>
			{props.textDisplay}
		</p>
	)
}

TextDisplay.PropTypes = {
	textDisplay: PropTypes.string.isRequired
};

export default TextDisplay;