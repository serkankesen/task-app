import React, {Component} from 'react';
import LinkList  from '../LinkList';

class HomePage extends Component {
	state = {
		links: [
			{
				name: "HepsiBurada",
				url: "https://hepsiburada.com",
				vote:2
			},
			{
				name: "Google",
				url: "https://www.google.com",
				vote:3
			},
			{
				name: "Amazon",
				url: "https://amazon.com",
				vote:4
			},
			{
				name: "Facebook",
				url: "https://facebook.com",
				vote:0
			},
			{
				name: "Twitter",
				url: "https://twitter.com",
				vote:0
			},
			{
				name: "Serkan Kesen",
				url: "https://serkankesen.com",
				vote:0
			}
		]
	};
	render() {
		return (
			<div>
				<LinkList links={this.state.links}/>
			</div>
		);
	}
}

export default HomePage;