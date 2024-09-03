import React from 'react';
import Icons from './icons.svg';
import PropTypes from 'prop-types';

function Icon({ name, color, size, onClick, style }) {
	return (
		<svg
			className={`icon icon-${name}`}
			style={{
				fill: color,
				stroke: color,

				...style,
			}}
			width={size}
			height={size}
			onClick={onClick}>
			<use xlinkHref={`${Icons}#icon-${name}`} />
		</svg>
	);
}

Icon.propTypes = {
	name: PropTypes.string.isRequired,
	color: PropTypes.string,
	size: PropTypes.number,
	onClick: PropTypes.func,
	style: PropTypes.object,
};

export default Icon;
