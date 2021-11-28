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

export function MovableCard({className, children, visible, toggleCard}) {
	const [isDragging, setDragging] = React.useState(false)
	const [position, setPosition] = React.useState({top: 100, left: 100})
	const [eventDisplacement, setEventDisplacement] = React.useState({top: 0, left: 0})

	const handleMouseDown = e => {
		setDragging(true)
		const {pageX: left, pageY: top} = e;
		setEventDisplacement({left: position.left - left, top: position.top - top})
	}

	const handleMouseUp = () => {
		setDragging(false)
	}

	const handleMouseMove = e => {
		if (!isDragging) {
			return
		}
		const {pageX: left, pageY: top} = e;
		setPosition({top: top + eventDisplacement.top, left: left + eventDisplacement.left})
	}

	return (
		<div
			className={`card ${className} ${['hidden', ''][+visible]}`}
			style={position}
		>
			<div
				className={'card__top'}
				onMouseDown={handleMouseDown}
				onMouseUp={handleMouseUp}
				onMouseMove={handleMouseMove}
			>
				<div className={'card__close-btn'}>
				<FontAwesomeIcon icon={faTimes} onClick={toggleCard}/>
				</div>
			</div>
			<div className={'card__body'}>
				{children}
			</div>
		</div>
	);
}
