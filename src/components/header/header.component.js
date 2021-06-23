import React from 'react';
import Logo from '../../assets/logo.png'
import {Link} from 'react-router-dom';
import './header.styles.scss';
import {withRouter} from 'react-router-dom';
import {auth} from '../../firebase/firebase-utils';


const Header = ({history,match, actualUser}) =>(
	<div className='header'>
		<div className='image' style={{backgroundImage: `url(${Logo})`}} onClick={()=>history.push('/')}/>
		<div className='options'>
			{
				actualUser?
				(
					<div className='option' onClick={()=>auth.signOut()}>
						Sign Out
					</div>
				):
				(
					<Link className='option' to='/signin'>
							Sign In & Sign Up
					</Link>
				)
			}
			<Link className='option' to='/company'>Company</Link>
			<Link className='option' to='/shop'>Shop</Link>
			<Link className='option' to='/where'>Dove Siamo</Link>
			<Link className='option' to='/contacts'>Contattaci</Link>
		</div>
	</div>
)

export default withRouter(Header);