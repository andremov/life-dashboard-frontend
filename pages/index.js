import React from 'react';
import Head from 'next/head'
import {Menu} from '../components/Menu';
import {OtherControls} from '../components/OtherControls';

export default function Home() {
	const [activeTools, setActiveTools] = React.useState({spaces: false, timer: false, music: false, tasks: false})
	const [currentTheme, setCurrentTheme] = React.useState(false)

	const handleToolChange = (name) => setActiveTools({...activeTools, [name]: !activeTools.name})
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
		</div>
	)
}
