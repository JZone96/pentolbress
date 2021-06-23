import React from 'react';

import DyesDirectory from '../../components/dyes-directory/dyes-directory.component';
import SlideShow from '../../components/slideshow/slideshow.component';
import './homepage.styles.scss'
const Homepage = () =>(
	<div className='homepage'>
		<SlideShow/>
		<DyesDirectory/>
			<div className='italy-quality'>
			</div>

	</div>
)

export default Homepage;