import React from 'react';
import {MovableCard} from '../Cards';
import {IconButton, ThemedButton} from '../Buttons';
import {faCog, faSync} from '@fortawesome/free-solid-svg-icons';

const formatDigits = number =>  `${['', '0'][+(number < 10)]}${number}`

const formatTime = seconds => `${formatDigits(Math.floor(seconds/60))}:${formatDigits(seconds%60)}`

export function Timer({visible, toggleCard}) {
	const [intervalData, setIntervalData] = React.useState({
		pomodoro: 20*60,
		short: 5*60,
		long: 10*60
	})
	const [timerData, setTimerData] = React.useState({
		currentInterval: 'pomodoro',
		remaining: intervalData['pomodoro'],
		startDate: undefined
	})

	React.useEffect(() => {
		console.log('hey')
	})

	const changeActiveInterval = name => {
		setTimerData({
			currentInterval: name,
			remaining: intervalData[name],
			startDate: undefined
		})
	}

	const resetActiveInterval = () => {
		setTimerData({
			...timerData,
			remaining: intervalData[timerData.currentInterval],
			startDate: undefined
		})
	}

	const currentRemaining = () => {
		const {remaining, startDate} = timerData;
		const currentDate = Math.floor(Date.now()/1000)
		console.log(remaining, (startDate? startDate - currentDate : 0))
		return remaining + (startDate? startDate - currentDate : 0)
	}

	const startHandler = () => {
		if (timerData.startDate) {
			setTimerData({
				...timerData,
				remaining: currentRemaining(),
				startDate: undefined
			})
		} else {
			setTimerData({
				...timerData,
				startDate: Math.floor(Date.now()/1000)
			})
		}
	}

	return (
		<MovableCard visible={visible} className={'timer'} toggleCard={toggleCard}>
			<div className={'timer__top'}>
				<div className={'timer__display'}>
					{formatTime(currentRemaining())}
				</div>
				<div className={'timer__start'}>
					<ThemedButton
						label={'Start'}
						onClick={startHandler}
					/>
				</div>
				<div className={'timer__reset'}>
					<IconButton
						icon={faSync}
						onClick={resetActiveInterval}
					/>
				</div>
			</div>
			<div className={'timer__bottom'}>
				<ThemedButton
					className={'timer__interval'}
					label={'Pomodoro'}
					onClick={() => changeActiveInterval('pomodoro')}
				/>
				<ThemedButton
					className={'timer__interval'}
					label={'Short Break'}
					onClick={() => changeActiveInterval('short')}
				/>
				<ThemedButton
					className={'timer__interval'}
					label={'Long Break'}
					onClick={() => changeActiveInterval('long')}
				/>
				<IconButton
					className={'timer__settings'}
					icon={faCog}
				/>
			</div>
		</MovableCard>
	);
}

