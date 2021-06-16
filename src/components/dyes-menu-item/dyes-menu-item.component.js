import React from 'react';

import {withRouter} from 'react-router-dom';
import CustomButton from '../custom-button/custom-button.component';
import PanCard from '../pan-card/pan-card.component';
import SHOP_DATA from '../../pages/shop/shop.data';
import './dyes-menu-item.styles.scss';

const DyesMenuItem = ({title, subtitle, buttonChildren,bgUrl,imageUrl,link,history, match}) =>{
const cardRev = false;
const styleReverse = {
	backgroundImage: `url(${bgUrl})`,
}
		return(
			<div className='scene'>
				<div className='card'>
					<div className='dyes-menu-item front' style = {{backgroundImage: `url(${bgUrl})`}}>
					{
						title!== 'Pietra' ? (
							<div className='titles-button-image'>
								<div className='titles-and-button'>
									<h1 className='title'>{title}</h1>
									<span className='subtitle'>{subtitle}</span>
									<CustomButton className='button' onClick={()=> history.push(`${link}`)}>{buttonChildren}</CustomButton>
								</div>
								<div className='image'>
										<img src={imageUrl} alt='padelle'/>
								</div>
							</div>
							) :(
							<div className='titles-button-image'>
								<div className='image'>
										<img src={imageUrl} alt='padelle'/>
								</div>
								<div className='titles-and-button'>
									<h1 className='title'>{title}</h1>
									<span className='subtitle'>{subtitle}</span>
									<CustomButton className='button' onClick={()=> history.push(`${link}`)}>{buttonChildren}</CustomButton>
								</div>
							</div>
							)
					}
					</div>
					<div className='dyes-menu-item back' style = {styleReverse}>	
					{ 
						SHOP_DATA.map((dye,index)=>	{
							if(dye.title === title){
								return(
								<div className='container'>
									{
										dye.title === title? 
										dye.items.map(({id, ...otherProps})=>{
											return(
													<PanCard key={id} 
													{...otherProps} />
											);
										}):null
									}
								</div>
							);
							}
							
						})
					}
						<CustomButton className='button' onClick={()=> history.push(`${link}`)}>{buttonChildren}</CustomButton>
					</div>
				</div>
			</div>
		)
}

export default withRouter(DyesMenuItem);