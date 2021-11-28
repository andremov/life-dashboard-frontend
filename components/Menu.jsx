import React from 'react';
import {StaticCard} from './Cards';
import {faMusic, faStopwatch, faTasks, faVideo} from '@fortawesome/free-solid-svg-icons'
import {SquareButton} from './Buttons';

export const Menu = ({setTool}) =>
	<StaticCard className={'menu'}>
		<h3>tools</h3>
		<SquareButton
			icon={faVideo}
			label={'Spaces'}
			onClick={() => setTool('spaces')}
		/>
		<SquareButton
			icon={faStopwatch}
			label={'Timer'}
			onClick={() => setTool('timer')}
		/>
		<SquareButton
			icon={faMusic}
			label={'Music'}
			onClick={() => setTool('music')}
		/>
		<SquareButton
			icon={faTasks}
			label={'Tasks'}
			onClick={() => setTool('tasks')}
		/>
	</StaticCard>

