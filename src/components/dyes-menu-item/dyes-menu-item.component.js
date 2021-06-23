import React, {Component} from 'react';

import {withRouter} from 'react-router-dom';
import CustomButton from '../custom-button/custom-button.component';
import PanCard from '../pan-card/pan-card.component';
import SHOP_DATA from '../../pages/shop/shop.data';
import './dyes-menu-item.styles.scss';

class DyesMenuItem extends Component {
	constructor(props){
		super(props)
		this.state = {
			cardRev: false,
			shopData: SHOP_DATA
		}
	}
	render(){
		const {title, subtitle, buttonChildren,bgUrl,imageUrl,link,history, match} = this.props;
		const {cardRev, shopData} = this.state;
		return(
			<div className='scene'>
				<div className={`card ${cardRev? 'is-flipped': null}`}>
				{
					!cardRev? (
						<div className='dyes-menu-item front' style = {{backgroundImage: `url(${bgUrl})`}}>
						{
							title!== 'Pietra' ? (
								<div className='titles-button-image'>
									<div className='titles-and-button'>
										<h1 className='title'>{title}</h1>
										<span className='subtitle'>{subtitle}</span>
										<CustomButton className='button' onClick={()=> this.setState({cardRev: !cardRev})}>{buttonChildren}</CustomButton>
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
										<CustomButton className='button' onClick={()=> this.setState({cardRev: !cardRev})}>{buttonChildren}</CustomButton>
									</div>
								</div>
								)
						}
						</div>
						):(
							<div className='dyes-menu-item back' style = {{backgroundImage: `url(${bgUrl})`}}>	
							{ 
								shopData.map((dye,index)=>	{
									if(dye.title === title){
										return(
										<div className='container-pan'>
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
									}else{
										return null;
									}
									
								})
							}
								<CustomButton className='button' onClick={()=> history.push(`${link}`)}>{`Entra nello shop ${title}`} </CustomButton>
								<CustomButton className='button' onClick={()=> this.setState({cardRev: !cardRev})}>Descrizione</CustomButton>
							</div>
						)
				}	
				</div>
			</div>
		)
	}
		
}

export default withRouter(DyesMenuItem);