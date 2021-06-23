import React, {Component} from 'react';

import './signup.styles.scss';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

class SignUp extends Component{
	constructor(){
		super();
		this.state = {
			displayName: '',
			email: '',
			password: '',
			confirmPassword: ''
		}
	}

	handleChange = (event) =>{
		const {value, name} = event.target;

		this.setState({[name]: value});
	}

	onSubmit = (event) =>{
		event.preventDefault()

		this.setState({
			displayName: '',
			email: '',
			password: '',
			confirmPassword: ''
		});
	}
	render(){
		const {displayName, email, password, confirmPassword} = this.state; 
		return(
			<div className='signup' style={{backgroundImage: 'url(https://pentolpress.ifogliarini.it/wp-content/uploads/2021/03/julienne-texture.png)'}}>
				<h2 className='title'>Non ho un account</h2>
				<span>Iscriviti con le tue credenziali</span>
				<form className='submit-form' onSubmit={this.onSubmit}>
					<FormInput
					label='Display Name'
					name='displayName'
					type='text'
					value={displayName}
					handleChange={this.handleChange}/>

					<FormInput
					label='Email'
					name='email'
					type='email'
					value={email}
					handleChange={this.handleChange}/>

					<FormInput
					label='Password'
					name='password'
					type='password'
					value={password}
					handleChange={this.handleChange}/>

					<FormInput
					label='Conferma Password'
					name='confirmPassword'
					type='password'
					value={confirmPassword}
					handleChange={this.handleChange}/>

					<CustomButton type='submit' children='submit'/>


				</form>

			</div>
		);
	}
}

export default SignUp;