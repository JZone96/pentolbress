import React from 'react';

import './pan-card.styles.scss';

const PanCard = ({name,imageUrl,id,price}) =>(
	<div className='pan'>
		<div className='image' 
		style={{
			backgroundImage: `url(${imageUrl})`
		}}/>
		<div className='informations'>
			<span className='name'>{name}</span>
			<span className='price'>{price}$</span>
		</div>
	</div>
)
export default PanCard;