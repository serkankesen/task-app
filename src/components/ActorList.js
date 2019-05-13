import React from 'react';
import PropTypes from 'prop-types';
import { Card, Grid, Button,Icon } from 'semantic-ui-react'
import {Link, NavLink} from "react-router-dom";

const extra = (link, deleteLink) => {
	return(
		<div className="ui two buttons">
			<Button animated='vertical' onClick={() => deleteLink(link._id)}>
				<Button.Content hidden>Delete</Button.Content>
				<Button.Content visible>
					<Icon name='trash' />
				</Button.Content>
			</Button>
		</div>
	);
};

const ActorList = props => {
	return (
		<div>
			<Grid stackable relaxed='very' columns={1}>
				<Grid.Column verticalAlign='middle'>
					<Button content='SUBMIT A LINK' icon='plus' size='big' as={NavLink} to="/links/new" />
				</Grid.Column>
				{
					props.actors.map((actor, key) => (
						<Grid.Column key={key}>
							<Card>
								<Card
									image={actor.photo}
									header={ actor.name}
									extra={extra(actor, actor.deleteLink)}
								/>
							</Card>
						</Grid.Column>
					))
				}
			</Grid>
		</div>
	);
};

ActorList.propTypes = {
	actors: PropTypes.array.isRequired
};
ActorList.defaultProps = {};

export default ActorList;