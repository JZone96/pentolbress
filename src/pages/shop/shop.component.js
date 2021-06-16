import React,{Component} from 'react';

import SHOP_DATA from './shop.data.js';

class ShopPage extends Component{
	constructor(){
		super();

		this.state= {
			collection: SHOP_DATA
		}
	}

	render(){
		return(
			<div>SHOP PAGE</div>
		)
	}
}

export default ShopPage;