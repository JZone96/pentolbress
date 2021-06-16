import React, {Component} from 'react';

import './slideshow.styles.scss';

import {withRouter} from 'react-router-dom';
import CustomButton from '../custom-button/custom-button.component'
class SlideShow extends Component{
	constructor(props){
		super(props);
		this.state = {
			activeSlide: 0,
			delay: 5000,
			imagesUrls: [
			"https://www.pentolpress.it//wp-content//uploads//2021//03//Julienne.jpg",
			 "https://www.pentolpress.it//wp-content//uploads//2021//03//titanio.jpg",
			 "https://www.pentolpress.it//wp-content//uploads//2021//03//granit.jpg"
			 ]
		}
	}
	slideUpdater(activeSlide, delay, imagesUrls){
		setTimeout(()=>{
			activeSlide === imagesUrls.length - 1 ? 
			this.setState({activeSlide: 0})
			: this.setState ({activeSlide: this.state.activeSlide + 1})
		}, delay)
	}
	componentDidMount(){
		const {activeSlide, delay, imagesUrls} = this.state;
		this.slideUpdater(activeSlide, delay, imagesUrls);
	}
	componentDidUpdate(prevProps){
		const {activeSlide, delay, imagesUrls} = this.state;
		if (activeSlide !== prevProps.activeSlide){
			this.slideUpdater(activeSlide, delay, imagesUrls);
		}
	}
	render(){
		const {activeSlide, imagesUrls} = this.state;
		return(
			<div className='slideshowSlider'>
				<div className='overlay'>
						{
							imagesUrls.map((imageUrl,idx)=>(
								<div key = {idx} className={idx === activeSlide? 'slide active': 'slide'}>
								{
									idx === activeSlide && 
									(<img key = {idx} className='image' alt='padellame'src={imageUrl}/>)
								}
								</div>
									
								))
						}
					<div className='catchy-phrase'>
						<h1 className='title'>TRE LINEE, UNA SOLA COSTANTE: LA QUALITA'</h1>
						<CustomButton onClick={()=> this.props.history.push(`/store`)}>Visita il nostro store</CustomButton>	
					</div>
				</div>
			</div>
		)
	}
	
}

export default withRouter(SlideShow);