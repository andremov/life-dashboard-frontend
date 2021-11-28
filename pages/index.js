import React from 'react';
import Head from 'next/head'
import {Menu} from '../components/Menu';
import {OtherControls} from '../components/OtherControls';
import {Tasks, Spaces, Timer, Music} from '../components/tools';

export default function Home() {
	const [activeTools, setActiveTools] = React.useState({spaces: false, timer: false, music: false, tasks: false})
	const [currentTheme, setCurrentTheme] = React.useState(false)

	const handleToolChange = (name) => {
		setActiveTools({...activeTools, [name]: !activeTools[name]})
	}
	const swapTheme = () => setCurrentTheme(!currentTheme)

	return (
		<div className={`container ${['dark-theme', 'light-theme'][+currentTheme]}`}>
			<Head>
				<title>Life Dashboard</title>
				<meta name="description" content="For when you need help." />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Menu setTool={handleToolChange} />
			<OtherControls currentTheme={+currentTheme} swapTheme={swapTheme} />

			<Tasks visible={activeTools.tasks} toggleCard={() => handleToolChange('tasks')}/>
			<Timer visible={activeTools.timer} toggleCard={() => handleToolChange('timer')}/>
			<Spaces visible={activeTools.spaces} toggleCard={() => handleToolChange('spaces')}/>
			<Music visible={activeTools.music} toggleCard={() => handleToolChange('music')}/>
		</div>
	)
}
