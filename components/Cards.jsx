import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faTimes} from '@fortawesome/free-solid-svg-icons';

export function StaticCard({className, children}) {
	return (
		<div className={`card ${className}`}>
			<div className={'card__body'}>
				{children}
			</div>
		</div>
	);
}

export function MovableCard({className, children, visible}) {
	const [position, setPosition] = React.useState({top: 100, left: 100})

	return (
		<div
			className={`card ${className} ${['', 'hidden'][+visible]}`}
			style={position}
		>
			<div className={'card__top'}>
				<div className={'card__close-btn'}>
				<FontAwesomeIcon icon={faTimes}/>
				</div>
			</div>
			<div className={'card__body'}>
				{children}
			</div>
		</div>
	);
}
