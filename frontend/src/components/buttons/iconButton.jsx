import React from 'react';
import PropTypes from 'prop-types';
import buttonStyles from './styles/buttons.module.css';
import fontStyles from '../../styles/fonts.module.css';

import Icon from '../../components/icons/icon';

function IconButton(props) {
	const className = [
		buttonStyles['icon-button'],
		fontStyles['button-text'],
	].join(' ');

	const name = props.icon.name || 'star';
	const color = props.icon.color || '#fff';
	const size = props.icon.size || 32;

	return (
		<button className={className} style={{ ...props.style }}>
			<div className={buttonStyles['icon-button-inner-wrapper']}>
				<Icon name={name} color={color} size={size} />
			</div>
			{props.children}
		</button>
	);
}

IconButton.propTypes = {
	style: PropTypes.object,
	children: PropTypes.node,
	icon: PropTypes.object,
};

export default IconButton;
