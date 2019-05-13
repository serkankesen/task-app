import React, {Component} from 'react';
import { connect } from 'react-redux';
import NewLinkForm from '../NewLinkForm';
import {
	onNewLinkSubmit,
	onUpdateLinkSubmit,
	fetchLink
} from '../../actions/newLink';
import { Button, Icon } from 'semantic-ui-react'
import {Link} from "react-router-dom";

class NewLinkPage extends Component {
	componentDidMount() {
		const { match } = this.props;
		if (!this.props.link && match.params._id) {
		  this.props.fetchLink(match.params._id);
		}
	}

	render() {
		return (
			<div>
				<Button icon labelPosition='left' as={Link} to="/" exact="true">
					Return to List
					<Icon name='arrow left' />
				</Button>
				<h2>Add New Link</h2>
				<NewLinkForm
					link={this.props.link}
					newLink={this.props.newLink}
					onNewLinkSubmit={this.props.onNewLinkSubmit}
					onUpdateLinkSubmit={this.props.onUpdateLinkSubmit}/>
			</div>
		);
	}
}

const mapStateToProps = ({ newLink, links }, props) => {
	return {
		newLink,
		link: links.linkList.find(item => item._id === props.match.params._id)
	}
};

const mapDispatchToProps = {
	onNewLinkSubmit,
	onUpdateLinkSubmit,
	fetchLink
};

export default connect(mapStateToProps, mapDispatchToProps)(NewLinkPage);
