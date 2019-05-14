import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Card, Grid, Button, Modal, Header, Icon } from 'semantic-ui-react'
import {NavLink} from "react-router-dom";

class LinkList extends Component {
	state={
		removeLink:""
	}

	render() {
	return (
		<div>
			<Grid verticalAlign='middle' columns={1}>
				<Grid.Column >
					<Button content='SUBMIT A LINK' icon='plus' size='big' as={NavLink} to="/links/new" />
				</Grid.Column>
				{
					this.props.links.map((link, key) => (
						<Grid.Column key={key}>
							<Card fluid>
								<Card.Content>
									<Card.Header>{link.vote} {link.vote > 1 ? "POINTS" : "POINT" }</Card.Header>
									<Card.Meta>{link.name}</Card.Meta>
									<Card.Description>
									  {"("}{link.url}{")"}
									</Card.Description>
								</Card.Content>
								<Card.Content extra>
									<div className='ui three buttons'>
									<Button basic color='gray'>
										<Icon name='arrow up' />Up Vote
									</Button>
									
									<Button basic color='gray'>
									<Icon name='arrow down'/>Down Vote
									</Button>
									<Button animated='vertical' basic color='red' type='submit' onClick={() => this.setState({removeLink:link})}>
										<Button.Content hidden>Trash</Button.Content>
										<Button.Content visible>
											<Icon name='trash' />
										</Button.Content>
									</Button>
									</div>
								</Card.Content>
							</Card>
						</Grid.Column>
					))
				}
			</Grid>
			<Modal open={this.state.removeLink} basic size='small'>
				<Header icon='archive' content='Remove Link' />
				<Modal.Content>
					<p>
						Do you want to remove:
					</p>
					<b>{this.state.removeLink.name}</b>
				</Modal.Content>
				<Modal.Actions>
					<Button basic color='red' inverted>
						<Icon name='remove' onClick={() => { this.setState({removeLink:""})}}/> No
					</Button>
					<Button color='green' inverted>
						<Icon name='checkmark' onClick={() => {this.setState({removeLink:""})}}/> Yes
					</Button>
				</Modal.Actions>
			</Modal>
		</div>
	);
};
}
LinkList.propTypes = {
	links: PropTypes.array.isRequired
};
LinkList.defaultProps = {};

export default LinkList;