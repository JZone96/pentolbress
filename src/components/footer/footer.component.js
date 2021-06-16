import React from 'react';

import './footer.style.scss';

const Footer = () =>(
	<div className='footer'>
		<div className='about-account-follow'>
			<div className='item about'>
				<h1 className='title'>ABOUT</h1>
				<span className='voice'>Company</span>
				<span className='voice'>Condizioni</span>
				<span className='voice'>Qualità</span>
				<span className='voice'>Privacy</span>
			</div>
			<div className='item account'>
				<h1 className='title'>ACCOUNT</h1>
				<span className='voice'>Il mio profilo</span>
				<span className='voice'>Servizio Clienti</span>
				<span className='voice'>Contattaci</span>
			</div>
			<div className='item follow'>
				<h1 className='title'>FOLLOW</h1>
				<span className='voice'>Facebook</span>
				<span className='voice'>Twitter</span>
				<span className='voice'>Instagram</span>
			</div>
		</div>
		<div className='company-informations'>
			<span className='info'>
				© 2021 © Tutti i diritti sono riservati – PENTOLBRESS 
				P.iva: 12345678890 – Via Dei Poveri, 142 – 12345 Passo Del Cavallo (PD) – Italy
				code with love by Jzone96
			</span>
		</div>
	</div>
)

export default Footer;