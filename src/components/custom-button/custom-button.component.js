import React from 'react';
import {withRouter} from 'react-router-dom';

import './custom-button.styles.scss';

const CustomButton = ({type,children, onClick,history, match}) =>(
	<button className={`button ${children.includes('Google')? 'Google' : 'null'}`} onClick={onClick} type={type}>
		{children}
	</button>
)

export default withRouter(CustomButton);