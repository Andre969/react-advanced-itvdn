import React, { Component } from 'react'
import unsplashData from './unsplash-data'
import PicItem from './PicItem'
import PreviewModal from './PreviewModal'


export default class Gallery extends Component {
	constructor() {
		super()

		this.state = {
			paginator: 1,
			itemsPerPage: 12,
			modalIsOpen: false,
			selectedPic: { pic: '', link: '' }
		}
	}

	loadMore() {
		const { paginator } = this.state
		this.setState({ paginator: paginator + 1 })
	}

	openPreview(e, pic, link) {
		e.preventDefault()

		this.setState({
			modalIsOpen: true,
			selectedPic: { pic, link }
		})
	}

	closePreviewModal() {
		this.setState({
			modalIsOpen: false,
			selectedPic: { pic: '', link: '' }
		})
	}

	render() {
		const { paginator, itemsPerPage, modalIsOpen, selectedPic } = this.state

		return <div>
			<h1 style={{ textAlign: 'center', marginTop: 50 }}>Unsplash Gallery</h1>
			<div className="container">
				{unsplashData.slice(0, paginator * itemsPerPage).map(item => {
					return <PicItem key={item.link} {...item} openModal={this.openPreview.bind(this)}/>
				})}
			</div>

			<div style={{ textAlign: 'center', margin: 100 }}>
				{paginator * itemsPerPage < unsplashData.length
					? <a onClick={this.loadMore.bind(this)} className="btn load-more">Load more…</a>
					: null
				}
			</div>

			<PreviewModal isOpen={modalIsOpen} selectedPic={selectedPic}
			              closeModal={this.closePreviewModal.bind(this)}/>
		</div>
	}
}