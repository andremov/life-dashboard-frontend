import React from 'react';
import {MovableCard} from '../Cards';

export function Timer({visible, toggleCard}) {
	return (
		<MovableCard visible={visible} className={'timer'} toggleCard={toggleCard}>
			Timer
		</MovableCard>
	);
}

