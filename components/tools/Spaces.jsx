import React from 'react';
import {MovableCard} from '../Cards';

export function Spaces({visible, toggleCard}) {
	return (
		<MovableCard visible={visible} className={'spaces'} toggleCard={toggleCard}>
			Spaces
		</MovableCard>
	);
}

