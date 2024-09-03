import React from 'react';
import PropTypes from 'prop-types';
import { containerStyles } from '../../styles/styles';

function MainContainer(props) {
	return (
		<div
			className={containerStyles['main-container']}
			style={{
				...props.style,
			}}>
			{props.children}
		</div>
	);
}

MainContainer.propTypes = {
	children: PropTypes.node,
	style: PropTypes.object,
};

export default MainContainer;
