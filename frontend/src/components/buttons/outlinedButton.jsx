import React from 'react';
import PropTypes from 'prop-types';
import buttonStyles from './styles/buttons.module.css';
import fontStyles from '../../styles/fonts.module.css';

function OutlinedButton(props) {
	const className = [
		buttonStyles['outlined-button'],
		fontStyles['button-text'],
	].join(' ');

	return (
		<button className={className} style={{ ...props.style }}>
			{props.children}
		</button>
	);
}

OutlinedButton.propTypes = {
	style: PropTypes.object,
	children: PropTypes.node,
};

export default OutlinedButton;
