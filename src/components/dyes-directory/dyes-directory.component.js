import React, {Component} from 'react';

import DyesMenuItem from '../dyes-menu-item/dyes-menu-item.component'
import './dyes-directory.styles.scss';

class DyesDirectory extends Component{
	constructor(){
		super();
		this.state = {
			dyes: [{
				id:1,
				title:'Gold',
				subtitle:'Linea completa ed innovativa di strumenti di cottura',
				buttonChildren:'Scopri Gold',
				bgUrl:'https://pentolpress.ifogliarini.it/wp-content/uploads/2021/03/julienne-texture.png',
				imageUrl:'https://www.pentolpress.it/wp-content/uploads/2021/03/julienne-2-684x1024.jpg',
				link:'/gold'
			},
			{
				id:2,
				title:'Pietra',
				subtitle:'Resistente come la pietra e altamente antiaderente',
				buttonChildren:'Scopri Pietra',
				bgUrl:'https://pentolpress.ifogliarini.it/wp-content/uploads/2021/03/granit-texture.png',
				imageUrl:'https://www.pentolpress.it/wp-content/uploads/2021/03/granit-2-684x1024.jpg',
				link:'/pietra'
			},
			{
				id:3,
				title:'Eclipse',
				subtitle:'La linea adatta ad ogni ricetta e ad ogni utilizzo',
				buttonChildren:'Scopri Eclipse',
				bgUrl:'https://pentolpress.ifogliarini.it/wp-content/uploads/2021/03/titanio-texture.png',
				imageUrl:'https://www.pentolpress.it/wp-content/uploads/2021/03/titanio-4-684x1024.jpg',
				link:'/eclipse'
			}
			]
		}
	}

	render(){
		return(
			<div className='dyes-directory'>
				{
					this.state.dyes.map(({id,...otherProps})=>(
						<DyesMenuItem key={id} {...otherProps}/>
						))
				}				
			</div>
			)
	}

}

export default DyesDirectory;