import React from 'react';
import {withRouter} from 'react-router-dom';

import './julienne-page.styles.scss';

const JuliennePage = ({history}) =>(
	<div>
	    <button onClick={()=> history.push('/')}>Homepage</button>
	    <h1>Gold Page</h1>
	  </div>
)

export default withRouter(JuliennePage);