import React, { Component } from 'react'
import DataUriPic from './assets/images/react_logo_small.jpg'
import OriginalPic from './assets/images/redux_logo_big.png'


export default class ReactTest extends Component {

	constructor() {
		super()

		this.state = {
			counter: 0
		}
	}

	render() {
		return <div>
			{this.state.counter}
			{ " " }
			<button 
				onClick={() => this.setState({counter: ~~(Math.random() * 999)})}>
				increase counter
			</button>

			<br/><br/><br/>

			<img src={DataUriPic} /><br/>
			<span>Base64 pic</span>

			<br/>
			<img src={OriginalPic} style={{maxWidth: '300px'}} /><br/>
			<span>Original pic</span>
		</div>
	}
}