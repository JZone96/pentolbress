import React, {Component} from 'react';

import './signin.styles.scss';
import CustomButton from '../custom-button/custom-button.component';
import FormInput from '../form-input/form-input.component';
import {signInWithGoogle} from '../../firebase/firebase-utils'

class Signin extends Component{
	constructor(){
		super();
		this.state={
			email:'',
			password:''
		}
	}
	handleSignin = (event) =>{
		event.preventDefault();
		this.setState({email: '', password:''}, ()=>console.log(this.state));

	}

	handleChange = event =>{
		const{name, value} = event.target;
		this.setState({[name]: value},()=>console.log(this.state));
	}
	render(){
		const {email,password} = this.state;
		return(
			<div className='signin' style={{backgroundImage:`url(https://pentolpress.ifogliarini.it/wp-content/uploads/2021/03/granit-texture.png)`}}>
				<h1>Ho già un account</h1>
				<span>Log in con email e password</span>
				<form className='submit-form' onSubmit={this.handleSignin}>
					<FormInput label='Email' name='email' type='email' value={email} handleChange={this.handleChange}/>
					<FormInput label='Password' name='password' type='password' value={password} handleChange={this.handleChange}/>
					<div className='buttons'>
						<CustomButton type='submit' children='submit'/>
						<CustomButton children='SignIn With Google' onClick={signInWithGoogle}/>
					</div>
				</form>
			</div>
		)
	}
}
export default Signin;