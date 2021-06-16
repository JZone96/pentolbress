import React from 'react';
import {withRouter} from 'react-router-dom';

import './custom-button.styles.scss';

const CustomButton = ({children, onClick,history, match}) =>(
	<button className= 'button' onClick={onClick}>
		{children}
	</button>
)

export default withRouter(CustomButton);