import React from 'react';
import PropTypes from 'prop-types';
import buttonStyles from './styles/buttons.module.css';
import fontStyles from '../../styles/fonts.module.css';

function FilledButton(props) {
	const className = [
		buttonStyles['filled-button'],
		fontStyles['button-text'],
	].join(' ');

	return (
		<button className={className} style={{ ...props.style }}>
			{props.children}
		</button>
	);
}

FilledButton.propTypes = {
	style: PropTypes.object,
	children: PropTypes.node,
};

export default FilledButton;
