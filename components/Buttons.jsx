import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

export const SquareButton = ({icon, label, onClick}) =>
	<button className={'square-btn'} onClick={onClick}>
		<FontAwesomeIcon icon={icon} />
		<div className={'label'}>{label}</div>
	</button>


export const IconButton = ({icon, onClick}) =>
	<button className={'icon-btn'} onClick={onClick}>
		<FontAwesomeIcon icon={icon} />
	</button>
