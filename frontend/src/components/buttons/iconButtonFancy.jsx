import React from 'react';
import PropTypes from 'prop-types';
import buttonStyles from './styles/buttons.module.css';
import fontStyles from '../../styles/fonts.module.css';

import Icon from '../../components/icons/icon';
import { Link } from 'react-router-dom';

function IconButtonFancy(props) {
	let [isHovering, setIsHovering] = React.useState(false);

	const className = [
		buttonStyles['icon-button-fancy'],
		fontStyles['button-text'],
	].join(' ');

	const name = props.icon.name || 'close';
	const color = props.icon.color || '#fff';
	const size = props.icon.size || 32;

	React.useEffect(() => {
		console.log(isHovering);
	}, [isHovering]);

	return (
		<Link to={props.href}>
			<button
				className={className}
				style={{ ...props.style }}
				onMouseEnter={() => setIsHovering(true)}
				onMouseLeave={() => setIsHovering(false)}>
				<div className={buttonStyles['icon-button-fancy-content']}>
					{props.children}
				</div>
				<div className={buttonStyles['icon-button-fancy-inner-wrapper']}>
					<Icon name={name} color={color} size={size} />
				</div>
			</button>
		</Link>
	);
}

IconButtonFancy.propTypes = {
	style: PropTypes.object,
	children: PropTypes.node,
	icon: PropTypes.object.isRequired,
	href: PropTypes.string,
};

export default IconButtonFancy;
