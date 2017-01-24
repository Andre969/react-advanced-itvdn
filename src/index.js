import React from 'react'
import { render } from 'react-dom'
import './assets/sass/main.scss'
import ReactTestComponent from './ReactComponent'

render(
	<ReactTestComponent />, 
	document.getElementById('mount_place')
)