import React from 'react';

import './signin-signup.styles.scss';
import Signin from '../../components/signin/signin.component';
import SignUp from '../../components/signup/signup.component';

const SignInSignUp = () =>{
	return(
		<div className='container'>
			<Signin/>
			<SignUp/>
			
		</div>
	)
}

export default SignInSignUp;