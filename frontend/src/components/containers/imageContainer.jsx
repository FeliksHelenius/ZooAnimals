import React from 'react';
import PropTypes from 'prop-types';

import { containerStyles } from '../../styles/styles';

function ImageContainer(props) {
	return (
		<div
			style={{ backgroundImage: `url(${props.imagePath})`, ...props.style }}
			className={containerStyles['image-container']}>
			{props.children}
		</div>
	);
}

ImageContainer.propTypes = {
	children: PropTypes.node,
	imagePath: PropTypes.string,
	style: PropTypes.object,
};

export default ImageContainer;
