import React from 'react';
import {MovableCard} from '../Cards';

export function Music({visible, toggleCard}) {
	return (
		<MovableCard visible={visible} className={'music'} toggleCard={toggleCard}>
			Tasks
		</MovableCard>
	);
}

