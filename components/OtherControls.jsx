import React from 'react';
import {StaticCard} from './Cards';
import {IconButton} from './Buttons';
import {faExpand, faMoon, faSun} from '@fortawesome/free-solid-svg-icons';

export function OtherControls({currentTheme, swapTheme}) {

	function handleFullScreen() {
		const elem = document.documentElement
		if (document.fullscreenElement) {
			const rfs = document.exitFullscreen || document.webkitExitFullscreen || document.mozExitFullscreen || document.msExitFullscreen;
			rfs.call(document);
		} else {
			const rfs = elem.requestFullscreen || elem.webkitRequestFullScreen || elem.mozRequestFullScreen || elem.msRequestFullscreen;
			rfs.call(elem);
		}
	}

	return (
		<StaticCard className={'other-controls'}>
			<IconButton icon={faExpand} onClick={handleFullScreen} />
			<div className={'divider'} />
			<IconButton icon={[faMoon, faSun][currentTheme]} onClick={swapTheme} />
		</StaticCard>
	);
}

